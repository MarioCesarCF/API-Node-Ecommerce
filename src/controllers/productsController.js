const ProductService = require('../services/productService');

exports.get = async (req, res, next) => {
  const payload = await new ProductService().getAllProducts();
  res.status(200).send(payload);
};

exports.getOne = async (req, res, next) => {
  const payload = await new ProductService().getProduct(req.params.id);
  res.status(200).json(payload);
}

exports.postOne = async (req, res, next) => {
  const { id, name, image, price, description, information, datasheet, avaliations, doubts } = req.body;
  const result = await new ProductService().addNewProduct(id, name, image, price, description, information, datasheet, avaliations, doubts);
  res.send(result);
}