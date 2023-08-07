const { PokemonsController } = require('../controllers/pokemons.controller');
const Router = require('express');
const routes = Router();

// routes.get('/', PokemonsController.getPokemon)
routes.post('/create', PokemonsController.createPokemon);

module.exports = { routes };
