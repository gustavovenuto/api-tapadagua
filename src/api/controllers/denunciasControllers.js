const Denuncias = require('../models/denunciasModels.js');

module.exports = {
    async index(req, res){
        const denuncias = await Denuncias.findAll();
        console.log('Retorno denuncias: ' + denuncias);
        return res.json(denuncias);
    },

    async store(req, res){
        const { rua, numero, bairro, cidade, cep, pontoReferencia } = req.body;
        const denuncia = await Denuncias.create({rua, numero, bairro, cidade, cep, pontoReferencia});
        return res.status(200).send({
            status: 1,
            message: "Denuncias cadastrado com sucesso !!!",
            denuncia
        })
    },

    async update(req, res){
        const { rua, numero, bairro, cidade, cep, pontoReferencia } = req.body;
        const { codigo } = req.params;

        await Denuncias.update({
            rua, numero, bairro, cidade, cep, pontoReferencia
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Denuncias atualizado com sucesso !!!",
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Denuncias.destroy({ where: { id: codigo }});
        return res.status(200).send({
            status: 1,
            message: "Denuncias excluido com sucesso !!!"
        })
    }
}