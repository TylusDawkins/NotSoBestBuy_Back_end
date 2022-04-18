'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const products = [
      {
        name: 'Alienware - AW2521HFL 25" IPS LED FHD FreeSync and G-SYNC Compatible Gaming Monitor (DisplayPort, HDMI, USB)',
        price: 399.99,
        image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406940cv15d.jpg',
        description: 'Enjoy a smooth gaming experience with this Dell Alienware gaming monitor. The 24.5-inch Full HD display delivers high-resolution images, while the 240Hz refresh rate and 1ms response time (GtG) ensures real-time display for eliminating image shatters and tearing. This Dell Alienware gaming monitor features DisplayPort, HDMI and USB ports for flexible connectivity, and the ergonomic design allows for tilting, swiveling and pivoting for more vibrant gaming. For an immersive gaming experience, the AW2521HFL is equipped with AlienFX lighting that is fully customizable using Alienware Command Center (separate download required*).',
        categoryId: catagory.id,
        createdAt: new Date(),
        updatedAt: new Date()
        }]
     return queryInterface.bulkInsert('products', products)

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('products', null, {});
  }
};
