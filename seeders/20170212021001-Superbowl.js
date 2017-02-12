'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  
    return queryInterface.bulkInsert('Superbowls', [
      {
        number: 48,
        location: 'East Rutherford, NJ',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        number: 49,
        location: 'Glendale, AZ',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        number: 50,
        location: 'Santa Clara,CA',
        createdAt: new Date,
        updatedAt: new Date,
      },
      {
        number: 51,
        location: 'Houston, TX',
        createdAt: new Date,
        updatedAt: new Date,
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Superbowls', null, {});
  }
};
