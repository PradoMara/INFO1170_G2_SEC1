document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nombreInput = document.getElementById('nombre');
    const correoInput = document.getElementById('correo');
    const btnGuardar = document.querySelector('.btn-guardar');
    const btnCancelar = document.querySelector('.btn-cancelar');

    form.addEventListener('submit', function(event) {
        if (nombreInput.value.trim() === '' || correoInput.value.trim() === '') {
            alert('Por favor, completa todos los campos.');
            event.preventDefault(); 
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(correoInput.value)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            event.preventDefault(); 
        }
    });

    btnCancelar.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Redirigiendo a la página perfil.');
        window.location.href = 'Perfil_Admin.html';
    });

    btnGuardar.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Redirigiendo a la página perfil.');
        window.location.href = 'Perfil_Admin.html';
    });
});
