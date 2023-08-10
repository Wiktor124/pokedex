const Pokemons = require('../models/pokemon');


const PokemonsController = {

  getPokemons: async (req, res) => {
    const pokemons = await Pokemons.find();

    console.log(pokemons);
    res.send(pokemons)
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
      const newPokemon = await Pokemons.create(req.body);


      console.log(req.body)
      res.status(201).json(newPokemon);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear un pokemon' });
    }
  },
  updatePokemon: async (req, res) => {
    try {
      const pokemonId = req.params.id;
      const updatedPokemon = await Pokemons.findByIdAndUpdate(pokemonId, req.body, { new: true });

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
  }
};

module.exports = PokemonsController;
