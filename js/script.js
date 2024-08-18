document.querySelectorAll('.play-sound').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        var audio = document.querySelector('.audio');
        audio.play();
        setTimeout(() => {
            window.location.href = element.href;
        }, 250);
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