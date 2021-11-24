const { Model, DataTypes } = require('sequelize');

class Enderecos extends Model {
    static init(sequelize) {
        super.init({
            rua: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            cep: DataTypes.STRING,
            pontoReferencia: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'enderecos'
        }
        );
        return this;
    }
}

module.exports = Enderecos;