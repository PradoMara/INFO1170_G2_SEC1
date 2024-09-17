document.getElementById('postulanteLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (email === 'postulante@example.com' && password === 'postulante123') {
      errorMessage.textContent = '';
      alert('Inicio de sesión exitoso');
      // Redirigir a la página de postulante
    } else {
      errorMessage.textContent = 'Correo o contraseña incorrecta';
    }
  });
  