const jwt = require('jsonwebtoken');
const UsuarioRepository = require('../database/repositories/impl/UsuarioRepBD');

//definindo lista de rotas e métodos públicos da aplicação
const rotasPublicas = [
    {
        url: '/login',
        metodo: 'POST'
    },
    {
        url: '/product',
        metodo:'POST'
    },
    {
        url: '/product',
        metodo:'GET'
    },
    {
        url: '/product',
        metodo:'PUT'
    },
    {
        url: '/product',
        metodo:'DELETE'
    },
    {
        url: '/usuario',
        metodo:'POST'
    },
];

module.exports = (req, res, next) => {
    req.logger.info('Verificando permissão de acesso a', `rota: ${req.url}`);

    //método find - caso a rota e o método fizerem parte do array de rotas públicas, será atribuido a const
    const rotaPublica = rotasPublicas.find(rota => 
        rota.url === req.url && rota.metodo === req.method.toUpperCase());

    //quando a rota da requisição for publica vai entrar no if    
    if (rotaPublica) {
        req.logger.info('Rota publica, requisição liberada');
        //o return vai interromper o fluxo da aplicação para não seguir para autorização
        return next();
    } 
    
    // headers - usado para acessar o header do BD
    const authorization = req.headers.authorization;

    //mensagem de erro se o header de autorização não for enviado
    if (!authorization) {
        req.logger.info('Requisição negada, sem header de autorização');
        res.status(401).json({
            status:401,
            erro: 'Acesso negado! Você precisa enviar o header de autorização!'
        });

        console.log('Falha na autorização!');
        return res;
    }

    //armazenando token de autorização
    const token = authorization.substr(7);

    // verify - vai verificar se o token armazenado é um token jwt válido
    //a função callback recebe como parametro um erro (err) caso o token não puder ser decodificado
    //ou o token decodificado (decoded) caso a decodificação seja realizada com sucesso

    jwt.verify(token, process.env.CHAVE_SECRETA_JWT, async (err, decoded) => {
        if (err) {
            req.logger.error('erro ao decodificar o token JWT', `token = ${token}`);
            return res.status(401).json({
                status: 401,
                erro: 'Acesso negado! Problema ao decodificar o token de autorização'
            }); 
        }

        //se err estiver vazio
        req.logger.debug('token JWT decodificado com sucesso!', `idUsuario = ${decoded._id}`);

        //Busca o usuário no BD através do métod filtrarPorId
        const usuario = await UsuarioRepository.filtrarPorId(decoded._id);
        //caso usuario não for encontrado retorna erro
        if(!usuario) {
            req.logger.error('Usuário não encontrado no BD', `id= ${decoded._id}`);
            return res.status(401).json({
                status: 401,
                erro: 'Acesso negado! Usuário não encontrado!'
            });
        }

        //caso o usuario seja encontrado, atribui o usuario autenticado a propriedade usuario da requisição
        req.usuario = usuario;
        next();

    });
}
