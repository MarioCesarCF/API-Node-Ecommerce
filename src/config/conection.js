const mongoose = require('mongoose');
require('dotenv').config();

/*
  Arquivo que faz a conexão com o MongoDB Atlas.
  importa o mongoose e o dotenv para poder usar variáveis de ambiente
*/
const conection = async () => {
  let username = process.env.NODE_USERNAME;
  let password = process.env.NODE_PASSWORD;
  let host = process.env.NODE_HOST;
  const URL = `mongodb+srv://${username}:${password}@${host}/produtos?retryWrites=true&w=majority`

  if(global.connection && global.connection.state !== 'disconnected') {
    return global.connection;
  }
  
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on('error', () => {
    console.log('Erro de conexão.');
  });

  db.on('open', () => {
    console.log('Sucesso de conexão.');
  });

  global.connection = db;
}

conection();

module.exports = conection;