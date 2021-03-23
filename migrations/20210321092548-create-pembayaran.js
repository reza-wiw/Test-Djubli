'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pembayarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      finance: {
        type: Sequelize.STRING
      },
      jenis_pembayaran: {
        type: Sequelize.STRING
      },
      harga: {
        type: Sequelize.STRING
      },
      angsuran: {
        type: Sequelize.STRING
      },
      lama_bulan: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Pembayarans');
  }
};