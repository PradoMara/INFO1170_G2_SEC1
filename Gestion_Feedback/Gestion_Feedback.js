document.addEventListener('DOMContentLoaded', function () {
    const feedbackLista = document.getElementById('feedback-lista');

    fetch('obtener_feedback.php')
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                feedbackLista.innerHTML = ''; 
                data.forEach(feedback => {
                    const feedbackItem = document.createElement('div');
                    feedbackItem.classList.add('feedback-item');

                    feedbackItem.innerHTML = `
                        <h4><i class="fas fa-user"></i> Usuario: ${feedback.user || 'Anónimo'}</h4>
                        <p><strong>Calificación:</strong> ${feedback.rating} estrellas</p>
                        <p><strong>Comentario:</strong> ${feedback.comments}</p>
                        <small>Fecha: ${feedback.created_at}</small>
                    `;
                    feedbackLista.appendChild(feedbackItem);
                });
            } else {
                feedbackLista.innerHTML = '<p>No hay feedback disponible.</p>';
            }
        })
        .catch(error => {
            console.error('Error al cargar el feedback:', error);
            feedbackLista.innerHTML = '<p>Error al cargar el feedback. Intenta más tarde.</p>';
        });
});
