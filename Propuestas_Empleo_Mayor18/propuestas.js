document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('accept-btn');
    const rejectBtn = document.getElementById('reject-btn');
    const offerSection = document.getElementById('offer-section');

    function handleAction(accion) {
        const propuestaId = offerSection.dataset.id; 

        if (accion === 'rechazar') {
            const confirmation = confirm('¿Estás seguro de que deseas rechazar la oferta?');
            if (!confirmation) {
                return; 
            }
        }

        fetch('acciones_propuesta.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ propuesta_id: propuestaId, accion: accion })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al procesar la solicitud');
            }
            return response.json();
        })
        .then(data => {
            alert(data.mensaje);
            offerSection.style.display = 'none'; 
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema al procesar tu solicitud. Intenta nuevamente.');
        });
    }

    acceptBtn.addEventListener('click', function() {
        handleAction('aceptar');
    });

    rejectBtn.addEventListener('click', function() {
        handleAction('rechazar');
    });
});
