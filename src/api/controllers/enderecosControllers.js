const Enderecos = require('../models/enderecosModels.js');

module.exports = {
    async index(req, res){
        const endereco = await Enderecos.findAll();
        console.log('Retorno endereços: ' + endereco);
        return res.json(endereco);
    },

    async store(req, res){
        const { nroProtocolo, statusDen, dtDenuncia, observacao } = req.body;
        const endereco = await Enderecos.create({nroProtocolo, statusDen, dtDenuncia, observacao});
        return res.status(200).send({
            status: 1,
            message: "Endereço cadastrado com sucesso !!!",
            endereco
        })
    },

    async update(req, res){
        const { nroProtocolo, statusDen, dtDenuncia, observacao } = req.body;
        const { codigo } = req.params;

        await Enderecos.update({
            nroProtocolo, statusDen, dtDenuncia, observacao
        }, { where: { id: codigo }});
        return res.status(200).send({
            stauts: 1,
            message: "Endereço atualizado com sucesso !!!",
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Enderecos.destroy({ where: { id: codigo }});
        return res.status(200).send({
            status: 1,
            message: "Endereço excluido com sucesso !!!"
        })
    }
}