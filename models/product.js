'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category, {
        foreignKey:'categoryId',
        as: 'category',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};