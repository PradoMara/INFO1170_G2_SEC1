document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioValidacion');
    const mensajeDiv = document.getElementById('mensaje');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); 

        let esValido = true;

        const razonSocial = document.getElementById('razonSocial').value;
        const registroTributario = document.getElementById('registroTributario').value;
        const direccionFiscal = document.getElementById('direccionFiscal').value;
        const emailEmpresa = document.getElementById('emailEmpresa').value;

        // Validar campos
        if (razonSocial.trim() === '') {
            document.getElementById('errorRazonSocial').textContent = 'La razón social es requerida.';
            esValido = false;
        }
        if (registroTributario.trim() === '') {
            document.getElementById('errorRegistroTributario').textContent = 'El número de registro tributario es requerido.';
            esValido = false;
        }
        if (direccionFiscal.trim() === '') {
            document.getElementById('errorDireccionFiscal').textContent = 'La dirección fiscal es requerida.';
            esValido = false;
        }
        const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!patronCorreo.test(emailEmpresa.trim())) {
            document.getElementById('errorEmailEmpresa').textContent = 'El correo electrónico corporativo no es válido.';
            esValido = false;
        }

        if (esValido) {
            const formData = new FormData();
            formData.append('razonSocial', razonSocial);
            formData.append('registroTributario', registroTributario);
            formData.append('direccionFiscal', direccionFiscal);
            formData.append('emailEmpresa', emailEmpresa);

            fetch('Validacion_Empresa.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                mensajeDiv.style.display = 'block';
                mensajeDiv.textContent = data; 
            })
            .catch(error => {
                mensajeDiv.style.display = 'block';
                mensajeDiv.textContent = 'Ocurrió un error al enviar los datos: ' + error.message;
                console.error('Error al enviar los datos:', error);
            });
        } else {
            mensajeDiv.style.display = 'block';
            mensajeDiv.textContent = 'Por favor, complete todos los campos obligatorios antes de enviar.';
        }
    });
});
