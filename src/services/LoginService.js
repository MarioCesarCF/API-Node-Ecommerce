const jwt = require('jsonwebtoken');
const md5 = require('md5');
const UsuarioRepository = require('../database/repositories/impl/UsuarioRepBD');

class LoginService {
    //método para realizar o login deve ser público
    async logar(login, senhaConfirmada) {
        const filtro = {
            email: login,
            senhaConfirmada: md5(senhaConfirmada)
        }

        //iniciando usuario com valor null
        let usuario = null;

        //enviando login e senha como parametros para o método filtrar,
        //para verificar se constam no BD
        const usuarios = await UsuarioRepository.filtrar(filtro);

        //caso o login e senha estejam corretos atribui o usuario encontrado a variável
        if (usuarios && usuarios.length) {
            usuario = usuarios[0]
        }else {
            return null;
        }

        //gera o token de acesso usando o JWT e atribui a constante token
        //const token = jwt.sign({_id: usuario.id}, process.env.CHAVE_SECRETA_JWT)

        //devolve as informações do usuário autenticado com o seu token de acesso
        return {
            ...usuario,
            //token
        }
    }
}

module.exports = LoginService;