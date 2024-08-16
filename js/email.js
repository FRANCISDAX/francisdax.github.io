//obteniendo el id del boton 
const btn = document.getElementById("button");

//obtener el id del formulario con el  evento del boton enviar
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    //boton enviar -> enviando
    btn.value = "Enviando....";

    //id de los servicios de CDN email.js
    const serviceID = "service_os3i583";
    const templateID = "template_z2lco17";

    //crea el template del servicio
    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            //envia correctamente
            btn.value = "enviar";
            alert("Enviado!");
            document.getElementById("form").reset(); // dejar en blanco los inputs
        },
        //ocurre un error
        (error) => {
            btn.value = "enviar";
            alert(JSON.stringify(error));
        }
    );
})