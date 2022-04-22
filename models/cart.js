'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cart.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Cart.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false},
    price: {
      type:DataTypes.NUMERIC,
      allowNull: false},
    image: {
      type: DataTypes.STRING,
      allowNull: false},
    description: {
      type: DataTypes.TEXT,
      allowNull: false},
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        min: 1
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false}
  }, {
    sequelize,
    modelName: 'Cart',
    tableName: 'carts'
  });
  return Cart
};