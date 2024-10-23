document.addEventListener('DOMContentLoaded', function () {
    const editarPerfilBtn = document.getElementById('editar-perfil');
    const guardarPerfilBtn = document.getElementById('guardar-perfil');

    const nombreField = document.getElementById('nombre');
    const telefonoField = document.getElementById('telefono');
    const correoField = document.getElementById('correo');
    const acercaDeField = document.getElementById('acerca-de');
    const experienciaField = document.getElementById('experiencia');
    const educacionField = document.getElementById('educacion');

    fetch('obtenerPerfilMayor.php?id=1')  
        .then(response => response.json())
        .then(data => {
            nombreField.textContent = data.nombre;
            telefonoField.textContent = `Teléfono: ${data.telefono}`;
            correoField.textContent = `Correo: ${data.correo}`;
            acercaDeField.textContent = `Acerca de mí: ${data.acerca_de}`;
            experienciaField.value = data.experiencia;
            educacionField.value = data.educacion;
        })
        .catch(error => console.error('Error al cargar el perfil:', error));

    editarPerfilBtn.addEventListener('click', function () {
        telefonoField.contentEditable = true;
        correoField.contentEditable = true;
        acercaDeField.contentEditable = true;
        experienciaField.disabled = false;
        educacionField.disabled = false;

        guardarPerfilBtn.style.display = 'block';
        editarPerfilBtn.style.display = 'none';
    });

    guardarPerfilBtn.addEventListener('click', function () {
        const updatedData = {
            telefono: telefonoField.textContent.replace("Teléfono: ", ""),
            correo: correoField.textContent.replace("Correo: ", ""),
            acercaDe: acercaDeField.textContent.replace("Acerca de mí: ", ""),
            experiencia: experienciaField.value,
            educacion: educacionField.value
        };

        fetch('actualizarPerfilMayor.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Perfil actualizado exitosamente.');
            } else {
                alert('Error al actualizar el perfil.');
            }
            telefonoField.contentEditable = false;
            correoField.contentEditable = false;
            acercaDeField.contentEditable = false;
            experienciaField.disabled = true;
            educacionField.disabled = true;

            guardarPerfilBtn.style.display = 'none';
            editarPerfilBtn.style.display = 'block';
        })
        .catch(error => {
            console.error('Error al guardar los cambios:', error);
        });
    });
});
