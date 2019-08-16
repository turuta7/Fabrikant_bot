'use strict';
module.exports = (sequelize, DataTypes) => {
  const idTelegram = sequelize.define('idTelegram', {
    class_name: DataTypes.INTEGER
  }, {});
  idTelegram.associate = function(models) {
    // associations can be defined here
  };
  return idTelegram;
};