// Función para manejar el clic en los botones "Contactar"
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        const postulanteCard = e.target.closest('.postulante-card');
        const postulanteId = postulanteCard.getAttribute('data-id');

        // Mostrar el modal
        document.getElementById('modal').style.display = "block";
        document.getElementById('postulante_id').value = postulanteId;
    });
});

// Cerrar modal al hacer clic en el botón "cerrar"
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = "none";
});

// Cerrar modal al hacer clic fuera del modal
window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
};

// Función para cargar postulantes desde el servidor
function cargarPostulantes() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'cargar_postulantes.php', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const postulantes = JSON.parse(this.responseText);

            let output = '';
            postulantes.forEach(postulante => {
                output += `
                    <div class="postulante-card" data-id="${postulante.id}">
                        <h3>${postulante.nombre}</h3>
                        <p><strong>Profesión:</strong> ${postulante.profesion}</p>
                        <p><strong>Ubicación:</strong> ${postulante.ubicacion}</p>
                        <p><strong>Experiencia:</strong> ${postulante.experiencia} años</p>
                        
                        <!-- Sistema de calificación -->
                        <div class="rating">
                            <span data-value="5">★</span>
                            <span data-value="4">★</span>
                            <span data-value="3">★</span>
                            <span data-value="2">★</span>
                            <span data-value="1">★</span>
                        </div>
                        <p class="rating-average">Promedio: ${postulante.promedio_calificacion || 'No calificado'}</p>
                        
                        <button>Contactar</button>
                    </div>
                `;
            });

            document.getElementById('postulantes-container').innerHTML = output;

            // Agregar eventos a las estrellas después de cargar los postulantes
            agregarEventosEstrellas();
        } else {
            document.getElementById('postulantes-container').innerHTML = '<p>Error al cargar los postulantes</p>';
        }
    };
    xhr.send();
}

// Función para agregar eventos a las estrellas de calificación
function agregarEventosEstrellas() {
    document.querySelectorAll('.rating span').forEach(star => {
        star.addEventListener('click', (e) => {
            const ratingValue = e.target.dataset.value; // Obtener el valor de la estrella clicada
            const postulanteCard = e.target.closest('.postulante-card');
            const idPostulante = postulanteCard.getAttribute('data-id');

            // Enviar la calificación al servidor
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'guardar_calificacion.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function () {
                if (this.status === 200) {
                    const response = JSON.parse(this.responseText);
                    alert(response.message || '¡Calificación guardada con éxito!');

                    // Opcional: Recargar calificaciones promedio después de guardar
                    cargarPromediosCalificaciones();
                } else {
                    alert('Error al guardar la calificación.');
                }
            };
            xhr.send(`id_postulante=${idPostulante}&id_empresa=1&calificacion=${ratingValue}`);
        });
    });
}

// Función para cargar promedios de calificaciones desde el servidor
function cargarPromediosCalificaciones() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'cargar_calificaciones.php', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const promedios = JSON.parse(this.responseText);

            // Actualizar los promedios en las tarjetas de los postulantes
            document.querySelectorAll('.postulante-card').forEach(card => {
                const idPostulante = card.getAttribute('data-id');
                if (promedios[idPostulante]) {
                    card.querySelector('.rating-average').textContent = `Promedio: ${promedios[idPostulante].toFixed(1)}`;
                }
            });
        } else {
            console.error('Error al cargar los promedios de calificación.');
        }
    };
    xhr.send();
}

// Llamar a la función para cargar postulantes al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarPostulantes();
});
