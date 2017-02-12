'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Players', [
      { // falcons
        name: 'Julio Jones',
        player_title: 'Wide Receiver',
        description: 'Best reciever in football',
        position_title: 'offense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 2,
        stat_id: 1,
      },
      {
        name: 'Matt Ryan',
        player_title: 'Quarter Back',
        description: 'league MVP',
        position_title: 'offense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 2,
        stat_id: 2,
      },
      {
        name: 'Vic Beasley',
        player_title: 'Line Backer',
        description: 'Most sacks in league this season',
        position_title: 'defense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 2,
        stat_id: 3,
      },
      {
        name: 'Robert Alford',
        player_title: 'Safety',
        description: 'Pick 6 on Tom Brady in Super Bowl 51',
        position_title: 'defense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 2,
        stat_id: 4,
      },
      { // Patriots
        name: 'Tom Brady',
        player_title: 'Quarter Back',
        description: 'GOAT',
        position_title: 'offense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 1,
        stat_id: 3,
      },
      {
        name: 'Julian Edelman',
        player_title: 'Wide Reciever',
        description: 'Amazing catch in SB 51',
        position_title: 'offense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 1,
        stat_id: 2,
      },
      {
        name: 'Logan Ryan',
        player_title: 'Corner Back',
        description: 'He\'s ok',
        position_title: 'defense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 1,
        stat_id: 1,
      },
      {
        name: 'Malcom Butler',
        player_title: 'Corner Back',
        description: 'Game sealing pick on Seahawks',
        position_title: 'defense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 1,
        stat_id: 2,
      },
      { // Broncos
        name: 'Peyton Manning',
        player_title: 'Quarter Back',
        description: 'Legens',
        position_title: 'offense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 3,
        stat_id: 2,
      },
      {
        name: 'Emmanuel Sanders',
        player_title: 'Wide Reciever',
        description: 'Game sealing pick on Seahawks',
        position_title: 'offense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 3,
        stat_id: 2,
      },
      {
        name: 'Von Miller',
        player_title: 'Line Backer',
        description: 'Super Bowl 50 MVP',
        position_title: 'defense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 3,
        stat_id: 2,
      },
      {
        name: 'Demarcus Ware',
        player_title: 'Corner Back',
        description: 'Game sealing pick on Seahawks',
        position_title: 'defense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 3,
        stat_id: 2,
      },
      { // Panthers
        name: 'Cam Newton',
        player_title: 'Quarter Back',
        description: 'League MVP',
        position_title: 'offense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 4,
        stat_id: 2,
      },
      {
        name: 'Greg Olsen',
        player_title: 'Tight End',
        description: 'Great tight end',
        position_title: 'offense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 4,
        stat_id: 2,
      },
      {
        name: 'Josh Norman',
        player_title: 'Corner Back',
        description: 'Lock down corner back',
        position_title: 'defense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 4,
        stat_id: 2,
      },
      {
        name: 'Luke Kuechly',
        player_title: 'Line Backer',
        description: 'One of the best',
        position_title: 'defense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 4,
        stat_id: 2,
      },
      { // Seahawks
        name: 'Russell Wilson',
        player_title: 'Quarter Back',
        description: 'Went to super bowl as a rookie',
        position_title: 'offense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 5,
        stat_id: 2,
      },
      {
        name: 'Doug Baldwin',
        player_title: 'Reciever',
        description: 'Great reciever',
        position_title: 'offense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 5,
        stat_id: 2,
      },
      {
        name: 'Richard Sherman',
        player_title: 'Cornerback',
        description: 'Lockdown corner back',
        position_title: 'defense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 5,
        stat_id: 2,
      },
      {
        name: 'Kam Chancellor',
        player_title: 'Line Backer',
        description: 'Bam bam',
        position_title: 'defense',
        createdAt: new Date,
        updatedAt: new Date,
        team_id: 5,
        stat_id: 2,
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Players', null, {});
  }
};
