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
