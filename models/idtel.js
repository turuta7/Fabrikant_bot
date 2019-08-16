'use strict';
module.exports = (sequelize, DataTypes) => {
  const idTel = sequelize.define('idTel', {
    idTel: DataTypes.INTEGER
  }, {});
  idTel.associate = function(models) {
    // associations can be defined here
  };
  return idTel;
};