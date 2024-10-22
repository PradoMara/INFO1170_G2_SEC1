document.addEventListener('DOMContentLoaded', function() {
    const offerSection = document.getElementById('offer-section');

    fetch('propuestas.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener las propuestas');
            }
            return response.json();
        })
        .then(data => {
            if (data.mensaje) {
                alert(data.mensaje); 
            } else {
                const offerHTML = data.map(offer => `
                    <h2>Nueva oferta de empleo en ${offer.empresa}</h2>
                    <p>${offer.descripcion}</p>
                    <p><strong>Fecha límite de postulación:</strong> ${offer.fecha_limite}</p>
                    <div class="buttons">
                        <button type="button" class="accept" data-id="${offer.id}">Aceptar</button>
                        <button type="button" class="reject" data-id="${offer.id}">Rechazar</button>
                    </div>
                `).join('');
                offerSection.innerHTML = offerHTML;

                document.querySelectorAll('.accept').forEach(button => {
                    button.addEventListener('click', () => handleAction(button.dataset.id, 'aceptar'));
                });
                document.querySelectorAll('.reject').forEach(button => {
                    button.addEventListener('click', () => handleAction(button.dataset.id, 'rechazar'));
                });
            }
        })
        .catch(error => {
            console.error('Error fetching propuestas:', error);
            alert('Hubo un problema al obtener las ofertas. Intenta nuevamente.');
        });

    function handleAction(propuestaId, accion) {
        const confirmation = accion === 'rechazar' ? confirm('¿Estás seguro de que deseas rechazar la oferta?') : true;
        if (!confirmation) return;

        fetch('acciones_propuesta.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ propuesta_id: propuestaId, accion: accion })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al procesar la acción');
            }
            return response.json();
        })
        .then(data => {
            alert(data.mensaje);
            offerSection.style.display = 'none'; 
        })
        .catch(error => {
            console.error('Error processing action:', error);
            alert('Hubo un problema al procesar tu acción. Intenta nuevamente.');
        });
    }
});
