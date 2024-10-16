document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioValidacion');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Prevenir el envío inicial del formulario hasta que se validen todos los campos
        let esValido = true;

        // Validación Razón Social
        const inputRazonSocial = document.getElementById('razonSocial');
        const errorRazonSocial = document.getElementById('errorRazonSocial');
        if (inputRazonSocial.value.trim() === '') {
            errorRazonSocial.textContent = 'La razón social es requerida.';
            errorRazonSocial.style.display = 'block';
            esValido = false;
        } else {
            errorRazonSocial.style.display = 'none';
        }

        // Validación Número de Registro Tributario
        const inputRegistroTributario = document.getElementById('registroTributario');
        const errorRegistroTributario = document.getElementById('errorRegistroTributario');
        if (inputRegistroTributario.value.trim() === '') {
            errorRegistroTributario.textContent = 'El número de registro tributario es requerido.';
            errorRegistroTributario.style.display = 'block';
            esValido = false;
        } else {
            errorRegistroTributario.style.display = 'none';
        }

        // Validación Dirección Fiscal/Social
        const inputDireccionFiscal = document.getElementById('direccionFiscal');
        const errorDireccionFiscal = document.getElementById('errorDireccionFiscal');
        if (inputDireccionFiscal.value.trim() === '') {
            errorDireccionFiscal.textContent = 'La dirección fiscal es requerida.';
            errorDireccionFiscal.style.display = 'block';
            esValido = false;
        } else {
            errorDireccionFiscal.style.display = 'none';
        }

        // Validación Correo Electrónico Corporativo
        const inputEmailEmpresa = document.getElementById('emailEmpresa');
        const errorEmailEmpresa = document.getElementById('errorEmailEmpresa');
        const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!patronCorreo.test(inputEmailEmpresa.value.trim())) {
            errorEmailEmpresa.textContent = 'El correo electrónico corporativo no es válido.';
            errorEmailEmpresa.style.display = 'block';
            esValido = false;
        } else {
            errorEmailEmpresa.style.display = 'none';
        }

        // Validación de archivo (logo o documento)
        const inputLogoEmpresa = document.getElementById('logoEmpresa');
        const errorLogoEmpresa = document.getElementById('errorLogoEmpresa');
        if (inputLogoEmpresa.files.length === 0) {
            errorLogoEmpresa.textContent = 'Es necesario subir un logo o documento de verificación.';
            errorLogoEmpresa.style.display = 'block';
            esValido = false;
        } else {
            errorLogoEmpresa.style.display = 'none';
        }

        // Validación final y aviso
        if (esValido) {
            alert('Formulario enviado correctamente.');
            formulario.submit(); // Enviar el formulario si todo es válido
        } else {
            alert('Por favor, complete todos los campos obligatorios antes de enviar.');
        }
    });
});