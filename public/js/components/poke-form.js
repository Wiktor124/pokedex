class PokeForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <form id="pokemonForm" class="pokemon-form" action="/pokemon" method="POST" enctype="multipart/form-data" >
      <h1>Agrega un pokemon</h1>
      <div class="mb-3 ">
        <label class="formt-label" for="nombre">Nombre:</label>
        <input class="form-control" type="text" name="nombre" id="nombre" autocomplete="off" required />
      </div>
      <div class="pokemon-form__field">
        <label class="formt-label" for="tipo">Tipo:</label>
        <input class="form-control" type="text" name="tipo" id="tipo" autocomplete="off" required />
      </div>
      <div class="pokemon-form__field">
        <label class="formt-label" for="descripcion">Descripción:</label>
        <input class="form-control" type="text" name="descripcion" id="descripcion" autocomplete="off" required />
      </div>
      <div class="pokemon-form__field">
        <label class="formt-label" for="evolucion">Evolución:</label>
        <input class="form-control" type="text" name="evolucion" id="evolucion" autocomplete="off" required />
      </div>
      <div class="pokemon-form__field">
        <label class="formt-label" for="debilidades">Debilidades:</label>
        <input class="form-control" type="text" name="debilidades" id="debilidades" autocomplete="off" required />
      </div>
      <div class="pokemon-form__field">
        <label class="formt-label" for="inputGroupFile04">Imagen:</label>
        <input class="form-control" type="file" name="imagen" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" accept="image/*" required />
      </div>
      <div class="pokemon-form__field">
        <button class="btn btn-primary" type="submit">Agregar Pokémon!</button>
      </div>
    </form>

    `;
  }
}
customElements.define('app-pokeform', PokeForm);
