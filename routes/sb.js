const express = require('express');
const route = express.Router();
const db = require('../models');

const {
  Superbowl,
  Team,
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
    res.send(result.dataValues)
  })
  .catch(err => {
    res.send(err)
  });
});

module.exports = route;