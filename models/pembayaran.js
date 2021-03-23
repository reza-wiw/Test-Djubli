'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pembayaran = sequelize.define('Pembayaran', {
    finance: DataTypes.STRING,
    jenis_pembayaran: DataTypes.STRING,
    harga: DataTypes.STRING,
    angsuran: DataTypes.STRING,
    lama_bulan: DataTypes.INTEGER
  }, {});
  Pembayaran.associate = function(models) {
    // associations can be defined here
    Pembayaran.hasMany(models.Iklan, {
      foreignKey: 'id_pembayaran',
      as: 'Iklan'
    });
    
  };
  return Pembayaran;
};