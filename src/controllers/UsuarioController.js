const HttpController = require('/HttpController');
const UsuarioService = require('../services/UsuarioService');

class UsuarioController extends HttpController {
    //implementando método da classe mãe
    configurarRota(Url) {
        //bind(this) - indica que o método cadastrar será chamado dentro do contexto da própria classe
        this.express.post(`${Url}usuario`, this.cadastrar.bind(this));
    }

    async cadastrar(req, res) {
        const dadosUsuario = req.body;

        try {
            const service = new UsuarioService();
            const resposta = await service.cadastrar(dadosUsuario);

            //verificar se houve erros durante o cadastro
            if (resposta.erros) {
                return res.status(400).json({
                    status: 400,
                    //o joion vai transformar o array em uma string com os itens separados por virgula
                    erro: resposta.erros.join(',')
                });
            }

            //caso o cadastro seja completado com sucesso, retorna mensagem
            req.logger.info('Usuário cadastrado com sucesso!');
            res.json({
                msg: 'Usuário criado com sucesso no banco de dados!'
            });            
            
        } catch (e) {
            req.logger.error('Erro ao cadastrar usuário, error= ' + e.message);
            res.logger.status(500).json({
                erro: 'Falha ao cadastrar usuário, tente novamente!',
                status: 500
            });
        }
    }

    async deletar (req, res) {
        try {
            const service = new UsuarioService();
            const resposta = await service.deletar(req.params.id);

            //verificando se retornou erros
            if (resposta.erros) {
                return res.status(400).json({
                    status: 400,
                    erro: resposta.erros
                });
            }

            //caso contrário, retorna mensagem de sucesso
            res.json({
                msg: 'Usuário deletado com sucesso!'
            });

        } catch (e) {
            req.logger.error('Erro ao processar requisição de deleção de usuário!, erro= ' + e.message);
            res.status(500).json({
                status: 500,
                erro: 'Erro ao deletar cadastro, tente novamente mais tarde!'
            });
        }
    }
}

module.exports = UsuarioController;