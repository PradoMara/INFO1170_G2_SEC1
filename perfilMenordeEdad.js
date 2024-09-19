document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');
    const nombre = document.getElementById('nombre');
    const edad = document.getElementById('edad');
    const ubicacion = document.getElementById('ubicacion');

    editButton.addEventListener('click', function () {
        nombre.disabled = false;
        edad.disabled = false;
        ubicacion.disabled = false;

        saveButton.style.display = 'inline-block';
        editButton.style.display = 'none';
    });

    saveButton.addEventListener('click', function () {
        nombre.disabled = true;
        edad.disabled = true;
        ubicacion.disabled = true;

        saveButton.style.display = 'none';
        editButton.style.display = 'inline-block';

        console.log('Cambios guardados:', {
            nombre: nombre.value,
            edad: edad.value,
            ubicacion: ubicacion.value
        });
    });
});
