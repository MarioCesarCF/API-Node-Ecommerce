/*

Arquivo que inicializa toda a aplicação executando os middlewears necessários, inclusive os das rotas

importa dotenv (para trabalhar com variáveis de ambiente, mas acho que não precisa), express, cors (para evitar erros de segurança)
atribui o express ao app
app.use com cors e informando os headers que serão aceitos
importa rotas
app.use com express.json e urlencoded parace ser usados para ler os json nas requisições (fazer o parse dos mesmos em json)
app.use chama as rotas com os arquivos onde elas estão
exporta o app

*/

require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

const index = require('./routers/index');
const productRoute = require('./routers/productRoute');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', index);
app.use('/product', productRoute);

module.exports = app;