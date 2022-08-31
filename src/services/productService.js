const Product = require('../model/productSchema');
const conection = require('../config/conection');

conection();

exports.createProduct = async (product) => {  
  return await Product.create(product);
};

exports.getAll = async () => {  
  return await Product.find();
};

exports.getById = async (id) => {  
  return await Product.findById(id);
};

exports.putById = async (id, newData) => {  
  return await Product.findByIdAndUpdate(id, newData);
};

exports.deleteById = async (id) => {  
  return await Product.findByIdAndDelete(id);
};

// const ProductRepository = require('../database/repositories/productsRepository');


// class ProductService {
//   constructor() {    
//     this.repository = new ProductRepository(); 
//     console.log(this.repository)  
//   }

//   async getAllProducts() {
//     return this.repository.showAll();
//   }

//   async getProduct(id) {
//     return this.repository.showOneProduct(id);
//   }

//   async addNewProduct(id, name, image, price, description, information, datasheet, avaliations, doubts) {
//     return this.repository.addOneProduct(id, name, image, price, description, information, datasheet, avaliations, doubts);
//   }

  

// };

// module.exports = ProductService;

