console.log('chegou na controller')
const Correios = require("node-correios");
const correio = new Correios();

module.exports = {
    index(req, res){
        console.log('Rota de CEP Encontrada!!');
        const cep = req.query;
        console.log('>> ' + cep);

        correio.consultaCEP({cep: cep})
        .then( result => {
            console.log(result);
            return res.json(result);
        })
        .catch(error => {
            console.log("Ocorreu um Erro" + error)
        })
    },
}