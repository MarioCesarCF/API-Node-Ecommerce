const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');


router.get('/', productController.getAll);
router.get('/:name', productController.getOne);
router.post('/', productController.create);

module.exports = router;