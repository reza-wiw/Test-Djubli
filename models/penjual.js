'use strict';
module.exports = (sequelize, DataTypes) => {
  const Penjual = sequelize.define('Penjual', {
    nama: DataTypes.STRING,
    jenis_penjual: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tanggal: DataTypes.DATE
  }, {});
  Penjual.associate = function(models) {
    // associations can be defined here
    Penjual.hasMany(models.Iklan, {
      foreignKey: 'id_penjual',
      as: 'Iklan'
    });
  };
  return Penjual;
};