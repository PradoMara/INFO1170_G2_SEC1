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
function showPopup(message, onConfirm) {
    const popup = document.getElementById('confirmationPopup');
    const messageElement = document.getElementById('popupMessage');
    const confirmButton = document.getElementById('confirmButton');
    const cancelButton = document.getElementById('cancelButton');
  
    messageElement.textContent = message;
    popup.style.display = 'block';
  
    confirmButton.onclick = () => {
      popup.style.display = 'none';
      if (onConfirm) onConfirm();
    };
  
    cancelButton.onclick = () => {
      popup.style.display = 'none';
    };
  }
  
  function actualizarEstadoConsulta(idConsulta, nuevoEstado) {
    showPopup(`¿Estás seguro de cambiar el estado de esta consulta a "${nuevoEstado}"?`, () => {
      const datos = new FormData();
      datos.append('idConsulta', idConsulta);
      datos.append('nuevoEstado', nuevoEstado);
  
      fetch('actualizarEstadoConsulta.php', {
        method: 'POST',
        body: datos,
      })
        .then((response) => {
          if (!response.ok) throw new Error('Error al procesar la solicitud');
          return response.text();
        })
        .then(() => {
          alert(`Estado de la consulta actualizado a "${nuevoEstado}" correctamente.`);
          cargarConsultas();
        })
        .catch((error) => {
          console.error('Error al actualizar el estado de la consulta:', error);
          alert('Ocurrió un error. Revisa la consola.');
        });
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    cargarConsultas();
  });
  