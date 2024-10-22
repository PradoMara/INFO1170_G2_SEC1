document.getElementById("postulaciones-btn").addEventListener("click", function() {
    window.location.href = "postulaciones.html"; // Redirecciona a la página de postulaciones
});

document.getElementById("cv-btn").addEventListener("click", function() {
    window.location.href = "cv.html"; // Redirecciona a la página del cv
});

document.getElementById("perfil-btn").addEventListener("click", function() {
    window.location.href = "perfil.html"; // Redirecciona a la página del perfil
});
document.getElementById("cerrar-btn").addEventListener("click", function() {
    window.location.href = "cerrrar.html"; // Redirecciona a la página de inicio 
});
// para el buzon de notificaciones
document.addEventListener('DOMContentLoaded', () => {
    const notificacionesBtn = document.getElementById('notificaciones-btn');
    const notificacionesContainer = document.getElementById('notificaciones-container');

    // Función para cargar notificaciones desde otro archivo HTML
    const cargarNotificaciones = () => {
        fetch('../perfil-18-años/buzon-notificaciones.html')
            .then(response => response.text())
            .then(data => {
                notificacionesContainer.innerHTML = data;
                notificacionesContainer.classList.add('show');

                // Cerrar el buzón de notificaciones al hacer clic en el botón de cerrar
                const closeBtn = notificacionesContainer.querySelector('.close-btn');
                closeBtn.addEventListener('click', () => {
                    notificacionesContainer.classList.remove('show');
                });
            })
            .catch(error => console.error('Error al cargar las notificaciones:', error));
    };

    // Mostrar notificaciones al hacer clic en el icono de notificaciones
    notificacionesBtn.addEventListener('click', cargarNotificaciones);

    // Mostrar notificaciones al pasar el mouse sobre el icono (opcional)
    notificacionesBtn.addEventListener('mouseover', cargarNotificaciones);
});

document.addEventListener("DOMContentLoaded", () => {
    // Función para cargar ofertas destacadas   
    const cargarOfertasDestacadas = () => {
        fetch('get_ofertas.php?destacadas=true')
            .then(response => response.json())
            .then(data => {
                const ofertasContainer = document.getElementById('ofertas-destacadas');
                ofertasContainer.innerHTML = ''; // Limpiar antes de agregar nuevas ofertas

                if (data.length > 0) {
                    data.forEach(oferta => {
                        const ofertaElement = document.createElement('div');
                        ofertaElement.classList.add('tarjeta-oferta');
                        ofertaElement.innerHTML = `
                            <h3 class="titulo-oferta">${oferta.descripcion}</h3>
                            <p class="empresa-oferta">Empresa: ${oferta.empresa}</p>
                            <p class="ubicacion-oferta">Ubicación: ${oferta.ubicacion}</p>
                            <span class="fecha-publicacion">Publicado el ${oferta.fecha_publicacion}</span>
                            <a href="detalle-oferta.html?id=${oferta.id_Oferta}" class="boton-ver-mas">Ver más</a>
                        `;
                        ofertasContainer.appendChild(ofertaElement);
                    });
                } else {
                    ofertasContainer.innerHTML = '<p>No hay ofertas destacadas en este momento.</p>';
                }
            });
    };


    const buscarOfertas = (busqueda) => {
        fetch(`get_ofertas.php?busqueda=${busqueda}`)
            .then(response => response.json())
            .then(data => {
                const ofertasContainer = document.getElementById('ofertas-destacadas');
                ofertasContainer.innerHTML = ''; 

                if (data.length > 0) {
                    data.forEach(oferta => {
                        const ofertaElement = document.createElement('div');
                        ofertaElement.classList.add('tarjeta-oferta');
                        ofertaElement.innerHTML = `
                            <h3 class="titulo-oferta">${oferta.descripcion}</h3>
                            <p class="empresa-oferta">Empresa: ${oferta.empresa}</p>
                            <p class="ubicacion-oferta">Ubicación: ${oferta.ubicacion}</p>
                            <span class="fecha-publicacion">Publicado el ${oferta.fecha_publicacion}</span>
                            <a href="detalle-oferta.html?id=${oferta.id_Oferta}" class="boton-ver-mas">Ver más</a>
                        `;
                        ofertasContainer.appendChild(ofertaElement);
                    });
                } else {
                    ofertasContainer.innerHTML = '<p>No se encontraron ofertas.</p>';
                }
            });
    };

    
    document.getElementById('BuscadorForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const busqueda = document.getElementById('buscador').value;
        buscarOfertas(busqueda);
    });


    cargarOfertasDestacadas();
});
