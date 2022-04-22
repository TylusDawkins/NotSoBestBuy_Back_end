'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews') 
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews');
  }
};