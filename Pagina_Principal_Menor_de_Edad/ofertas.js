document.addEventListener('DOMContentLoaded', function() {
    cargarOfertas();

    function cargarOfertas() {
        fetch('obtener_ofertas.php')
            .then(response => response.json())
            .then(data => {
                const jobContainer = document.getElementById('job-container');
                jobContainer.innerHTML = ''; 

                if (data.length > 0) {
                    data.forEach(oferta => {
                        const jobCard = document.createElement('div');
                        jobCard.classList.add('job-card');
                        jobCard.innerHTML = `
                            <h3>${oferta.titulo}</h3>
                            <p>${oferta.empresa}</p>
                            <p>${oferta.ubicacion}</p>
                            <p>Publicado el ${oferta.fecha_publicacion}</p>
                            <button class="job-button">Ver más</button>
                        `;
                        jobContainer.appendChild(jobCard);
                    });
                } else {
                    jobContainer.innerHTML = '<p>No hay ofertas disponibles en este momento.</p>';
                }
            })
            .catch(error => console.error('Error al cargar las ofertas:', error));
    }
});
