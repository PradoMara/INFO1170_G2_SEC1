document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('validar-btn').addEventListener('click', function() {
        let valid = true;

        let nombre = document.getElementById('nombre-empresa');
        let errorNombre = document.getElementById('error-nombre');
        if (nombre.value === "") {
            errorNombre.textContent = "Este campo es obligatorio";
            errorNombre.style.display = 'block';
            valid = false;
        } else {
            errorNombre.style.display = 'none';
        }

        let rut = document.getElementById('rut');
        let errorRut = document.getElementById('error-rut');
        if (rut.value === "") {
            errorRut.textContent = "Este campo es obligatorio";
            errorRut.style.display = 'block';
            valid = false;
        } else {
            errorRut.style.display = 'none';
        }

        let email = document.getElementById('email');
        let errorEmail = document.getElementById('error-email');
        if (email.value === "") {
            errorEmail.textContent = "Este campo es obligatorio";
            errorEmail.style.display = 'block';
            valid = false;
        } else {
            errorEmail.style.display = 'none';
        }

        let ciudad = document.getElementById('ciudad');
        let errorCiudad = document.getElementById('error-ciudad');
        if (ciudad.value === "") {
            errorCiudad.textContent = "Este campo es obligatorio";
            errorCiudad.style.display = 'block';
            valid = false;
        } else {
            errorCiudad.style.display = 'none';
        }

        let codigo = document.getElementById('codigo-postal');
        let errorCodigo = document.getElementById('error-codigo');
        if (codigo.value === "") {
            errorCodigo.textContent = "Este campo es obligatorio";
            errorCodigo.style.display = 'block';
            valid = false;
        } else {
            errorCodigo.style.display = 'none';
        }

        let contacto = document.getElementById('contacto');
        let errorContacto = document.getElementById('error-contacto');
        if (contacto.value === "") {
            errorContacto.textContent = "Este campo es obligatorio";
            errorContacto.style.display = 'block';
            valid = false;
        } else {
            errorContacto.style.display = 'none';
        }

        let telefono = document.getElementById('telefono');
        let errorTelefono = document.getElementById('error-telefono');
        if (telefono.value === "") {
            errorTelefono.textContent = "Este campo es obligatorio";
            errorTelefono.style.display = 'block';
            valid = false;
        } else {
            errorTelefono.style.display = 'none';
        }

        let contraseña = document.getElementById('contraseña');
        let errorContraseña = document.getElementById('error-contraseña');
        if (contraseña.value === "") {
            errorContraseña.textContent = "Este campo es obligatorio";
            errorContraseña.style.display = 'block';
            valid = false;
        } else {
            errorContraseña.style.display = 'none';
        }

        let confirmarContraseña = document.getElementById('confirmar-contraseña');
        let errorConfirmarContraseña = document.getElementById('error-confirmar-contraseña');
        if (confirmarContraseña.value === "") {
            errorConfirmarContraseña.textContent = "Este campo es obligatorio";
            errorConfirmarContraseña.style.display = 'block';
            valid = false;
        } else {
            errorConfirmarContraseña.style.display = 'none';
        }

        if (valid) {
            // Si todo es válido, redirigimos
            window.location.href = '../Validacion_Empresa/Validacion_Empresa.html';
        }
    });
});
