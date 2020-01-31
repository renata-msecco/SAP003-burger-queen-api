'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
  }, {});
  Orders.associate = function(models) {
    Orders.hasMany(models.Item)
  };
  return Orders;
};