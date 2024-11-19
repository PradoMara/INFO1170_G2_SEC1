document.addEventListener('DOMContentLoaded', () => {
    const archivoInput = document.getElementById('archivo');
    const permisoInput = document.getElementById('permiso');
    const vistaPreviaArchivo = document.getElementById('vistaPreviaArchivo');
    const vistaPreviaPermiso = document.getElementById('vistaPreviaPermiso');
    const respuestaElemento = document.getElementById('respuesta');
    const form = document.getElementById('formValidacion');

    const mostrarVistaPrevia = (input, contenedor) => {
        const archivo = input.files[0];
        contenedor.innerHTML = '';

        if (archivo) {
            if (archivo.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    contenedor.innerHTML = `
                        <img src="${e.target.result}" alt="Archivo seleccionado" style="max-width: 100%; height: auto; border-radius: 5px;">
                    `;
                };
                reader.readAsDataURL(archivo);
            } else if (archivo.type === 'application/pdf') {
                contenedor.innerHTML = `
                    <p>Archivo PDF seleccionado: <strong>${archivo.name}</strong></p>
                `;
            } else {
                contenedor.innerHTML = `
                    <p>Archivo seleccionado: <strong>${archivo.name}</strong></p>
                `;
            }
        }
    };

    archivoInput.addEventListener('change', () => {
        mostrarVistaPrevia(archivoInput, vistaPreviaArchivo);
    });

    permisoInput.addEventListener('change', () => {
        mostrarVistaPrevia(permisoInput, vistaPreviaPermiso);
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        try {
            const respuesta = await fetch('Validacion_Menor18.php', {
                method: 'POST',
                body: formData,
            });

            const resultado = await respuesta.json();
            respuestaElemento.textContent = resultado.message;
            respuestaElemento.style.color = resultado.success ? 'green' : 'red';
        } catch (error) {
            respuestaElemento.textContent = 'Ocurrió un error inesperado.';
            respuestaElemento.style.color = 'red';
            console.error(error);
        }
    });
});
