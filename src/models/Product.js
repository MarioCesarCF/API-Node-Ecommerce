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
  description: {
    altura: {type: Number, required: false},
    largura: {type: Number, required: false},
    cor: {type: String, required: false},
  }
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
