//importando classe mãe (HttpControllers)
const LoginService = require('../services/LoginService');
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
            
            if (!body || !body.login || !body.senhaConfirmada) {
                req.logger.info('Requisição de login inválida!')
                return res.status(401).json({
                    status: 401,
                    erro: "Parâmetros de entrada vazios ou inválidos!"
                });
            }

            const service = new LoginService();

            const retorno = await service.logar(body.login, body.senhaConfirmada);

            if (!retorno) {
                return res.status(400).json({
                    erro: 'Login ou senha inválidos!',
                    status: 400
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


