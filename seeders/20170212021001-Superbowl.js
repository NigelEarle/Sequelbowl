'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  
    return queryInterface.bulkInsert('Superbowls', [
      {
        number: 48,
        location: 'East Rutherford, NJ',
        createdAt: new Date,
        updatedAt: new Date,
        date: 'February 2, 2014',
      },
      {
        number: 49,
        location: 'Glendale, AZ',
        createdAt: new Date,
        updatedAt: new Date,
        date: 'February 1, 2015',

      },
      {
        number: 50,
        location: 'Santa Clara,CA',
        createdAt: new Date,
        updatedAt: new Date,
        date: 'February 7, 2016',
      },
      {
        number: 51,
        location: 'Houston, TX',
        createdAt: new Date,
        updatedAt: new Date,
        date: 'February 5, 2015',
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Superbowls', null, {});
  }
};
