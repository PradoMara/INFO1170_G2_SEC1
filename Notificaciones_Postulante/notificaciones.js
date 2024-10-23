let notificationToDelete = null;

function markAsRead(id) {
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
            const notification = document.getElementById(id);
            notification.style.backgroundColor = '#444444'; 
            notification.style.color = '#ffffff';
        } else {
            console.error('Error al marcar como leída');
        }
    })
    .catch(error => console.error('Error:', error));
}

function deleteNotification(id) {
    notificationToDelete = document.getElementById(id);
    const modal = document.getElementById("modal");
    modal.style.display = "flex";  
}

function confirmDelete() {
    if (notificationToDelete) {
        fetch('notificaciones.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ id: notificationToDelete.id, accion: 'eliminar' })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                notificationToDelete.remove();
                notificationToDelete = null;
                closeModal();
            } else {
                console.error('Error al eliminar la notificación');
            }
        })
        .catch(error => console.error('Error:', error));
    }
}

function cancelDelete() {
    notificationToDelete = null;
    closeModal();  
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";  
}
