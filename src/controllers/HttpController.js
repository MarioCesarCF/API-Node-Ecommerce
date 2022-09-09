//classe pode ser usada como mãe das classes controllers
class HttpController {
    constructor(instanciaExpress) {
        //validando instancia do express, se a mesma não for passada vai apresentar a mensagem de erro
        if(!instanciaExpress) {
            throw new Error ('A instancia do express é obrigatória');
        }

        //ao receber a instancia do express atribuimos a mesma para um atributo da classe mãe,
        //o mesmo poderá ser usado por todas as classes filhas
        this.express = instanciaExpress;
        //chamando o método configurar rota com atributo
        this.configurarRota('/');
        
    }

    //método deverá ser implementado nas classes filhas passando a rota como parâmetro
    configurarRota(Url) {
        //apresenta mensagem de erro caso o método não for implementado na classe filha
        throw new Error ('Método configurarRota é obrigatório!') 
    }


}

module.exports = HttpController;