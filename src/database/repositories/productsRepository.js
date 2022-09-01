/*




Este arquivo não está sendo usado nesta API, nele era criada a classe da entidade, no caso Produto, que recebia um construtor com todas as características de cada produto e os metodos do CRUD, mas foi abandonado deixando a criação da estrutura dos produtos com o models e dos métodos com o service.




*/
const db = require('../../config/conection');
const Product = require('../../model/productSchema');

class ProductsRepository {

  // constructor() {    
  //     this.products = [{
  //       id: 23,
  //       name: "Monitor 22 \"",
  //       image: "link-img",
  //       price: 100,
  //       description: "Monitor com ótima performace, econômico e com proteção UV.",
  //       information: "Tamanho: 50x35x4cm; cor: Preta; conexão: VGA/HDMI",
  //       datasheet: "60 gHetz",
  //       avaliations: "Ótimo produto",
  //       doubts: "A tela é curva?"
  //   }];    
  // }  

  async showAll() {
    const conn = await db.conection();
    
    const users = await conn.users.find(query, retorno);
    
    return users;
  }

  async showOneProduct(id) {
    const conn = await db.conection();
    const query = { name: "Monitor 22" }
    const retorno = { _id: 1,
            name: 1,
            image: 1,
            price: 1,
            description: 1,
            information: 1,
            datasheet: 1,
            avaliations: 1,
            doubts: 1 }
    const users = await conn.users.findOne(query, retorno);
    
    return users;
  }

  async addOneProduct(product) {
    return await Product.create(product);
    // const product = {
    //   id: id,
    //   name: name,
    //   image: image,
    //   price: price,
    //   description: description,
    //   information: information,
    //   datasheet: datasheet,
    //   avaliations: avaliations,
    //   doubts: doubts
    // };
    // this.products.push(product);
    // return this.products
  }
}

module.exports = ProductsRepository;