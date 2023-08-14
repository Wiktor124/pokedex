function modalCard({ nombre, tipo, evolucion, descripcion, debilidades }) {
  return `
    <div>
      <input type="text"  name="nombre"  value="${nombre}" />
      <buttons class="edit">Edit</button>
    </div>
    <div>
      <input type="text"  name="tipo"  value="${tipo}" />
      <buttons class="edit">Edit</button>
    </div>
    <div>
      <input type="text"  name="evolucion"  value="${evolucion}" />
      <buttons class="edit">Edit</button>
    </div>
    <div>
      <input type="text"  name="descripcion"  value="${descripcion}" />
      <buttons class="edit">Edit</button>
    </div>
    <div>
      <input type="text"  name="debilidades"  value="${debilidades}" />
      <buttons class="edit">Edit</button>
    </div>
  `
}

export default modalCard;

