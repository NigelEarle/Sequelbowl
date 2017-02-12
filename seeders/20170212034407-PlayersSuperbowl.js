'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  
    return queryInterface.bulkInsert('PlayersSuperbowl', [
      {
        name: 'John Doe',
        isBetaMember: false
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('PlayersSuperbowl', null, {});
  }
};
