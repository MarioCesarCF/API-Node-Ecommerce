const mongoose = require('mongoose');
//importando ferramenta Schema
const Schema = mongoose.Schema;
const md5 = require('md5');

// mensagem de erro para campos required
const erroRequired = '*Campo Obrigatório!';

const UsuarioSchema = new Schema ({
  
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    senhaConfirmada: {
        type: String,
        required: true
    }

});

//criptografando a senha do usuário com o md5 e sobrescrevendo no atributo senha
UsuarioSchema.pre('save', function (next) {
    this.senhaConfirmada = md5(this.senhaConfirmada);
    next();
});

//importando o Schema para um model do mongoose
const Usuario = mongoose.model('users', UsuarioSchema);
// sera criada uma collection com o nome usuarios no MOngoDB

module.exports = Usuario;


