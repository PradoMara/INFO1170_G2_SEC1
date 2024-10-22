document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const age = parseInt(document.getElementById('age').value, 10); 
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        console.log('Error: Las contraseñas no coinciden'); 
        return;
    }

    if (age < 16) {
        errorMessage.textContent = 'Debes tener al menos 16 años para registrarte.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        console.log('Error: Edad menor a 16 años'); 
        return;
    }

    const formData = new FormData(document.getElementById('register-form'));

    fetch('registro_postulante.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.text();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data); 
        if (data.includes('Error')) {
            errorMessage.textContent = data; 
            errorMessage.style.display = 'block';
            successMessage.style.display = 'none';
        } else {
            successMessage.textContent = 'Registro exitoso.';
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
        }
    })
    .catch(error => {
        console.error('Error en el envío:', error);
        errorMessage.textContent = 'Ocurrió un error al registrar el postulante.';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    });
});
