/*VALIDACIÓN DE INPUTS FORMULARIO - obtener los elementos del DOM ID*/
const nombreInput = document.getElementById("nombre");
const numeroInput = document.getElementById("numero");

// Validación para el campo de nombre (solo letras)
nombre.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});

// Validación para el campo de teléfono (solo números)
numero.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});

// Función para generar un avatar randon utilizando la librería dicebear-adventure
function obtenerAvatarRandon() {
  const avatarAleatorio = Math.floor(Math.random() * 10000); // Genera un número aleatorio
  return `https://api.dicebear.com/9.x/adventurer/svg?seed=${avatarAleatorio}&baseColor=00acc1,1e88e5,5e35b1`;
}

document
  .getElementById("contenido-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de los campos
    const nombreCliente = document.getElementById("nombre").value;
    const celularCliente = document.getElementById("numero").value;
    const descripcion = document.getElementById("descripcion").value;

    // Crear un nuevo div para la reseña
    const nuevaReseña = document.createElement("div");
    nuevaReseña.classList.add("divReseña");

    // Obtener un avatar aleatorio
    const avatarUrl = obtenerAvatarRandon();

    // Crear el contenido de la reseña
    const contenidoHtmlReseña = `
                <img src="${avatarUrl}" alt="Avatar" class="cuadro-reseña-avatar">
                <p><strong>Nombre:</strong> ${nombreCliente}</p>
                <p><strong>Celular:</strong> ${celularCliente}</p>
                <p><strong>Mensaje:</strong>${descripcion}</p>`;
    nuevaReseña.innerHTML = contenidoHtmlReseña;

    // Agregar la reseña al carrusel
    document.getElementById("contenedorReseñaCreada").appendChild(nuevaReseña);

    // Limpiar los campos del formulario
    document.getElementById("contenido-form").reset();
  });
