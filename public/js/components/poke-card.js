async function renderPokeCard(pokemons = []) {
  const pokemonsContainer = document.querySelector('#pokemons');

  if (pokemons.length === 0) return pokemonsContainer.innerHTML = `<li><h2 style="text-align: center;">No hay pokemons!</h2></li>`

  pokemonsContainer.innerHTML = pokemons
    .map(
      ({ _id, nombre, tipo, evolucion, descripcion, debilidades, imagen }) => {
        return `
    <li class="card">
      <div class="image-container"><img src="${imagen}" class="card-img-top" alt="Imagen de ${nombre}"></div>
      <div id="pokeInfo" class="card-body">
        <h1 class="nombre">${nombre}</h1>
        <p class="tipo"><strong>Tipo</strong>: ${tipo}</p>
        <p><strong>Evolución</strong>: ${evolucion}</p>
        <p><strong>Descripción</strong>: ${descripcion}</p>
        <p class="debilidades"><strong>Debilidades</strong>: ${debilidades}</p>
      </div>
      <div class="poke-buttons">
        <button type="button" class="delete" data-id="${_id}" ></button>
        <button type="button" class="update" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-id="${_id}"></button>
      </div>
      
    </li>
    `;
      },
    )
    .join('');
}

export default renderPokeCard;
