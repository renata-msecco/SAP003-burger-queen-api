'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    type: DataTypes.STRING,
  }, {});
  Products.associate = function (models) {
   // Products.hasMany(models.Order);
  };
  return Products;
};