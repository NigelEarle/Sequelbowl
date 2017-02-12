'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Teams', [
      {
        name: 'New England Patriots',
        conference: 'AFC',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Atlanta Falcons',
        conference: 'NFC',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Denver Broncos',
        conference: 'AFC',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Carolina Panthers',
        conference: 'NFC',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Seattle Seahawks',
        conference: 'NFC',
        createdAt: new Date,
        upatedAt: new Date,
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Teams', null, {});
    
  }
};
