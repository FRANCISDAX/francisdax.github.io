//Esta función se utilizará para determinar qué contenido mostrar.
function cambiarAnimal(pacientes) {
  //Estas variables almacenará la ruta de la image,titulo,descripción.
  let imagenSrc = "";
  let titulo = "";
  let descripcion = "";

  //(switch)Se utiliza para ejecutar diferentes bloques segun valor del paciente en ese caso sera el nombre del animal.

  //(imagenSrc, titulo, descripcion)Se asignan valores específicos para la imagen,el título y la descripción relacionados con el valor del paciente.¨

  //(break)Que impide que se ejecuten los siguientes casos una vez que el caso correcto ha sido encontrado

  switch (pacientes) {
    case "bene":
      imagenSrc = "/img/bene-pac1.jpg";
      titulo = "Bene!";
      descripcion =
        "Informe al veterinario de todos los problemas de salud que sepa que presenta su animal, aunque no parezcan estar relacionados con el motivo de la cirugía.";
      break;
    case "shin":
      imagenSrc = "/img/shin-pac2.jpeg";
      titulo = "Shin!";
      descripcion =
        "Asegúrese de administrar correctamente todos los medicamentos que le receten.";
      break;
    case "lucas":
      imagenSrc = "/img/lucas-pac3.jpg";
      titulo = "Lucas";
      descripcion =
        "No permita que su perro o su gato se toque el vendaje o la sutura de la herida quirúrgica.";
      break;
    case "ani":
      imagenSrc = "/img/ani-pac4.jpeg";
      titulo = "Ani!";
      descripcion =
        "Los conejos son mascotas tiernas y cariñosas, perfectas para hogares tranquilos...";
      break;
  }

  //Src (fuente) de la imagen con el id animal-imagen para que muestre la imagen correspondiente al paciente seleccionado.
  document.getElementById("perroGato-imagen").src = imagenSrc;
  //Aquí se actualiza el contenido de texto del elemento con el id
  document.getElementById("animal-titulo").textContent = titulo;
  //Aquí se actualiza el contenido descripcion del elemento con el id
  document.getElementById("animal-descripcion").textContent = descripcion;
}
