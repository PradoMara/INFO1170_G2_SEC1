document.getElementById('register-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (password !== confirmPassword) {
        event.preventDefault();  
        errorMessage.textContent = 'Las contraseñas no coinciden';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';  
    }
});
