class ProductsRepository {
  async showAll() {
    const products = [
      {
        name: 'Monitor 27 "',
        image: 'link-img',
        price: 900.00,
        description: 'Monitor com ótima performace, econômico e com proteção UV.',
        information: 'Tamanho: 50x35x4cm; cor: Preta; conexão: VGA/HDMI',
        datasheet: '60 gHetz',
        avaliations: 'Ótimo produto',
        doubts: 'A tela é curva?'
      },
      {
        name: 'Monitor 27 "',
        image: 'link-img',
        price: 900.00,
        description: 'Monitor com ótima performace, econômico e com proteção UV.',
        information: 'Tamanho: 50x35x4cm; cor: Preta; conexão: VGA/HDMI',
        datasheet: '60 gHetz',
        avaliations: 'Ótimo produto',
        doubts: 'A tela é curva?'
      }
    ];

    return products;
  }
}

module.exports = ProductsRepository;