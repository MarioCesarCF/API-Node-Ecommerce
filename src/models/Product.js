/*

Arquivo que cria o schema dos produtos, ou seja as informações que serão enviadas à collection no DB.
importa o mongoose (lib que faz a modelagem do dados, faz validação (não usei) e a conexão (usei em outro arquivo))
cria constante que recebe o mongoose.Schema.
cria um objeto que é instancia do schema e que contem as propriedades com tipos e mais de cada produto
no fim exporta o mongoose.model(documento dentro da collection , e variável que recebeu instancia do schema)

*/

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const product = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: [
    // altura: {type: Number, required: false},
    // largura: {type: Number, required: false},
    // cor: {type: String, required: false},
    // nota: {type: Number},
  ]
})

module.exports = mongoose.model('product', product);

// const ProductSchema = new mongoose.Schema({
//   _id: {
//     type: Number,
//     required: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   img: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   }
// })
