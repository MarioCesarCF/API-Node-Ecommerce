//importando implementação concreta do repository do usuario
const UsuarioRepository = require('../database/repositories/impl/UsuarioRepBD');

class UsuarioService {
    //lógica do cadastro do usuario
    async cadastrar(dadosUsuario) {
        //iniciando lista onde serão armazenados os erros encontrados durante o cadastro
        const listaErros = [];

        //validação do email 
        if (dadosUsuario.email) {
            //o indexOf vai verificar se o email possui um @ e um ., se não possuir terá valor -1
            //mas se o valor for diferente de -1, as constantes receberão valor true
            const temArroba = dadosUsuario.email.indexOf('@') !== -1;
            const temPonto = dadosUsuario.email.indexOf('.') !== -1;
            //caso constantes recebam valor false ou vazio, inclui erro na lista de erros
            if (!temArroba || !temPonto) {
                listaErros.push('Email inválido!')
            } else {
                //caso email válido, verifica se email já está cadastrado no BD
                const emailDuplicado = await UsuarioRepository.filtrar({
                    //envia email como parametro para o método filtrar do repository
                    email: dadosUsuario.email
                });

                if (emailDuplicado && emailDuplicado.length) {
                    listaErros.push ('Esse email já foi cadastrado!')
                }
            }

        } 

        //criando objeto para retornar os erros
        const retorno = {
            erros: null, 
            usuario: null
        } 

        //se houver erros, atribui a lista de erros a propriedade erros
        if (listaErros.length) {
            retorno.erros = listaErros;
        } else {
            //do contrário, chama o método que vai realizar o cadastro do usuario passando os dados
            const usuarioCadastrado = await UsuarioRepository.cadastrar({
                nome: dadosUsuario.nome,
                email: dadosUsuario.email,
                cep: dadosUsuario.cep,
                rua: dadosUsuario.rua,
                numero: dadosUsuario.numero,
                bairro: dadosUsuario.bairro,
                cidade: dadosUsuario.cidade,
                estado: dadosUsuario.estado,
                senhaConfirmada: dadosUsuario.senhaConfirmada

            });

            retorno.usuario = usuarioCadastrado;
        }

        return retorno;
    }
}

module.exports = UsuarioService;

