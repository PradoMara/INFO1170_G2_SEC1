// Mostrar/ocultar la sección de ayuda
function toggleHelp() {
    const helpSection = document.getElementById("help-section");
    helpSection.classList.toggle("hidden");
}

// Función de validación
function validarFormulario() {
    const rut = document.getElementById('rut').value;
    const direccion = document.getElementById('direccion').value;
    const edad = parseInt(document.getElementById('edad').value);
    const numeroSerieCarnet = document.getElementById('numero-serie-carnet').value;

    const patronRut = /^[0-9]{1,8}-[0-9kK]{1}$/;

    // Validación del RUT
    if (!patronRut.test(rut)) {
        mostrarError('El RUT ingresado no es válido. Debe tener el formato 12345678-9.', 'rut');
        return false;
    }

    // Validación de la dirección
    if (direccion.trim() === "") {
        mostrarError('La dirección no puede estar vacía.', 'direccion');
        return false;
    }

    // Validación de la edad
    if (isNaN(edad) || edad < 18) {
        mostrarError('Debes tener al menos 18 años para postular.', 'edad');
        return false;
    }

    // Validación del número de serie del carnet
    if (numeroSerieCarnet.length < 8) {
        mostrarError('El número de serie del carnet es inválido.', 'numero-serie-carnet');
        return false;
    }

    return true; // Si todo es válido
}

// Mostrar mensajes de error en el formulario
function mostrarError(mensaje, campoId) {
    const campo = document.getElementById(campoId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = mensaje;

    // Revisar si ya existe un mensaje de error para el campo
    const errorExistente = campo.nextElementSibling;
    if (errorExistente && errorExistente.classList.contains('error-message')) {
        errorExistente.remove(); // Eliminar el mensaje existente si lo hay
    }

    campo.insertAdjacentElement('afterend', errorDiv);
    campo.focus();

    // Eliminar el mensaje de error después de unos segundos
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validacion-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Eliminar mensajes de error previos
        document.querySelectorAll('.error-message').forEach(el => el.remove());

        // Validar el formulario antes de enviarlo
        if (validarFormulario()) {
            alert('Validación exitosa');
            form.submit(); // Enviar formulario si todo está correcto
        }
    });
});
