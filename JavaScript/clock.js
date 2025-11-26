document.addEventListener('DOMContentLoaded', function() {

    var clockDisplay = document.getElementById('clock-display');

    // --- Función para actualizar la hora ---
    function updateClock() {
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');

        // Asigna la hora al span. Formato HH:MM:SS
        clockDisplay.textContent = hours + ':' + minutes + ':' + seconds;
    }

    // 1. Actualiza el reloj inmediatamente y luego cada segundo
    updateClock(); 
    setInterval(updateClock, 1000); 
});