document.getElementById("terminos-condiciones").addEventListener("click", function() {
    window.location.href = "terminos-condicionesE.html"; // Redirecciona a la página terminos y condiciones
});
document.getElementById("politica-privacidad").addEventListener("click", function() {
    window.location.href = "privacidadE.html"; // Redirecciona a la página de politica de privacidad
});

// Función para alternar visibilidad de contraseñas
function togglePasswordVisibility(inputId, showIconId, hideIconId) {
    const inputField = document.getElementById(inputId);
    const showIcon = document.getElementById(showIconId);
    const hideIcon = document.getElementById(hideIconId);

    showIcon.addEventListener('click', () => {
        inputField.type = 'text';
        showIcon.style.display = 'none';
        hideIcon.style.display = 'block';
    });

    hideIcon.addEventListener('click', () => {
        inputField.type = 'password';
        showIcon.style.display = 'block';
        hideIcon.style.display = 'none';
    });
}

// Llamar a la función para cada campo de contraseña
togglePasswordVisibility('contrasena', 'show-contrasena', 'hide-contrasena');
togglePasswordVisibility('confirmar-contrasena', 'show-confirmar-contrasena', 'hide-confirmar-contrasena');


