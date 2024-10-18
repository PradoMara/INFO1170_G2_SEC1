document.addEventListener('DOMContentLoaded', () => {
    const formularioMenor = document.getElementById('formularioMenor');

    formularioMenor.addEventListener('submit', function(evento) {
        evento.preventDefault();
        let esValido = true;

        const inputRut = document.getElementById('rut');
        const errorRut = document.getElementById('errorRut');
        const patronRut = /^[0-9]{1,8}-[0-9kK]{1}$/; 
        if (!patronRut.test(inputRut.value.trim())) {
            errorRut.textContent = 'El RUT ingresado no es válido. Debe tener el formato 12345678-9.';
            errorRut.style.display = 'block';
            esValido = false;
        } else {
            errorRut.style.display = 'none';
        }

        const inputEdad = document.getElementById('edad');
        const errorEdad = document.getElementById('errorEdad');
        if (inputEdad.value < 0 || inputEdad.value > 17) {
            errorEdad.textContent = 'La edad debe ser entre 0 y 17 años.';
            errorEdad.style.display = 'block';
            esValido = false;
        } else {
            errorEdad.style.display = 'none';
        }

        const inputDireccion = document.getElementById('direccion');
        const errorDireccion = document.getElementById('errorDireccion');
        if (inputDireccion.value.trim() === '') {
            errorDireccion.textContent = 'La dirección es requerida.';
            errorDireccion.style.display = 'block';
            esValido = false;
        } else {
            errorDireccion.style.display = 'none';
        }

        const inputPermiso = document.getElementById('permisoFirmado');
        const errorPermiso = document.getElementById('errorPermisoFirmado');
        if (inputPermiso.files.length === 0) {
            errorPermiso.textContent = 'Debes subir el permiso firmado por el tutor.';
            errorPermiso.style.display = 'block';
            esValido = false;
        } else {
            errorPermiso.style.display = 'none';
        }

        const inputCedula = document.getElementById('fotoCedula');
        const errorCedula = document.getElementById('errorFotoCedula');
        if (inputCedula.files.length === 0) {
            errorCedula.textContent = 'Debes subir la foto de la cédula de identidad.';
            errorCedula.style.display = 'block';
            esValido = false;
        } else {
            errorCedula.style.display = 'none';
        }

        const inputFotoMenor = document.getElementById('fotoMenor');
        const errorFotoMenor = document.getElementById('errorFotoMenor');
        if (inputFotoMenor.files.length === 0) {
            errorFotoMenor.textContent = 'Debes subir una foto del menor de edad.';
            errorFotoMenor.style.display = 'block';
            esValido = false;
        } else {
            errorFotoMenor.style.display = 'none';
        }

        if (esValido) {
            alert('Validación enviada correctamente.');
            window.location.href = '../Pagina_Principal_Menor_de_Edad/PaginaPrincipalMenoresDeEdad.html';
        } else {
            alert('Por favor, completa todos los campos obligatorios antes de enviar.');
        }
    });
});
