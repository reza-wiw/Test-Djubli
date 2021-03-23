'use strict';
module.exports = (sequelize, DataTypes) => {
  const Iklan = sequelize.define('Iklan', {
    nama_mobil: DataTypes.STRING,
    id_pembayaran: DataTypes.INTEGER,
    id_penjual: DataTypes.INTEGER,
    kondisi: DataTypes.STRING
  }, {});
  Iklan.associate = function(models) {
    // associations can be defined here
    Iklan.belongsTo(models.Pembayaran, {
      foreignKey: 'id_pembayaran',
      as: 'Pembayaran'
    });
    Iklan.belongsTo(models.Penjual, {
      foreignKey: 'id_penjual',
      as: 'Penjual'
    });
    
  };
  return Iklan;
};