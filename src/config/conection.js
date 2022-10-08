const mongoose = require('mongoose');
require('dotenv').config();

/*
  Arquivo que faz a conexão com o MongoDB Atlas.
  importa o mongoose e o dotenv para poder usar variáveis de ambiente
  cria uma funcção async que é exportada no fim do arquivo
  o if verifica se a conexão já existe
  mongoose.connect recebe a url e objeto com configurações
  atribui o mongoose.connection para uma variável que verifica se deu certo ou não
  por fim atribui essa variável ao global.connection

  url de conexão `mongodb+srv://${username}:${password}@${host}/${database}?retryWrites=true&w=majority`
*/

const conection = async () => {  
  const URL = process.env.DATABASE_URL || 'mongodb+srv://MarioCesar:177500@restcluster.uc7clml.mongodb.net/produtos?retryWrites=true&w=majority';
  
  if(global.connection && global.connection.state !== 'disconnected') {
    return global.connection;
  }
  console.log(URL)
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