let notificationToDelete = null;

function markAsRead(id) {
    const notification = document.getElementById(id);
    notification.style.backgroundColor = '#e6e6e6';
    notification.style.color = '#7a7a7a';
}

function deleteNotification(id) {
    notificationToDelete = document.getElementById(id);
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}

function confirmDelete() {
    if (notificationToDelete) {
        notificationToDelete.remove();
        notificationToDelete = null;
        closeModal();
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
