document.getElementById('recuperarForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && emailRegex.test(email)) {
        mensaje.textContent = `Se ha enviado un enlace de recuperación a ${email}.`;
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Por favor, ingresa un correo válido.';
        mensaje.style.color = 'red';
    }

    setTimeout(() => {
        mensaje.textContent = '';
    }, 5000);
});
