document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        const postulanteCard = e.target.closest('.postulante-card');
        const postulanteId = postulanteCard.getAttribute('data-id');

        // Mostrar el modal
        document.getElementById('modal').style.display = "block";
        document.getElementById('postulante_id').value = postulanteId;
    });
});

// Cerrar modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});

// Cerrar modal al hacer clic fuera del modal
window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
};
