function modalCard({ nombre, tipo, evolucion, descripcion, debilidades }) {
  return `
  <div>
    <label class="formt-label" for="nombre">Nombre:</label>
    <input class="form-control" type="text" name="nombre" value="${nombre}" required/>
  </div>
  <div>
    <label class="formt-label" for="tipo">Tipo:</label>
    <input class="form-control" type="text" name="tipo" value="${tipo}" required/>
  </div>
  <div>
    <label class="formt-label" for="evolucion">Evolución:</label>
    <input class="form-control" type="text" name="evolucion" value="${evolucion}" required/>
  </div>
  <div>
    <label class="formt-label" for="descripcion">Descripción:</label>
    <input class="form-control" type="text" name="descripcion" value="${descripcion}" required/>
  </div>
  <div>
    <label class="formt-label" for="debilidades">Debilidades:</label>
    <input class="form-control" type="text" name="debilidades" value="${debilidades}" required/>
  </div>

  `;
}

export default modalCard;
