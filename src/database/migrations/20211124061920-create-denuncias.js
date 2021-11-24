'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('denuncias', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nroProtocolo: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      statusDen: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      dtDenuncia: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      observacao: {
        allowNull: false,
        type: Sequelize.STRING(80),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('denuncias');
  }
};
