const db = require('../../config/conection');

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
    const query = { name: "Monitor 22" }
    const retorno = { id: 1,
            name: 1,
            image: 1,
            price: 1,
            description: 1,
            information: 1,
            datasheet: 1,
            avaliations: 1,
            doubts: 1 }
    const users = await conn.users.find(query, retorno);
    
    return users;
  }

  async showOneProduct(id) {
    const result = this.products.find((element) => {
      return element.id === Number(id);
    })
    return result;
  }

  async addOneProduct(id, name, image, price, description, information, datasheet, avaliations, doubts) {
    const product = {
      id: id,
      name: name,
      image: image,
      price: price,
      description: description,
      information: information,
      datasheet: datasheet,
      avaliations: avaliations,
      doubts: doubts
    };
    this.products.push(product);
    return this.products
  }
}

module.exports = ProductsRepository;