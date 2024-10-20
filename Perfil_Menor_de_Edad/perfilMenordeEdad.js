document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');
    const nombre = document.getElementById('nombre');
    const edad = document.getElementById('edad');
    const ubicacion = document.getElementById('ubicacion');

    const mensaje = document.createElement('p');
    mensaje.id = 'mensaje-guardado';
    mensaje.style.color = 'green';
    mensaje.style.display = 'none';
    document.querySelector('.profile-info').appendChild(mensaje);

    editButton.addEventListener('click', function () {
        nombre.disabled = false;
        edad.disabled = false;
        ubicacion.disabled = false;

        saveButton.style.display = 'inline-block';
        editButton.style.display = 'none';
    });

    saveButton.addEventListener('click', function () {
        if (nombre.value === '' || ubicacion.value === '' || isNaN(edad.value) || edad.value <= 0) {
            alert('Por favor, ingrese datos válidos.');
            return;
        }

        nombre.disabled = true;
        edad.disabled = true;
        ubicacion.disabled = true;

        saveButton.style.display = 'none';
        editButton.style.display = 'inline-block';

        mensaje.textContent = 'Cambios guardados con éxito.';
        mensaje.style.display = 'block';

        setTimeout(() => {
            mensaje.style.display = 'none';
        }, 3000);

        console.log('Cambios guardados:', {
            nombre: nombre.value,
            edad: edad.value,
            ubicacion: ubicacion.value
        });
    });
});
