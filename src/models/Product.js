const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
  _id: {
    type: Number,
    required: true
  },
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
  }
})
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

module.exports = Product;