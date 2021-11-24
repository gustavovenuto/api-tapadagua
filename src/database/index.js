const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const users = require('../api/models');

try {
    conexao.authenticate();
    console.log('Conexção estabelecida !!');
} catch(error) {
    console.log('Conexão não estabelecida !!', error);
}

users.init(conexao);

module.exports = conexao;