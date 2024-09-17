// Validación de formulario
document.getElementById('register-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Validación de contraseñas
    if (password !== confirmPassword) {
        event.preventDefault();  // Previene el envío del formulario
        errorMessage.textContent = 'Las contraseñas no coinciden';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';  // Si no hay error, oculta el mensaje
    }
});
