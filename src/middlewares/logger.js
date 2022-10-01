//Padrão de resposta de erro, info e debug
module.exports = (req, res, next) => {
    //numero aleatório gerado pelo método random para servir de id das requisições
    const traceId = Math.random() * 999999;
    
    const logger = {
        //exibe mensagem e erro da requisição no console
        error: (mensagem, ...parametrosExtras) => {
            console.error(`[ERROR] traceId= ${traceId}, msg= ${mensagem}`, ...parametrosExtras);
        },
        //mensagens de depuração
        debug: (mensagem, ...parametrosExtras) => {
            console.log(`[DEBUG] traceId= ${traceId}, msg= ${mensagem}`, ...parametrosExtras);
        },
        //mensagens informativas
        info: (mensagem, ...parametrosExtras) => {
            console.info(`[INFO] traceId= ${traceId}, msg= ${mensagem}`, ...parametrosExtras);            
        }
        // o ...paramentrosExtras está sendo usado como um coringa para receber parametros extras
    }
    //informa a URL e o método toda vez que recebe uma requisição
    logger.info(`requisição recebida!,
    Url: ${req.url},
    Método HTTP: ${req.method}`);

    //criando uma propriedade logger no objeto da requisição
    //atribuindo o objeto logger a ela
    req.logger = logger;
    //chamando o método next
    next();
}