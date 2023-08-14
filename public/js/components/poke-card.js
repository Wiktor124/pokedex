async function renderPokeCard(pokemons = []) {

  document.querySelector('#pokemons').innerHTML = pokemons.map(({ _id, nombre, tipo, evolucion, descripcion, debilidades, imagen }) => {
    return `
    <li class="card">
      <img src="${imagen}" class="card-img-top" alt="Imagen de ${nombre}">
      <div id="pokeInfo" class="card-body">
        <h1>${nombre}</h1>
        <p><strong>Tipo</strong>: ${tipo}</p>
        <p><strong>Evolución</strong>: ${evolucion}</p>
        <p><strong>Descripción</strong>: ${descripcion}</p>
        <p><strong>Debilidades</strong>: ${debilidades}</p>
      </div>
      <button  type="button" class="button delete" data-id="${_id}" >Eliminar</button>
      <button type="button" class="btn btn-primary update" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-id="${_id}">Edit Pokemon</button>
      
    </li>
    `
  }).join('');
}

export default renderPokeCard;

