async function renderPokeCard(pokemons = []) {

  document.querySelector('#pokemons').innerHTML = pokemons.map(({ _id, nombre, tipo, evolucion, descripcion, debilidades }) => {
    return `
    <li>
      <img src="..." class="card-img-top" alt="...">
      <div id="pokeInfo">
        <h1 class="list-group-item">${nombre}</h1>
        <p class="list-group-item">${tipo}</p>
        <p class="list-group-item">${evolucion}</p>
        <p class="list-group-item">${descripcion}</p>
        <p class="list-group-item">${debilidades}</p>
      </div>
      <button  type="button" class="button delete" data-id="${_id}" >Eliminar</button>
      <button type="button" class="btn btn-primary update" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-id="${_id}">Edit Pokemon</button>
      
    </li>
    `
  }).join('');
}

export default renderPokeCard;

