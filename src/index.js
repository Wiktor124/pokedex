const { PORT } = require('../config');
const connetToMongoDB = require('./services/db-connection');
const path = require('path');
const express = require('express');
const { routes } = require('./routes/routes');
const app = express();

app.use(express.static(path.join('public')));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('Server on port', PORT);

  try {
    connetToMongoDB();
  } catch (err) {
    console.log('there was an error :(', err);
  }
});
