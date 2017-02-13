const express = require('express');
const route = express.Router();
const db = require('../models');

const {
  Superbowl,
  Team,
  Player,
  Coach,
} = db;

route.get('/', (req, res) => res.render('index'))

route.get('/:number', (req, res) => {
  const {number} = req.params;
  Superbowl.find({
    where : {
      number: number
    },
    include: [
      {
        model: Team,
        through: {
          attributes: ['score']
        }
      }
    ]
  })
  .then(result => {
    const {dataValues} = result;
    res.render('sb', {
      data: dataValues,
    })
  })
  .catch(err => {
    res.send(err)
  });
});

route.get('/:superbowl_id/:team_id', (req, res) => {
  const {
    superbowl_id,
    team_id,
  } = req.params;

  Superbowl.findAll({
    where: {
      id: superbowl_id,
    },
    include: [
      {
        model: Team,
        through: {
          attributes: ['score']
        },
        where: {
          id: team_id,
        },
      },
      {
        model: Player,
        through: {
          attributes: []
        },
        where: {
          team_id: team_id,
        }
      },
      {
        model: Coach,
        through: {
          attributes: []
        },
        where: {
          team_id: team_id
        }
      },
    ],
  })
  .then(data => {
    const result = JSON.parse(JSON.stringify(data))[0]
    res.render('team', {
      game: result,
      team: result.Teams[0],
      players: result.Players,
      coaches: result.Coaches,
    })
  })
});

module.exports = route;