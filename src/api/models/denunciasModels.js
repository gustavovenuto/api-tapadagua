const { Model, DataTypes } = require('sequelize');

class Denuncias extends Model {
    static init(sequelize) {
        super.init({
            nroProtocolo: DataTypes.STRING,
            statusDen: DataTypes.INTEGER,
            dtDenuncia: DataTypes.STRING,
            observacao: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'denuncias'
        }
        );
        return this;
    }
}

module.exports = Denuncias;