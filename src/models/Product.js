/*

Arquivo que cria o schema dos produtos, ou seja as informações que serão enviadas à collection no DB.
importa o mongoose (lib que faz a modelagem do dados, faz validação (não usei) e a conexão (usei em outro arquivo))
cria constante que recebe o mongoose.Schema.
cria um objeto que é instancia do schema e que contem as propriedades com tipos e mais de cada produto
no fim exporta o mongoose.model(documento dentro da collection , e variável que recebeu instancia do schema)

*/

// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;

// const product = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   img: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   category: {
//     type: String,
//     required: true
//   },
//   description: {
//     // pode-se colocar qualquer combinação de field: value
//   }    
// })

// module.exports = mongoose.model('product', product);

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const product = new Schema({
  categoria: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  caracteristicas: {},
  extra: [],
  preco: {
    type: String,
    required: true
  },
  nota: [],
  avaliacao: {},
  dimensao: {},
  quantidade: {
    type: Number,
    required: true
  },
  pergunta: {},
  resposta: {}
})

module.exports = mongoose.model('product', product);


/*
categoria
"Teclado"
nome
"Multilazyer Slim com fio USB"
foto
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA…"

caracteristicas
Object
Marca
"Multylasyer"
Modelo
"ABNT2"
Cor
"Preto"
Série
"TC213"
Material
"Plástico"
Conteúdo
"1 teclado"

extra
Array
0
"Null"
1
"Conexão USB"
2
"Teclas macias"
3
"Perfil Slim"
4
"Compatível com Mac, Windows e Linux"
5
"Plug & Play"
preco
"27,90"

nota
Array
0
"5"
1
"4"

avaliacao
Object
62f6327b0291888b1979d91d
"Excelente custo benefício"

dimensao
Object
Altura
"2,5"
Largura
"13"
Comprimento
"43,5"
Peso
"0,36"
quantidade
"217"

pergunta
Object
63298c0de0427ed6f58bcf00
"Tem na cor laranja?"

resposta
Object
63298c0de0427ed6f58bcf00
"Não possui variação de cores"

*/


// const ProductSchema = new mongoose.Schema({
//   _id: {
//     type: Number,
//     required: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   img: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   }
// })
