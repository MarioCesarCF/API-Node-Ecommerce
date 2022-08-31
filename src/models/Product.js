const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
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

module.exports = Product;

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
