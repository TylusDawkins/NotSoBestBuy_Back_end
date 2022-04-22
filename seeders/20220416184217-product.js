'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const products = [
      {
        name: 'Alienware - AW2521HFL 25" IPS LED FHD FreeSync and G-SYNC Compatible Gaming Monitor (DisplayPort, HDMI, USB)',
        price: 399.99,
        image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406940cv15d.jpg',
        description: 'Enjoy a smooth gaming experience with this Dell Alienware gaming monitor. The 24.5-inch Full HD display delivers high-resolution images, while the 240Hz refresh rate and 1ms response time (GtG) ensures real-time display for eliminating image shatters and tearing. This Dell Alienware gaming monitor features DisplayPort, HDMI and USB ports for flexible connectivity, and the ergonomic design allows for tilting, swiveling and pivoting for more vibrant gaming. For an immersive gaming experience, the AW2521HFL is equipped with AlienFX lighting that is fully customizable using Alienware Command Center (separate download required*).',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          name: 'Airpods Pro',
          price: 219.99,
          image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4900/4900942cv12d.jpg',
          description: 'AirPods Pro feature Active Noise Cancellation for immersive sound. Transparency mode for hearing the world around you. They’re sweat and water resistant1 and have a customizable fit for all-day comfort.',
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {

        name: 'Lenovo Yoga Laptop',
        price: 849.99,
        image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426705_sd.jpg;maxHeight=150;maxWidth=150',
        description: 'The Lenovo™ Yoga™ 7i 15" combines versatile portability and enhanced productivity, thanks to the boundary-breaking performance and responsiveness of 11th generation Intel® Core™ i5 processors and vibrant FHD clarity with Intel® Iris® Xe graphics. Go anywhere with a sleek 2-in-1 metal chassis featuring thoughtful details including a webcam privacy shutter.',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name: 'Bose - 700',
      price: 379.00,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6332/6332173ld.jpg',
      description: 'Bose Noise Cancelling Headphones 700 deliver everything you expect from Bluetooth headphones – and some things you never imagined possible. It’s no surprise PC Magazine called them “The best active noise cancellation you can buy.” Eleven levels of noise cancellation feature a range of options to choose from. You can totally eliminate distractions or minimize noise cancelling to hear everything around you. Or choose from nine other levels in between.',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      name: 'MacBook Pro Laptop',
      price: 1099.99,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6418/6418601_sd.jpg',
      description: 'The Apple M1 chip redefines the 13-inch MacBook Pro. Featuring an 8-core CPU that flies through complex workflows in photography, coding, video editing, and more. Incredible 8-core GPU that crushes graphics-intensive tasks and enables super-smooth gaming. An advanced 16-core Neural Engine for more machine learning power in your favorite apps.',
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      name: 'Samsung Curved Gaming Monitor',
      price: 1199.99,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425569cv30d.jpg',
      description: 'At 49", and arced to match the curvature of the human eye, the G9 marries unmatched immersion, with unbelievable performance, pixel perfect image quality and incredible visual design.',
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      name: 'Beats by Dre',
      price: 219.99,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6383/6383126cv11d.jpg',
      description: 'With up to 40 hours of battery life, Beats Solo³ Wireless is your perfect everyday headphone. With Fast Fuel, a 5-minute charge gives you 3 hours of playback. Enjoy award-winning Beats sound with Class 1 Bluetooth® wireless listening freedom. The on-ear, cushioned ear cups are adjustable so you can customize your fit for all-day comfort.',
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      name: 'Omen Laptop',
      price: 849.99,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479079_rd.jpg',
      description: 'Yes, it’s that powerful: Play with performance with a powerful AMD processor and mighty graphics. All that power stays cool with our frosty OMEN Tempest Cooling. We can’t stop others from feeling a little envy. Gaming shouldn’t feel this good: Feast your eyes on this 16.1 diagonal inch machine, boasting a high resolution and fast refresh rate. The floating hinge design and Audio by Bang & Olufsen show it off while you go off. And the long battery life lets you play even longer.',
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      name: 'Lenovo Built-in Speaker Monitor',
      price: 1199.99,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453641_rd.jpg',
      description: 'Add a touch of class and confidence to your living space with the elegantly designed, ultra-slim Lenovo Q24i-1L monitor. Be it in the living room or the study, this sleek display with Full-HD resolution and NearEdgeless bezels bring beauty and functionality together in a perfect 23.8-inch package.',
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
  }
        
      ]
     return queryInterface.bulkInsert('products', products)

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('products', null, {});
  }
};
