document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (email === 'admin@example.com' && password === 'admin123') {
      errorMessage.textContent = '';
      alert('Inicio de sesión exitoso');
      // Redirigir a la página de administrador
    } else {
      errorMessage.textContent = 'Correo o contraseña incorrecta';
    }
  });
  