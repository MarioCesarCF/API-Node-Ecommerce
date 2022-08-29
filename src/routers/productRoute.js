const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

router.get('/', productController.get);
router.get('/:id', productController.getOne);
router.post('/', productController.postOne);

module.exports = router;