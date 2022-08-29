const ProductService = require('../services/productService');

exports.get = async (req, res, next) => {
    const payload = await new ProductService().getAllProducts();
    res.status(200).send(payload);
};