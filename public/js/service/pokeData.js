const pokemonEndpoint = 'pokemon';

const getPokemons = async () => {
  try {
    const response = await fetch(`/${pokemonEndpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Error getting pokemons: ${response.status}`);
    }
  } catch (err) {
    console.error('Oops hubo un error al buscar los pokemons!.');
  }
};

const getPokemonById = async (id) => {
  try {
    const response = await fetch(`/${pokemonEndpoint}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error(`Error getting pokemon with id ${id}: ${response.status}`);
    }
  } catch (err) {
    console.error('No se pudo obtener el pokemon!');
  }
};

const createPokemon = async (data) => {
  try {
    return await fetch('/pokemon', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  } catch (err) {
    console.log('Oops, hubo un error al crear el pokemon!');
  }

}

const updatePokemon = async (id, pokemon) => {
  console.log(id, pokemon);
  console.log(`/${pokemonEndpoint}/${id}`);

  try {
    return await fetch(`/${pokemonEndpoint}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(pokemon),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  } catch (err) {
    console.log('Oops, hubo un error al actualizar el pokemon!');
  }
};


const deletePokemon = async (id) => {
  try {
    const response = await fetch(`/${pokemonEndpoint}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      return;
    } else {
      throw new Error(`Error deleting pokemon with id ${id}: ${response.status}`);
    }
  } catch (err) {
    console.error('No se pudo eliminar el pokemon!');
  }
};

export { getPokemons, getPokemonById, createPokemon, updatePokemon, deletePokemon };