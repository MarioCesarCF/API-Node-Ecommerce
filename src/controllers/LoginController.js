//importando classe mãe (HttpControllers)
const HttpController = require('./HttpController');

class LoginController extends HttpController {
    configurarRota(Url) {
        //método post - 1° parametro: rota/ 2°parametro: quem vai manipular a rota
        this.express.post('/login', this.login.bind(this));
    }

    login(req, res) {
        //autenticar login
        const body = req.body;
        //verifica se o body esta vazio ou se o usuário não digitou login ou senha
        if (!body || !body.login || !body.senha) {
            return res.status(401).json({
                status: 401,
                erro: "Parâmetros de entrada vazios ou inválidos!"                
            });
        }
    }
}

module.exports = LoginController;


