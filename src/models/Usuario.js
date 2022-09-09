const mongoose = require('mongoose');
//importando ferramenta Schema
const Schema = mongoose.Schema;


const md5 = require('md5');

// mensagem de erro para campos required
const erroRequired = '*Campo Obrigatório!';

const UsuarioSchema = new Schema ({
    nome: {
        type: String,
        required: [true, erroRequired]
    },
    email: {
        type: String,
        required: [true, erroRequired]
    },
    cep: {
        type: Number,
        required: [true, erroRequired]
    },
    rua: {
        type: String,
        required: [true, erroRequired]
    },
    numero: {
        type: Number,
        required: [true, erroRequired]
    },
    bairro: {
        type: String,
        required: [true, erroRequired]
    },
    cidade: {
        type: String,
        required: [true, erroRequired]
    },
    estado: {
        type: String,
        required: [true, erroRequired]
    },
    senhaConfirmada: {
        type: String,
        required: [true, erroRequired]
    }

});

//criptografando a senha do usuário com o md5 e sobrescrevendo no atributo senha
UsuarioSchema.pre('save', function (next) {
    this.senha = md5(this.senha);
    next();
});

//importando o Schema para um model do mongoose
const Usuario = mongoose.model('usuarios');
// sera criada uma collection com o nome usuarios no MOngoDB

module.exports = Usuario;


