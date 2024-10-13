const form = document.getElementById('form-cambiar-contraseña');
const contraseñaActual = document.getElementById('contraseña-actual');
const nuevaContraseña = document.getElementById('nueva-contraseña');
const confirmarContraseña = document.getElementById('confirmar-contraseña');
const mensajeError = document.getElementById('mensaje-error');
document.querySelector('.btn-cancelar').addEventListener('click', function() {
    alert('Redirigiendo a la página de perfil.');
    window.location.href = 'Perfil_Admin.html';
});
form.addEventListener('submit', function(event) {
    mensajeError.textContent = '';
    mensajeError.classList.remove('mostrar');

    if (nuevaContraseña.value !== confirmarContraseña.value) {
        mensajeError.textContent = 'Las nuevas contraseñas no coinciden.';
        mensajeError.classList.add('mostrar');
        event.preventDefault();
        return;
    }

    if (nuevaContraseña.value === contraseñaActual.value) {
        mensajeError.textContent = 'La nueva contraseña no puede ser la misma que la actual.';
        mensajeError.classList.add('mostrar');
        event.preventDefault();
        return;
    }
});
