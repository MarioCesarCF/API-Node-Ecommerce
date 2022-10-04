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
const jwt = require('./middlewares/jwt');
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
const conection = require('./config/conection');

conection();


//importando controllers
const LoginController = require('./controllers/LoginController');
const UsuarioController = require('./controllers/UsuarioController');
//importando logger
const logger = require('./middlewares/logger');

//método que configura o express
const configurarExpress = () => {
    app.use(logger);
    
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    
    app.use(jwt);

    app.use('/', index);
    app.use('/product', productRoute);
}

//método que vai carregar os controllers da aplicação
const carregarControllers = () => {
    new LoginController(app);
    new UsuarioController(app);
}

// método conectarServidor - configurações do servidor que estavam no arquivo server.js
const conectarServidor = () => {
    const porta = normalizaPort(process.env.PORT || 3030);

    function normalizaPort(valPort) {
        const port = parseInt(valPort, 10);
        if (isNaN(port)) {
            return valPort;
        }
    
        if (port >= 0) {
            return valPort;
        }
    
        return false;
    }
    
    app.listen(porta, () => {
        console.log(`App executando na porta ${porta}.`)
    })
}

// método iniciar chama os outros métodos
const iniciar = () => {
    configurarExpress();
    carregarControllers(); 
    conectarServidor();  
   
}

iniciar();

module.exports = app;