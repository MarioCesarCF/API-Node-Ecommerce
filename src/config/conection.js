const mongoose = require('mongoose');
require('dotenv').config();

/*
  Arquivo que faz a conexão com o MongoDB Atlas.
  importa o mongoose e o dotenv para poder usar variáveis de ambiente

  url de conexão `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`
*/
const conection = async () => {
  const username = process.env.NODE_USERNAME;
  const password = process.env.NODE_PASSWORD;
  const host = process.env.NODE_HOST;
  const database = process.env.NODE_DB;
  const URL = process.env.DATABASE_URL;
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