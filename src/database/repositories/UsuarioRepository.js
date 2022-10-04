// faz a  simulação da definição da interface do repositório de usuários
// força os repositories a ter os métodos definidos previamente para a classe

module.exports = (Implementacao) => {
    if (!Implementacao.cadastrar) {
        throw new Error(`A classe ${Implementacao} não implementou o método cadastrar`)
    }
    if (!Implementacao.filtrar) {
        throw new Error(`A classe ${Implementacao} não implementou o método filtrar`)
    }
    if (!Implementacao.filtrarPorId) {
        throw new Error(`A classe ${Implementacao} não implementou o método filtrarPorId`)
    }

    return Implementacao;
}