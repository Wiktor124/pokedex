const Pokemons = require('../models/pokemon');
const { PORT } = require('../config');

const PokemonsController = {
  getPokemons: async (req, res) => {
    const pokemons = await Pokemons.find();
    res.send(pokemons);
  },
  getPokemonById: async (req, res) => {
    try {
      const pokemonId = req.params.id;
      const pokemon = await Pokemons.findById(pokemonId);

      if (!pokemon) {
        return res.status(404).json({ error: 'Pokemon no encontrado' });
      }

      res.json(pokemon);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener el pokemon por ID' });
    }
  },
  createPokemon: async (req, res) => {
    try {
      if (req.file) {
        req.body.imagen = `http://localhost:${PORT}/public/${req.file.filename}`;
      }
      console.log(req.body);

      const newPokemon = await Pokemons.create(req.body);

      res.status(201).redirect('/');
    } catch (err) {
      res.status(500).json({ error: 'Error al crear un pokemon' });
    }
  },
  updatePokemon: async (req, res) => {
    try {
      const pokemonId = req.params.id;
      const updatedPokemon = await Pokemons.findByIdAndUpdate(
        pokemonId,
        req.body,
        { new: true },
      );

      if (!updatedPokemon) {
        return res.status(404).json({ error: 'Pokemon no encontrado' });
      }

      res.json(updatedPokemon);
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el pokemon' });
    }
  },
  deletePokemon: async (req, res) => {
    try {
      const pokemonId = req.params.id;
      const deletedPokemon = await Pokemons.findByIdAndDelete(pokemonId);

      if (!deletedPokemon) {
        return res.status(404).json({ error: 'Pokemon no encontrado' });
      }

      res.json({ message: 'Pokemon eliminado exitosamente' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el pokemon por ID' });
    }
  },
};

module.exports = PokemonsController;
