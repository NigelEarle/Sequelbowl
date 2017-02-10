const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.send('rise up!');
})

module.exports = router;