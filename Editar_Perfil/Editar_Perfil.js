document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-editar-perfil');
    const btnCancelar = document.querySelector('.btn-cancelar');
    
    const params = new URLSearchParams(window.location.search);
    const idUsuario = params.get('id');

    if (idUsuario) {
        fetch(`Perfil_Admin.php?id=${idUsuario}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('nombre').value = data.nombre;
                document.getElementById('correo').value = data.correo;
                document.getElementById('telefono').value = data.telefono;
                document.getElementById('acerca_de').value = data.acerca_de;
                document.getElementById('experiencia').value = data.experiencia;
                document.getElementById('educacion').value = data.educacion;
            })
            .catch(error => console.error('Error al cargar el perfil:', error));
    }

    btnCancelar.addEventListener('click', function() {
        window.location.href = `Perfil_Admin.html?id=${idUsuario}`;
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(`Editar_Perfil.php?id=${idUsuario}`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('Perfil actualizado con éxito.');
            window.location.href = `Perfil_Admin.html?id=${idUsuario}`;  
        })
        .catch(error => console.error('Error al actualizar el perfil:', error));
    });
});
