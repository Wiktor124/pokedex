const PokemonsController = require('../controllers/pokemons.controller');
const express = require('express');
const routes = express.Router();

const pokeRoutes = express();


routes.get('/', PokemonsController.getPokemons);
routes.get('/:id', PokemonsController.getPokemonById);
routes.post('/', PokemonsController.createPokemon);
routes.put('/:id', PokemonsController.updatePokemon);
routes.delete('/:id', PokemonsController.deletePokemon);

pokeRoutes.use('/pokemon/', routes)

module.exports = pokeRoutes;
