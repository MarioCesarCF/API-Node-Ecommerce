const ProductRepository = require('../database/repositories/productsRepository');

class ProductService {
    constructor() {
        this.repository = new ProductRepository();
    }

    async getAllProducts() {
        return this.repository.showAll();
    }
};

module.exports = ProductService;