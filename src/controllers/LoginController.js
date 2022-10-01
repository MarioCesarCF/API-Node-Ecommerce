//importando classe mãe (HttpControllers)
const HttpController = require('./HttpController');

class LoginController extends HttpController {
    configurarRota(Url) {
        //método post - 1° parametro: rota/ 2°parametro: quem vai manipular a rota
        this.express.post(`${Url}login`, this.login.bind(this));
    }

    async login(req, res) {

        try {
            //autenticar login
            const body = req.body;
            //verifica se o body esta vazio ou se o usuário não digitou login ou senha
            //**TODO: testar requisição conectado ao BD**
            if (!body || !body.login || !body.senha) {
                return res.status(401).json({
                    status: 401,
                    erro: "Parâmetros de entrada vazios ou inválidos!"
                });
            }

            

        } catch (e) {
            req.logger.error('Erro ao realizar login!, error= ' + e.message);
            res.status(500).json({
                erro: 'Problema ao realizar login! Tente novamente!',
                status: 500
            });
        }

    }
}

module.exports = LoginController;


