import modalCard from '../components/modal-content.js';
import renderPokeCard from '../components/poke-card.js';
import {
  getPokemons,
  deletePokemon,
  updatePokemon,
  getPokemonById,
} from '../service/pokeData.js';

const pokeForm = document.querySelector('#pokemonForm');

async function handlePokeForm() {
  renderPokeCard(await getPokemons());
}

async function handleClick(e) {
  const button = e.target;
  if (!button.matches('button')) return;

  if (button.matches('.update')) {
    document.querySelector('.modal-body').innerHTML = modalCard(
      await getPokemonById(button.dataset.id),
    );
    document
      .querySelector('#update')
      .setAttribute('data-id', button.dataset.id);
  }

  if (button.matches('.delete')) {
    await deletePokemon(button.dataset.id);
    renderPokeCard(await getPokemons());
  }
}

async function handleEditPokeContent(e) {
  const editThis = e.target;
  const pokeInfo = document.querySelector('.modal-body');
  const newData = pokeInfo.querySelectorAll('input[type="text"]');
  const data = {};

  newData.forEach(item => (data[item.name] = item.value));

  await updatePokemon(editThis.dataset.id, data);
  renderPokeCard(await getPokemons());
}

function handleSearch(e) {
  let texto = new RegExp(e.target.value, 'i');

  document.querySelectorAll('.card').forEach(pokemon => {

    if (texto.test(pokemon.innerText)) {
      pokemon.classList.remove('filtrar');
    } else {
      pokemon.classList.add('filtrar');
    }
  });
}

async function initApp() {
  renderPokeCard(await getPokemons());
  pokeForm.addEventListener('submit', handlePokeForm);
  document.querySelector('#pokemons').addEventListener('click', handleClick);
  document.querySelector('#update').addEventListener('click', handleEditPokeContent);
  document.querySelector('#search').addEventListener('keyup', handleSearch);
}

export default initApp;
