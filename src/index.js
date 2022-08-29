const express = require('express');
const app = express();

const index = require('./routers/index');
const productRoute = require('./routers/productRoute');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', index);
app.use('/product', productRoute);

module.exports = app;