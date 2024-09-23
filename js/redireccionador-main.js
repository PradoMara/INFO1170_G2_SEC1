document.getElementById("postulaciones-btn").addEventListener("click", function() {
    window.location.href = "postulaciones.html"; // Redirecciona a la página de postulaciones
});

document.getElementById("logo-user").addEventListener("click", function() {
    window.location.href = "miperfil.html"; // Redirecciona a la página mi perfil
});

document.getElementById("cv-btn").addEventListener("click", function() {
    window.location.href = "cv.html"; // Redirecciona a la página del cv
});

document.getElementById("perfil-btn").addEventListener("click", function() {
    window.location.href = "perfil.html"; // Redirecciona a la página del perfil
});
document.getElementById("cerrar-btn").addEventListener("click", function() {
    window.location.href = "cerrrar.html"; // Redirecciona a la página de inicio 
});
// para el buzon de notificaciones
document.addEventListener('DOMContentLoaded', () => {
    const notificacionesBtn = document.getElementById('notificaciones-btn');
    const notificacionesContainer = document.getElementById('notificaciones-container');

    // Función para cargar notificaciones desde otro archivo HTML
    const cargarNotificaciones = () => {
        fetch('buzon-notificaciones.html')
            .then(response => response.text())
            .then(data => {
                notificacionesContainer.innerHTML = data;
                notificacionesContainer.classList.add('show');

                // Cerrar el buzón de notificaciones al hacer clic en el botón de cerrar
                const closeBtn = notificacionesContainer.querySelector('.close-btn');
                closeBtn.addEventListener('click', () => {
                    notificacionesContainer.classList.remove('show');
                });
            })
            .catch(error => console.error('Error al cargar las notificaciones:', error));
    };

    // Mostrar notificaciones al hacer clic en el icono de notificaciones
    notificacionesBtn.addEventListener('click', cargarNotificaciones);

    // Mostrar notificaciones al pasar el mouse sobre el icono (opcional)
    notificacionesBtn.addEventListener('mouseover', cargarNotificaciones);
});
