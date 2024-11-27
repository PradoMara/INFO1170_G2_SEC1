document.getElementById('feedback-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('feedback.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            const popup = document.getElementById('popup');
            const message = document.getElementById('popup-message');
            if (data.success) {
                message.textContent = '¡Gracias por tu feedback!';
            } else {
                message.textContent = 'Ocurrió un error. Intenta nuevamente.';
            }
            popup.style.display = 'block';
        })
        .catch(() => {
            const popup = document.getElementById('popup');
            const message = document.getElementById('popup-message');
            message.textContent = 'Error en la conexión. Intenta más tarde.';
            popup.style.display = 'block';
        });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
