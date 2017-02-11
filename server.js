const express = require('express');
const path = require('path');
const compression = require('compression');
const sb = require('./routes/sb');
const db = require('./models');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/sb', sb);

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'hbs');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(PORT, (req, res) => {
  db.sequelize.sync();
  console.log(`Server running at port: ${PORT}`)
})
