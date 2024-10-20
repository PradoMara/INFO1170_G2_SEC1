document.addEventListener('DOMContentLoaded', function() {
    const acceptBtn = document.getElementById('accept-btn');
    const rejectBtn = document.getElementById('reject-btn');
    const offerSection = document.getElementById('offer-section');

    acceptBtn.addEventListener('click', function() {
        alert('Has aceptado la oferta de empleo.');
        offerSection.style.display = 'none';
    });

    rejectBtn.addEventListener('click', function() {
        const confirmation = confirm('¿Estás seguro de que deseas rechazar la oferta?');
        if (confirmation) {
            alert('Has rechazado la oferta de empleo.');
            offerSection.style.display = 'none';
        }
    });
});
