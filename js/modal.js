// obtener las propiedades ids del modal
const modal = document.getElementById("calendarioModal");
const abrirModalBtn = document.getElementById("abrirModalBtn");
const cerrarModal = document.getElementsByClassName("cerrar")[0];

//obtener las propiedades ids botones del modal
const guardarBtn = document.getElementById("guardarBtn");

//obtener los ids de las propiedades del modal - inputs
const nombrePacienteInput = document.getElementById("nombrePaciente");
const celularPacienteInput = document.getElementById("celularPaciente");
const citaFechaHoraInput = document.getElementById("citaFechaHora");

//validacion input nombre - caracteres letras
nombrePacienteInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});

//validacion input celular - caracteres numeros
celularPacienteInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

//mostrar ventana modal al hacer click en el boton "pide tu cita"
abrirModalBtn.onclick = function () {
    modal.style.display = "block";
}

//cerrar ventana del modal al darle click en "X" 
cerrarModal.onclick = function () {
    modal.style.display = "none";
}

//cerrar ventana al hacer click fuera del modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//validacion horario de la cita
function validarCitaFechaHora(datetime) {
    const fecha = new Date(datetime);
    const dia = fecha.getDay();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();


    // horario de atencion PAGC Lunes a viernes(9:30 A 20:00)
    if (dia >= 1 && dia <= 5) {
        return (horas > 9 || (horas === 9 && minutos >= 30)) && (horas < 20 || (horas === 20 && minutos === 0));
    }

    //fines de semana (9:30 a 13:00)
    if (dia === 6) {
        return (horas > 9 || (horas === 9 && minutos >= 30)) && (horas < 13 || (horas === 13 && minutos === 0));
    }

    // Domingos no permitidos
    return false;
}

//guardar cita y generar un codigo aleatorio de registro
guardarBtn.onclick = function () {
    const nombrePaciente = nombrePacienteInput.value.trim();
    const celularPaciente = celularPacienteInput.value.trim();
    const citaFechaHora = citaFechaHoraInput.value;

    if (!nombrePaciente || !celularPaciente || !citaFechaHora) {
        alert("Por favor completa el registro.");
        return;
    }

    if (!validarCitaFechaHora(citaFechaHora)) {
        alert("La fecha y hora no es válida. Elige un hora entre lunes a viernes (9:30 a 19:30) y sabados(9:30 a 12:00");
        return;
    }

    //generar un codigo aleatorio
    const codigoCita = 'CITA-' + Math.floor(Math.random() * 1000000);
    alert(`Cita Generada: ${nombrePaciente}\nTeléfono: ${celularPaciente}\nFecha y Hora: ${citaFechaHora}\nCódigo de registro: ${codigoCita}`);

    //Cerrar - guardar y mostrar los datos de la cita
    modal.style.display = "none";
}  
