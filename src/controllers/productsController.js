/*
Arquivo que realiza o controle dos métodos do CRUD recebe o método do serviço e retorna sucesso ou erro

importa os serviços
exporta cada um dos metodos criados
cada metodo criado é async e o retorno é await
*/

const ProductService = require('../services/productService');

exports.create = async (req, res, next) => {
  try {
    const result = await ProductService.createProduct(req.body);
    res.status(201).json({ data: result, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const products = await ProductService.getAll();
    res.status(200).json({ data: products, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await ProductService.getById(id);
    res.status(200).json({ data: result, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update = async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await ProductService.putById(id, req.body);
    res.status(200).json({ data: result, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await ProductService.deleteById(id);
    res.status(200).json({ data: result, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};