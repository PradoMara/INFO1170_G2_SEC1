document.addEventListener('DOMContentLoaded', function() {
    const validarFormulario = () => {
        let valid = true;

        // Función para validar campos de texto
        const validarCampo = (campoId, errorId, mensajeAdvertencia) => {
            const campo = document.getElementById(campoId);
            const errorMensaje = document.getElementById(errorId);
            if (campo.value.trim() === "") {
                errorMensaje.textContent = mensajeAdvertencia;
                errorMensaje.style.display = 'block';
                valid = false;
            } else {
                errorMensaje.style.display = 'none';
            }
        };

        // Validaciones específicas con advertencias personalizadas
        validarCampo('nombre-empresa', 'error-nombre', 'Te faltó este campo');
        validarCampo('rut', 'error-rut', 'Te faltó este campo');
        validarCampo('email', 'error-email', 'Te faltó este campo');
        validarCampo('ciudad', 'error-ciudad', 'Te faltó este campo');
        validarCampo('codigo-postal', 'error-codigo', 'Te faltó este campo');
        validarCampo('contacto', 'error-contacto', 'Te faltó este campo');
        validarCampo('telefono', 'error-telefono', 'Te faltó este campo');
        validarCampo('contraseña', 'error-contraseña', 'Te faltó este campo');
        validarCampo('confirmar-contraseña', 'error-confirmar-contraseña', 'Te faltó este campo');

        // Validar email con formato
        const email = document.getElementById('email');
        const errorEmail = document.getElementById('error-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            errorEmail.textContent = "El formato del correo es inválido";
            errorEmail.style.display = 'block';
            valid = false;
        } else {
            errorEmail.style.display = 'none';
        }

        // Validar coincidencia de contraseñas
        const contraseña = document.getElementById('contraseña').value;
        const confirmarContraseña = document.getElementById('confirmar-contraseña').value;
        const errorConfirmarContraseña = document.getElementById('error-confirmar-contraseña');
        if (contraseña !== confirmarContraseña) {
            errorConfirmarContraseña.textContent = "Las contraseñas no coinciden";
            errorConfirmarContraseña.style.display = 'block';
            valid = false;
        } else {
            errorConfirmarContraseña.style.display = 'none';
        }

        // Validar aceptación de términos y condiciones
        const terminosAceptados = document.querySelector('input[name="terminos"]').checked;
        const errorTerminos = document.getElementById('error-terminos');
        if (!terminosAceptados) {
            errorTerminos.textContent = "Acepte los términos y condiciones";
            errorTerminos.style.display = 'block';
            valid = false;
        } else {
            errorTerminos.style.display = 'none';
        }

        // Si el formulario es válido, redirigir
        if (valid) {
            window.location.href = '../Validacion_Empresa/Validacion_Empresa.html';
        }
    };

    // Escuchar el evento click del botón de validación
    document.getElementById('validar-btn').addEventListener('click', validarFormulario);
});
