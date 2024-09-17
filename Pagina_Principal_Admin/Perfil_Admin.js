document.querySelector('.btn-editar').addEventListener('click', function() {
    alert('Redirigiendo a la página de edición de perfil.');
    window.location.href = 'Edicion_Perfil.html';
});

document.querySelector('.btn-password').addEventListener('click', function() {
    alert('Redirigiendo a la página de cambio de contraseña.');
    window.location.href = 'Cambio_pasword.html';
});

document.querySelector('.btn-logout').addEventListener('click', function() {
    alert('Redirigiendo a la página principal.');
    window.location.href = 'Pagina_Admin.html';
});