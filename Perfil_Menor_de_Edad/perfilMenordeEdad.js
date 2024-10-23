document.addEventListener('DOMContentLoaded', function () {
    const editButton = document.getElementById('editButton');
    const saveButton = document.getElementById('saveButton');
    const nombre = document.getElementById('nombre');
    const edad = document.getElementById('edad');
    const ubicacion = document.getElementById('ubicacion');
    const acercaDeMi = document.getElementById('acerca_de_mi');
    const habilidades = document.getElementById('habilidades');
    const experiencia = document.getElementById('experiencia');
    const educacion = document.getElementById('educacion');
    const actividadesExtracurriculares = document.getElementById('actividades_extracurriculares');

    function cargarDatosPerfil(id_postulante) {
        fetch(`perfilMenorDeEdad.php?id=${id_postulante}`)
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    nombre.value = data.nombre;
                    edad.value = data.edad;
                    ubicacion.value = data.ubicacion;
                    acercaDeMi.value = data.acerca_de_mi;
                    habilidades.value = data.habilidades;
                    experiencia.value = data.experiencia;
                    educacion.value = data.educacion;
                    actividadesExtracurriculares.value = data.actividades_extracurriculares;
                } else {
                    console.error(data.error);
                }
            })
            .catch(error => console.error('Error al cargar los datos:', error));
    }

    const id_postulante = 1;
    cargarDatosPerfil(id_postulante);

    editButton.addEventListener('click', function () {
        nombre.disabled = false;
        edad.disabled = false;
        ubicacion.disabled = false;
        acercaDeMi.disabled = false;
        habilidades.disabled = false;
        experiencia.disabled = false;
        educacion.disabled = false;
        actividadesExtracurriculares.disabled = false;

        saveButton.style.display = 'inline-block';
        editButton.style.display = 'none';
    });

    saveButton.addEventListener('click', function () {
        const formData = new FormData();
        formData.append('id', id_postulante);  
        formData.append('nombre', nombre.value);
        formData.append('edad', edad.value);
        formData.append('ubicacion', ubicacion.value);
        formData.append('acerca_de_mi', acercaDeMi.value);
        formData.append('habilidades', habilidades.value);
        formData.append('experiencia', experiencia.value);
        formData.append('educacion', educacion.value);
        formData.append('actividades_extracurriculares', actividadesExtracurriculares.value);

        fetch('actualizarPerfilMenorDeEdad.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log('Perfil actualizado:', data);
            alert('Cambios guardados correctamente');
        })
        .catch(error => {
            console.error('Error al actualizar el perfil:', error);
            alert('Hubo un error al guardar los cambios.');
        });

        nombre.disabled = true;
        edad.disabled = true;
        ubicacion.disabled = true;
        acercaDeMi.disabled = true;
        habilidades.disabled = true;
        experiencia.disabled = true;
        educacion.disabled = true;
        actividadesExtracurriculares.disabled = true;

        saveButton.style.display = 'none';
        editButton.style.display = 'inline-block';
    });
});
