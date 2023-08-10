const mongoose = require('mongoose');

const pokemon = new mongoose.Schema({
  nombre: String,
  tipo: String,
  descripcion: String,
  evolucion: String,
  debilidades: String,
  imagen: String,
});

const Pokemons = mongoose.model('pokemons', pokemon);

module.exports = Pokemons;
