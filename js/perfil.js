document.querySelector('.cambiar-password-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.password-form').style.display = 'block';
});

document.querySelector('#guardar-password').addEventListener('click', function() {
    const newPassword = document.querySelector('#new-password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;

    if (newPassword === confirmPassword && newPassword.length >= 6) {
        alert('Contraseña cambiada correctamente');

        document.querySelector('.password-form').style.display = 'none';
    } else {
        alert('Las contraseñas no coinciden o son demasiado cortas');
    }
});

document.querySelector('.subir-cv-btn').addEventListener('click', function() {
    document.querySelector('#upload-cv').click();
});

document.querySelector('#upload-cv').addEventListener('change', function() {
    const file = this.files[0];
    if (file && file.type === 'application/pdf') {
        alert(`CV subido: ${file.name}`);

    } else {
        alert('Solo se permiten archivos PDF.');
    }
});

document.querySelector('.editar-info-contacto-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.form-editar-contacto').style.display = 'block';
});

document.querySelector('#guardar-contacto').addEventListener('click', function() {
    const nacionalidad = document.querySelector('#nacionalidad').value;
    const rut = document.querySelector('#rut').value;
    const fechaNacimiento = document.querySelector('#fecha-nacimiento').value;
    const telefono = document.querySelector('#telefono').value;
    const estadoCivil = document.querySelector('#estado-civil').value;

    alert('Información de contacto actualizada.');
    document.querySelector('.form-editar-contacto').style.display = 'none';
});

document.querySelector('.editar-experiencia-btn').addEventListener('click', function() {
    document.querySelector('.form-editar-experiencia').style.display = 'block';
});

document.querySelector('#guardar-experiencia').addEventListener('click', function() {
    const puesto = document.querySelector('#edit-puesto').value;
    const empresa = document.querySelector('#edit-empresa').value;

    document.querySelector('#puesto').textContent = puesto;
    document.querySelector('#empresa').textContent = empresa;

    alert('Experiencia laboral actualizada.');
    document.querySelector('.form-editar-experiencia').style.display = 'none';
});
document.querySelector('#primer-trabajo').addEventListener('change', function() {
    if (this.checked) {
        alert('Buscas tu primer trabajo.');
    } else {
        alert('Ya tienes experiencia laboral.');
    }
});
