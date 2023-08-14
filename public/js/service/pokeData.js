const pokemonEndpoint = 'pokemon';

const getPokemons = async () => {
  try {
    return await fetch(`/${pokemonEndpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json());
  } catch (err) {
    console.error('Oops hubo un error al buscar los pokemons!.');
  }
};

const getPokemonById = async id => {
  try {
    return await fetch(`/${pokemonEndpoint}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json());
  } catch (err) {
    console.error('No se pudo obtener el pokemon!');
  }
};

const updatePokemon = async (id, pokemon) => {
  try {
    await fetch(`/${pokemonEndpoint}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(pokemon),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json());
  } catch (err) {
    console.log('Oops, hubo un error al actualizar el pokemon!');
  }
};

const deletePokemon = async id => {
  try {
    await fetch(`/${pokemonEndpoint}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json());
  } catch (err) {
    console.error('No se pudo eliminar el pokemon!');
  }
};

export { getPokemons, getPokemonById, updatePokemon, deletePokemon };
