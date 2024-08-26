document.querySelectorAll('.play-sound').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        
        var audio = document.querySelector('.audio');
        
        // Reproduce el sonido y luego redirige cuando esté listo
        audio.play().then(() => {
            // Solo navega si el audio se reproduce correctamente
            window.location.href = element.href;
        }).catch((error) => {
            // Si ocurre un error al reproducir el audio, redirige de todas formas
            window.location.href = element.href;
        });
    });
});

document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Su cita ha sido enviado!");
    document.getElementById("formulario").reset();
});

function toggleMenu(x) {
    x.classList.toggle("change");
    document.querySelector('nav').classList.toggle('active');
}