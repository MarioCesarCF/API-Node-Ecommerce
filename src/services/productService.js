const ProductRepository = require('../database/repositories/productsRepository');

class ProductService {
  constructor() {    
    this.repository = new ProductRepository(); 
    console.log(this.repository)  
  }

  async getAllProducts() {
    return this.repository.showAll();
  }

  async getProduct(id) {
    return this.repository.showOneProduct(id);
  }

  async addNewProduct(id, name, image, price, description, information, datasheet, avaliations, doubts) {
    return this.repository.addOneProduct(id, name, image, price, description, information, datasheet, avaliations, doubts);
  }
};

module.exports = ProductService;