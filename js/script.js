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