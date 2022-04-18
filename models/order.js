'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Category, {
        foreignKey:'orderId',
        as: 'order',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  order.init({
    userId: DataTypes.INTEGER,
    products: DataTypes.INTEGER,
    price: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'order',
    tableName: 'order'
  });
  return Order;
};