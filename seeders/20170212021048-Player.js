'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // return queryInterface.bulkInsert('Players', [
    //   {
    //     name: 'Julio Jones',
    //     player_title: 'Wide Receiver',
    //     description: 'Best reciever in football',
    //     position_title: 'offense',
    //     createdAt: new Date,
    //     updatedAt: new Date,
    //     team_id: 2,
    //     stat_id: 1,
    //   },
    //   {
    //     name: 'Matt Ryan',
    //     player_title: 'Quarter Back',
    //     description: 'league MVP',
    //     position_title: 'offense',
    //     createdAt: new Date,
    //     updatedAt: new Date,
    //     team_id: 2,
    //     stat_id: 2,
    //   },
    //   {
    //     name: 'Vic Beasley',
    //     player_title: 'Line Backer',
    //     description: 'Most sacks in league this season',
    //     position_title: 'defense',
    //     createdAt: new Date,
    //     updatedAt: new Date,
    //     team_id: 2,
    //     stat_id: 3,
    //   },
    //   {
    //     name: 'Robert Alford',
    //     player_title: 'Safety',
    //     description: 'Pick 6 on Tom Brady in Super Bowl 51',
    //     position_title: 'defense',
    //     createdAt: new Date,
    //     updatedAt: new Date,
    //     team_id: 2,
    //     stat_id: 4,
    //   },
    //   {
    //     name: 'Tom Brady',
    //     player_title: 'Quarter Back',
    //     description: 'GOAT',
    //     position_title: 'offense',
    //     createdAt: new Date,
    //     updatedAt: new Date,
    //     team_id: 1,
    //     stat_id: 3,
    //   },
    //   {
    //     name: 'Julian Edelman',
    //     player_title: 'Wide Reciever',
    //     description: 'Amazing catch in SB 51',
    //     position_title: 'offense',
    //     createdAt: new Date,
    //     updatedAt: new Date,
    //     team_id: 1,
    //     stat_id: 2,
    //   },
    //   {
    //     name: 'Logan Ryan',
    //     player_title: 'Corner Back',
    //     description: 'He\'s ok',
    //     position_title: 'defense',
    //     createdAt: new Date,
    //     updatedAt: new Date,
    //     team_id: 1,
    //     stat_id: 1,
    //   },
    //   {
    //     name: 'Malcom Butler',
    //     player_title: 'Corner Back',
    //     description: 'Game sealing pick on Seahawks',
    //     position_title: 'defense',
    //     createdAt: new Date,
    //     updatedAt: new Date,
    //     team_id: 1,
    //     stat_id: 2,
    //   }
    // ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Players', null, {});
  }
};
