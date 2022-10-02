const UsuarioRepository = require('../UsuarioRepository');
//importando model do usuario
const Usuario = require('../../../models/Usuario');

//utilitário - faz a filtragem dos dados do BD e transforma esses dados no formato esperado pela aplicação
const dadosFormatados = (usuarioBD) => {
    return {
        id: usuarioBD._doc._id.toString(),
        nome: usuarioBD._doc.nome,
        email: usuarioBD._doc.email,
        cep: usuarioBD._doc.cep,
        rua: usuarioBD._doc.rua,
        numero: usuarioBD._doc.numero,
        bairro: usuarioBD._doc.bairro,
        cidade: usuarioBD._doc.cidade,
        estado: usuarioBD._doc.estado,
        senhaConfirmada: usuarioBD._doc.senhaConfirmada
    }
}

class UsuarioRepBD {
    static cadastrar(dadosUsuario) {
        //método create do mongoose vai tentar realizar o cadastro do usuario de acordo ao modelo
        return Usuario.create(dadosUsuario);
    }

    //define o método filtrar com um parâmetro default sendo um objeto vazio
    static async filtrar(filtro = {}) {
        let usuarios = await Usuario.find(filtro);

        //verifica se recebeu lista de usuarios
        if (usuarios) {
           //caso tenha usuarios cadastrados retorna os dados formatados em um objeto
            usuarios = usuarios.map(u => dadosFormatados(u));
        }
        return usuarios;
    }

    static async filtrarPorId(idUsuario) {
        //busca no BD usuario com id igual ao passado por parâmetro
        const usuario = await Usuario.findById(idUsuario);
        //caso usuario seja encontrado retorna um objeto com os seus dados formatados
        if (usuario) {
            return dadosFormatados(usuario)
        }
        //se usuário não for encontrado retorna null
        return null;
    }

    static deletar(idUsuario) {
        //encontra o usuario com o id passado por parâmetro no BD e realiza a deleção
        return Usuario.findByIdAndDelete(idUsuario);
    }
}

//chama a arrow function do UsuarioRepository, passando a classe como parametro
module.exports = UsuarioRepository(UsuarioRepBD)