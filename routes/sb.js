const express = require('express');
const route = express.Router();
const db = require('../models');

const {
  Superbowl,
  Team,
  Player,
  Coach,
} = db;

route.get('/:number', (req, res) => {
  const {number} = req.params;
  Superbowl.find({
    where : {
      number: number
    },
    include: [{
      model: Team,
      through: {
        attributes: ['score']
      }
    }]
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

  const query = {
    team_id,
    superbowl_id,
  }

  Player.findAll({
    where: query
  })
  .then(players => {
    Coach.findAll({
      where: query
    })
    .then(coaches => {
      res.render('team', {
        players,
        coaches
      })
    })
  })
});

module.exports = route;