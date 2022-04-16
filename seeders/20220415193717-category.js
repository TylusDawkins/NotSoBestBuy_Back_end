'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const categories = [
      {name:"Headphones",
      createdAt: new Date(),
      updatedAt: new Date()},
      {name:"Laptops",
      createdAt: new Date(),
      updatedAt: new Date()},
      {name:"Monitors",
      createdAt: new Date(),
      updatedAt: new Date()}]
     return queryInterface.bulkInsert('categories', categories)

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('categories', null, {});
  }
};
