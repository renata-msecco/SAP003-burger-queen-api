'use strict';
module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item', {
        type: DataTypes.STRING,
        idproduct: DataTypes.DECIMAL,
        idadditional: DataTypes.DECIMAL,
        idorder: DataTypes.DECIMAL
    }, {});
    Item.associate = function (models) {
        Item.belongsTo(models.Product)
    };
    return Item;
};