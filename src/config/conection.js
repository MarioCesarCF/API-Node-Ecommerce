const mongoose = require('mongoose');
require('dotenv').config();

function conection() {
  let username = process.env.NODE_USERNAME;
  let password = process.env.NODE_PASSWORD;
  const URL = `mongodb+srv://${username}:${password}@restcluster.uc7clml.mongodb.net/?retryWrites=true&w=majority`

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

module.exports = { conection };