// Manejo de cambio de contraseña
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




// Subir CV
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

// Editar información de contacto

document.querySelector('#guardar-contacto').addEventListener('click', function() {
    const nacionalidad = document.querySelector('#nacionalidad').value;
    const rut = document.querySelector('#rut').value;
    const fechaNacimiento = document.querySelector('#fecha-nacimiento').value;
    const telefono = document.querySelector('#telefono').value;
    const estadoCivil = document.querySelector('#estado-civil').value;
    const userId = 1; // Cambia esto para obtener el ID del usuario actual

    fetch('editar-informacion-contacto.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `nacionalidad=${nacionalidad}&rut=${rut}&fecha_nacimiento=${fechaNacimiento}&telefono=${telefono}&estado_civil=${estadoCivil}&user_id=${userId}`
    })
    .then(response => response.text())
    .then(data => {
        alert('Información de contacto actualizada');
        document.querySelector('.form-editar-contacto').style.display = 'none';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


// Editar experiencia laboral
ddocument.querySelector('.editar-experiencia-btn').addEventListener('click', function() {
    document.querySelector('.form-editar-experiencia').style.display = 'block';
});

document.querySelector('#guardar-experiencia').addEventListener('click', function() {
    const puesto = document.querySelector('#edit-puesto').value;
    const empresa = document.querySelector('#edit-empresa').value;
    const userId = 1; // Cambia esto para obtener el ID del usuario actual

    fetch('editar-informacion-personal.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `puesto=${puesto}&empresa=${empresa}&user_id=${userId}`
    })
    .then(response => response.text())
    .then(data => {
        alert('Experiencia laboral actualizada.');
        document.querySelector('.form-editar-experiencia').style.display = 'none';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


// Selección de primer trabajo
document.querySelector('#primer-trabajo').addEventListener('change', function() {
    if (this.checked) {
        alert('Buscas tu primer trabajo.');
    } else {
        alert('Ya tienes experiencia laboral.');
    }
});

// Modal para cambio de contraseña
const modal = document.getElementById("modal-contraseña");
const openModalBtn = document.querySelector(".cambiar-password-btn");
const closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
    document.body.classList.add("modal-open");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.classList.remove("modal-open");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
    }
});

// Validación de cambio de contraseña
const formCambiarContraseña = document.getElementById('form-cambiar-contraseña');
const newPasswordField = document.getElementById('new-password');
const confirmPasswordField = document.getElementById('confirm-password');

formCambiarContraseña.addEventListener('submit', (e) => {
    e.preventDefault();
    if (newPasswordField.value !== confirmPasswordField.value) {
        alert('Las contraseñas no coinciden');
    } else {
        alert('Contraseña cambiada exitosamente');
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
    }
});

document.querySelector('.editar-perfil-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // Mostrar el formulario de edición de perfil
});

document.addEventListener("DOMContentLoaded", () => {
    fetch('/conec/get_perfil.php')
    .then(response => response.json())
    .then(data => {
        document.querySelector('.perfil-detalles h1').textContent = data.nombre;
        document.querySelector('.perfil-detalles p').textContent = `${data.telefono} | ${data.email}`;
    });
});
