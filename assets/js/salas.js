document.addEventListener("DOMContentLoaded", function() {
    const infoContainer = document.getElementById('salas');
    const infos = infoContainer.getElementsByClassName('sala');
    let currentIndex = 0;

    function changeInfo() {
        infos[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % infos.length;
        infos[currentIndex].style.display = 'block';
    }

    // Exibir a primeira informação
    infos[currentIndex].style.display = 'block';

    // Alterar a informação a cada 10 segundos
    setInterval(changeInfo, 5000);
});