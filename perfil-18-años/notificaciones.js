document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.getElementById('close-notificaciones-btn');
    const notificacionesList = document.getElementById('notificaciones-list');

    closeBtn.addEventListener('click', function () {
        document.getElementById('notificaciones-container').style.display = 'none';
    });

    function cargarNotificaciones() {
        fetch('notificaciones.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ accion: 'obtener' })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success && data.notificaciones.length > 0) {
                data.notificaciones.forEach(notificacion => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <h4>${notificacion.titulo}</h4>
                        <p>${notificacion.mensaje}</p>
                        <button onclick="marcarComoLeida(${notificacion.id})">Marcar como leída</button>
                    `;
                    notificacionesList.appendChild(li);
                });
            } else {
                notificacionesList.innerHTML = "<li>No hay notificaciones</li>";
            }
        })
        .catch(error => console.error('Error al cargar las notificaciones:', error));
    }

    cargarNotificaciones(); 
});

function marcarComoLeida(id) {
    fetch('notificaciones.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ id: id, accion: 'marcar_leida' })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.querySelector(`li[data-id="${id}"]`).style.backgroundColor = '#444444';
        } else {
            console.error('Error al marcar la notificación como leída.');
        }
    })
    .catch(error => console.error('Error:', error));
}
