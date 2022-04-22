'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Twert extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Twert.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Twert.belongsTo(models.Product, {
        foreignKey: 'product_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Twert.init({
      rating: {
     type: DataTypes.INTEGER,
     allowNull: false,
      },
     review: {
     type: DataTypes.TEXT,
     allowNull: false,
     defaultValue: 0,
     validate: {
       min: 0
     }
  }, 
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
  },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'products',
        key: 'id'
      }
    }
    },
    {
    sequelize,
    modelName: 'Twert',
    tableName: 'twerts'
  });
  return Twert;
};