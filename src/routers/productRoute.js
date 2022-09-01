/*

Arquivo que cria todas as rotas do CRUD

importa o express, Router do express e os métodos do controller
cria cada uma das rotas passando os parâmetros(fim da rota e params, se tiver, metodo do controler)
exporta o router

*/

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');


router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;