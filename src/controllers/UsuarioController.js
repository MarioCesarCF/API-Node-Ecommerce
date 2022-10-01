const HttpController = require('/HttpController');

class UsuarioController extends HttpController {
    //implementando método da classe mãe
    configurarRota(Url) {
        //bind(this) - indica que o método cadastrar será chamado dentro do contexto da própria classe
        this.express.post(`${Url}usuario`, this.cadastrar.bind(this));
    }

    async cadastrar(req, res) {
        const dadosUsuario = req.body;

        try {
            
            
        } catch (e) {
            req.logger.error('Erro ao cadastrar usuário, error= ' + e.message);
            res.logger.status(500).json({
                erro: 'Falha ao cadastrar usuário, tente novamente!',
                status: 500
            });
        }
    }
}

module.exports = UsuarioController;