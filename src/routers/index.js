/*

Arquivo que não sei se é muito útil, aparentemente serve apenas para mandar uma msg na rota raiz.

importa express e o Router do express
usa o router.metodo para fazer algo
no fim exporta o router

*/
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send('API funcionando.');
});

module.exports = router;