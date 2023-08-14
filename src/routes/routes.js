const PokemonsController = require('../controllers/pokemons.controller');
const upload = require('../libs/upload-images');
const express = require('express');
const routes = express.Router();

const pokeRoutes = express();

routes.get('/', PokemonsController.getPokemons);
routes.get('/:id', PokemonsController.getPokemonById);
routes.post('/', upload.single('imagen'), PokemonsController.createPokemon);
routes.put('/:id', PokemonsController.updatePokemon);
routes.delete('/:id', PokemonsController.deletePokemon);

pokeRoutes.use('/pokemon/', routes);

module.exports = pokeRoutes;
