document.addEventListener('DOMContentLoaded', function() {
    
    // 1. REFERENCIAS A ELEMENTOS DEL DOM
    const formulario = document.querySelector('form');
    const inputFecha = document.getElementById('fecha');
    
    // Obtener la fecha de hoy
    if (inputFecha) {
        const hoy = new Date().toISOString().split('T')[0];
        inputFecha.setAttribute('min', hoy);
    }

    // Los botones de Iniciar Sesión y Registrarse ahora se muestran ambos en el menú
    // No se necesita lógica adicional ya que ambos enlaces están visibles en el HTML

    // INTERACTIVIDAD: MANEJO DEL ENVÍO (SUBMIT)
    if (formulario) {
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
    }

    // ANIMACIONES AL HACER SCROLL
    initScrollAnimations();
});

// Función para inicializar animaciones de scroll
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    // Crear Intersection Observer para detectar cuando los elementos entran en el viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Opcional: dejar de observar después de animar
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Animar cuando el 10% del elemento es visible
        rootMargin: '0px 0px -50px 0px' // Animar un poco antes de que el elemento sea completamente visible
    });
    
    // Observar todos los elementos con clase scroll-animate
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Agregar animaciones a elementos comunes al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Agregar clase scroll-animate a cards, secciones, etc.
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        const animationType = index % 4; // Rotar entre diferentes animaciones
        if (animationType === 0) card.classList.add('scroll-animate', 'fade-in-up');
        else if (animationType === 1) card.classList.add('scroll-animate', 'fade-in-left');
        else if (animationType === 2) card.classList.add('scroll-animate', 'fade-in-right');
        else card.classList.add('scroll-animate', 'fade-in-scale');
    });
    
    // Agregar animación a secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('scroll-animate', 'fade-in-up');
    });
    
    // Agregar animación a títulos de sección
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.classList.add('scroll-animate', 'fade-in-down');
    });
    
    // Reinicializar observador después de agregar clases
    setTimeout(initScrollAnimations, 100);
});