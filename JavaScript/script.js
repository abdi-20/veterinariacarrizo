document.addEventListener('DOMContentLoaded', function() {
    
    // 1. REFERENCIAS A ELEMENTOS DEL DOM
    const formulario = document.querySelector('form');
    const inputFecha = document.getElementById('fecha');
    
    // Obtener la fecha de hoy
    const hoy = new Date().toISOString().split('T')[0];
    inputFecha.setAttribute('min', hoy);

    // Lógica para el botón Iniciar Sesión / Registrarse
    const authLink = document.getElementById('auth-link');
    
    // Solo ejecutamos si el elemento existe
    if (authLink) {
        setInterval(() => {
            if (authLink.textContent.includes('Iniciar Sesión')) {
                authLink.textContent = 'Registrarse';
                authLink.setAttribute('href', '#registro');
            } else {
                authLink.textContent = 'Iniciar Sesión';
                authLink.setAttribute('href', '#login');
            }
        }, 3000); 
    }

    // INTERACTIVIDAD: MANEJO DEL ENVÍO (SUBMIT)
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        // Capturar datos
        const nombreMascota = document.getElementById('mascota').value;
        const servicio = document.getElementById('servicio').options[document.getElementById('servicio').selectedIndex].text;
        const fecha = document.getElementById('fecha').value;

        // Feedback al usuario
        alert(`¡Cita Agendada con Éxito!\n\nMascota: ${nombreMascota}\nServicio: ${servicio}\nFecha: ${fecha}\n\nTe esperamos en Veterinaria el Carrizo.`);
        
        // Limpiar el formulario
        formulario.reset();
    });
});