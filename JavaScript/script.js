document.addEventListener('DOMContentLoaded', function() {
    
    // 1. REFERENCIAS A ELEMENTOS DEL DOM (Document Object Model)
    const formulario = document.querySelector('form');
    const inputFecha = document.getElementById('fecha');
    // Obtener la fecha de hoy en formato YYYY-MM-DD
    const hoy = new Date().toISOString().split('T')[0];
    
    // Esto impide seleccionar fechas anteriores a hoy en el calendario
    inputFecha.setAttribute('min', hoy);

    // 3. INTERACTIVIDAD: MANEJO DEL ENVÍO (SUBMIT)
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        // Capturar datos para el mensaje de confirmación
        const nombreMascota = document.getElementById('mascota').value;
        const servicio = document.getElementById('servicio').options[document.getElementById('servicio').selectedIndex].text;
        const fecha = document.getElementById('fecha').value;

        // Simular envío exitoso (Feedback al usuario)
        alert(`¡Cita Agendada con Éxito!\n\nMascota: ${nombreMascota}\nServicio: ${servicio}\nFecha: ${fecha}\n\nTe esperamos en Veterinaria el Carrizo.`);

        // Limpiar el formulario
        formulario.reset();
    });
});