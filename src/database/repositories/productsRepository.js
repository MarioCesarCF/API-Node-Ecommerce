class ProductsRepository {
  
  constructor() {    
      this.products = [{
        id: 23,
        name: "Monitor 22 \"",
        image: "link-img",
        price: 100,
        description: "Monitor com ótima performace, econômico e com proteção UV.",
        information: "Tamanho: 50x35x4cm; cor: Preta; conexão: VGA/HDMI",
        datasheet: "60 gHetz",
        avaliations: "Ótimo produto",
        doubts: "A tela é curva?"
    }];    
  }  

  async showAll() {
    return this.products;
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