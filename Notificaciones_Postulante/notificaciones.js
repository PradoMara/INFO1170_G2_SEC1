let notificationToDelete = null;

// Filtrar notificaciones
document.querySelectorAll('.filtro').forEach(filtro => {
    filtro.addEventListener('click', () => {
        const tipoFiltro = filtro.getAttribute('data-filtro');
        const notificaciones = document.querySelectorAll('.notification');

        notificaciones.forEach(notificacion => {
            const tipo = notificacion.getAttribute('data-tipo');
            const leida = notificacion.getAttribute('data-leida') === 'true';

            if (
                tipoFiltro === 'todas' ||
                (tipoFiltro === 'leidas' && leida) ||
                (tipoFiltro === 'no-leidas' && !leida) ||
                tipoFiltro === tipo
            ) {
                notificacion.style.display = 'block';
            } else {
                notificacion.style.display = 'none';
            }
        });
    });
});

// Marcar una notificación como leída
function markAsRead(id) {
    fetch('notificaciones.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ id: id, accion: 'marcar_leida' }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                const notification = document.getElementById(id);
                notification.setAttribute('data-leida', 'true');
                notification.style.backgroundColor = '#444444'; // Cambiar color para indicar que está leída
                notification.style.color = '#ffffff';
            } else {
                console.error('Error al marcar como leída');
            }
        })
        .catch(error => console.error('Error:', error));
}

// Borrar una notificación
function deleteNotification(id) {
    notificationToDelete = document.getElementById(id);
    const modal = document.getElementById("modal");
    modal.style.display = "flex";  
}

// Confirmar la eliminación de una notificación
function confirmDelete() {
    if (notificationToDelete) {
        fetch('notificaciones.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ id: notificationToDelete.id, accion: 'eliminar' }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    notificationToDelete.remove(); // Eliminar de la interfaz
                    notificationToDelete = null;
                    closeModal();
                } else {
                    console.error('Error al eliminar la notificación');
                }
            })
            .catch(error => console.error('Error:', error));
    }
}

// Cancelar la eliminación
function cancelDelete() {
    notificationToDelete = null;
    closeModal();  
}

// Cerrar el modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";  
}
