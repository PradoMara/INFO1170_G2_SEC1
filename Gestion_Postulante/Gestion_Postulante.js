document.addEventListener('DOMContentLoaded', () => {
    const filtroEdad = document.getElementById('filtro-edad');
    const filtroRecientes = document.getElementById('filtro-recientes');
    const filtroAbecedario = document.getElementById('filtro-abecedario');
    const busqueda = document.getElementById('busqueda');
    const listaPostulantes = document.getElementById('lista-postulantes');

    const postulantesOriginales = Array.from(listaPostulantes.getElementsByClassName('postulante'));

    function aplicarFiltros() {
        let postulantesFiltrados = postulantesOriginales.slice();

        const edadSeleccionada = filtroEdad.value;
        const recientesSeleccionado = filtroRecientes.value;
        const abecedarioSeleccionado = filtroAbecedario.value;
        const textoBusqueda = busqueda.value.toLowerCase();

        if (textoBusqueda) {
            postulantesFiltrados = postulantesFiltrados.filter(postulante => {
                const nombre = postulante.querySelector('.nombre-postulante').textContent.toLowerCase();
                return nombre.includes(textoBusqueda);
            });
        }

        if (edadSeleccionada) {
            postulantesFiltrados = postulantesFiltrados.filter(postulante => {
                const edad = parseInt(postulante.getAttribute('data-edad'), 10);
                const [minEdad, maxEdad] = edadSeleccionada.split('-').map(Number);
                return edad >= minEdad && (maxEdad ? edad <= maxEdad : true);
            });
        }

        if (recientesSeleccionado) {
            const fechaLimite = new Date();
            fechaLimite.setMonth(fechaLimite.getMonth() - recientesSeleccionado);
            postulantesFiltrados = postulantesFiltrados.filter(postulante => {
                const fecha = new Date(postulante.getAttribute('data-fecha'));
                return fecha >= fechaLimite;
            });
        }

        if (abecedarioSeleccionado) {
            postulantesFiltrados.sort((a, b) => {
                const nombreA = a.querySelector('.nombre-postulante').textContent;
                const nombreB = b.querySelector('.nombre-postulante').textContent;
                return abecedarioSeleccionado === 'A-Z' ? nombreA.localeCompare(nombreB) : nombreB.localeCompare(nombreA);
            });
        }

        listaPostulantes.innerHTML = '';
        postulantesFiltrados.forEach(postulante => listaPostulantes.appendChild(postulante));
    }

    filtroEdad.addEventListener('change', aplicarFiltros);
    filtroRecientes.addEventListener('change', aplicarFiltros);
    filtroAbecedario.addEventListener('change', aplicarFiltros);
    busqueda.addEventListener('input', aplicarFiltros);

    aplicarFiltros();
});

document.addEventListener('DOMContentLoaded', () => {
    const btnVolver = document.getElementById('btn-volver');
    if (btnVolver) {
        btnVolver.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'Pagina_Admin.html'; 
        });
    }
});

/*juntar con otra pagina
function verDetalles(nombre) {
    alert('Mostrando detalles de: ' + nombre);
}

function editarPostulante(nombre) {
    alert('Editando postulante: ' + nombre);
}*/
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
  
  function validarPostulante(accion, idPostulante) {
    showPopup(`¿Estás seguro de ${accion === 'aceptar' ? 'aceptar' : 'rechazar'} a este postulante?`, () => {
      const datos = new FormData();
      datos.append('accion', accion);
      datos.append('idPostulante', idPostulante);
  
      fetch('obtenerDetallesValidacion.php', {
        method: 'POST',
        body: datos,
      })
        .then((response) => {
          if (!response.ok) throw new Error('Error al procesar la solicitud');
          return response.text();
        })
        .then(() => {
          alert(`Postulante ${accion === 'aceptar' ? 'aceptado' : 'rechazado'} correctamente.`);
          cargarPostulantes();
        })
        .catch((error) => {
          console.error('Error al actualizar el estado del postulante:', error);
          alert('Ocurrió un error. Revisa la consola.');
        });
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    cargarPostulantes();
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
  
  function gestionarPostulante(accion, idPostulante) {
    showPopup(`¿Estás seguro de ${accion === 'eliminar' ? 'eliminar' : 'aprobar'} a este postulante?`, () => {
      const datos = new FormData();
      datos.append('accion', accion);
      datos.append('idPostulante', idPostulante);
  
      fetch('conexion.php', {
        method: 'POST',
        body: datos,
      })
        .then((response) => {
          if (!response.ok) throw new Error('Error al procesar la solicitud');
          return response.text();
        })
        .then(() => {
          alert(`Postulante ${accion === 'eliminar' ? 'eliminado' : 'aprobado'} correctamente.`);
          cargarPostulantes();
        })
        .catch((error) => {
          console.error('Error al gestionar al postulante:', error);
          alert('Ocurrió un error. Revisa la consola.');
        });
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    cargarPostulantes();
  });
  