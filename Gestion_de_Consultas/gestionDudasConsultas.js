document.addEventListener('DOMContentLoaded', function () {
    cargarConsultas();

    function cargarConsultas() {
        fetch('obtenerConsultas.php')
            .then(response => response.json())
            .then(data => {
                const contenedor = document.querySelector('.consulta-lista');
                contenedor.innerHTML = ''; 

                data.forEach(consulta => {
                    const consultaDiv = document.createElement('div');
                    consultaDiv.classList.add('consulta');
                    consultaDiv.innerHTML = `
                        <div class="icon">
                            <img src="../Iconos/ICONO-PERFIL.png" alt="Usuario">
                        </div>
                        <div class="details">
                            <h3>${consulta.nombre}</h3>
                            <p>Email: ${consulta.correo}</p>
                            <p>Consulta: ${consulta.mensaje}</p>
                        </div>
                        <div class="buttons">
                            <button class="btn-ver" data-id="${consulta.id}">Ver Detalles</button>
                        </div>
                    `;
                    contenedor.appendChild(consultaDiv);
                });

                agregarEventosBotones();
            })
            .catch(error => console.error('Error al cargar las consultas:', error));
    }

    function agregarEventosBotones() {
        const btnVerDetalles = document.querySelectorAll('.btn-ver');
        btnVerDetalles.forEach(boton => {
            boton.addEventListener('click', function () {
                const consultaId = this.getAttribute('data-id');
                window.location.href = `verDetalleConsulta.html?id=${consultaId}`;
            });
        });
    }
});
