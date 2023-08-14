const { PORT } = require('./config');
const connetToMongoDB = require('./services/db-connection');
const path = require('path');
const express = require('express');
const pokeRoutes = require('./routes/routes');
const multer = require('multer');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(pokeRoutes);
app.use(multer({
  dest: path.join(__dirname, 'public/uploads')
}).single('imagen'));
app.use('/public', express.static(path.join(__dirname, 'public/uploads')));

app.listen(PORT, () => {
  console.clear();
  console.log('Server on port', PORT);

  console.log(path.join(__dirname, '../public/images'));

  try {
    connetToMongoDB();
  } catch (err) {
    console.log('there was an error :(', err);
  }
});
