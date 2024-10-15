document.getElementById('register-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const age = parseInt(document.getElementById('age').value, 10); 
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        event.preventDefault();  
        errorMessage.textContent = 'Las contraseñas no coinciden';
        errorMessage.style.display = 'block';
    } 
    else if (age < 16) {
        event.preventDefault();  
        errorMessage.textContent = 'Debes tener al menos 16 años para registrarte.';
        errorMessage.style.display = 'block';
    } 
    else {
        errorMessage.style.display = 'none';  
        
        if (age >= 16 && age < 18) {
            window.location.href = '../ValidacionMenorDeEdad/Validacion_Menor18.html';
        } else if (age >= 18) {
            window.location.href = '../ValidacionEmpleadoMayorDe18/ValidacionEmpleadoMayor18.html';
        }
    }
});
