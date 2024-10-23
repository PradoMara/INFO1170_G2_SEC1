document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const idUsuario = params.get('id');

    if (idUsuario) {
        fetch(`obtenerPerfilAdmin.php?id=${idUsuario}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('nombre-completo').textContent = data.nombre;
                document.getElementById('correo-admin').textContent = data.correo;
                document.getElementById('nombre-usuario').textContent = data.nombre;  
                document.getElementById('nombre-detalle').textContent = data.nombre;
                document.getElementById('correo-detalle').textContent = data.correo;
                document.getElementById('rol-detalle').textContent = data.rol;
                document.getElementById('telefono-detalle').textContent = data.telefono;
                document.getElementById('acerca-detalle').textContent = data.acerca_de;
                document.getElementById('experiencia-detalle').textContent = data.experiencia;
                document.getElementById('educacion-detalle').textContent = data.educacion;
            })
            .catch(error => console.error('Error al cargar el perfil:', error));
    }

    document.querySelector('.btn-editar').addEventListener('click', function() {
        window.location.href = `Editar_Perfil.html?id=${idUsuario}`;
    });

    document.querySelector('.btn-password').addEventListener('click', function() {
        window.location.href = 'cambiar_contraseña.html';
    });

    document.querySelector('.btn-logout').addEventListener('click', function() {
        window.location.href = 'Pagina_Admin.html';
    });
});
