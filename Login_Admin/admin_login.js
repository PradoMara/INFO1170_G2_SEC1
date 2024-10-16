document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');
  
  // Validar que los campos no estén vacíos
  if (!email || !password) {
    errorMessage.textContent = 'Por favor, complete todos los campos';
    return;
  }

  // Verificación de las credenciales
  if (email === 'admin@example.com' && password === 'admin123') {
    errorMessage.textContent = ''; // Limpiar cualquier mensaje de error previo
    alert('Inicio de sesión exitoso');
    
    // Redirigir a la página del administrador
    window.location.href = '../Pagina_admin/Pagina_Admin.html'; 
  } else {
    errorMessage.textContent = 'Correo o contraseña incorrecta';
  }
});
