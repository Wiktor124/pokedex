const { Pokemons } = require('../models/pokemon');

const PokemonsController = {
  // getPokemon: async (req, res) => {
  //   // console.log(req.body)
  //   const pokemons = await Pokemons.find();

  //   res.send(pokemons)
  // },
  createPokemon: async (req, res) => {
    try {
      const newPokemon = await Pokemons.create(req.body);
      console.log(req.body);
      res.status(201).json(newPokemon);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear un pokemon' });
    }
  },
};

module.exports = { PokemonsController };
