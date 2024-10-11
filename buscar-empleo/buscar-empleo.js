// datos ttrabajo simulado 
const trabajos = [
    { titulo: "Desarrollador Web", ciudad: "Temuco", empresa: "Tech Company", tipo: "Tiempo Completo", fecha: "2023-09-01", categoria: "tecnologia" },
    { titulo: "Diseñador Gráfico", ciudad: "Santiago", empresa: "Creative Agency", tipo: "Freelance", fecha: "2023-09-15", categoria: "administracion" },
    { titulo: "Vendedor", ciudad: "Angol", empresa: "Retail Store", tipo: "Medio Tiempo", fecha: "2023-09-10", categoria: "ventas" },
    // ma trabajo
];

// Datos de las ciudades por provincia
const provincias = {
    malleco: ["Angol", "Collipulli", "Traiguén"],
    cautin: ["Temuco", "Villarrica", "Pucón", "Lautaro"]
};

// Actualizar las ciudades según la provincia seleccionada
document.getElementById('provincia').addEventListener('change', function() {
    const provinciaSeleccionada = this.value;
    const ciudadSelect = document.getElementById('ciudad');

    // Limpiar el dropdown de ciudades
    ciudadSelect.innerHTML = '<option value="todas">Todas las ciudades</option>';

    // Si se selecciona una provincia, mostrar las ciudades correspondientes
    if (provinciaSeleccionada !== 'todas') {
        const ciudades = provincias[provinciaSeleccionada];
        ciudades.sort(); // Ordenar alfabéticamente
        ciudades.forEach(ciudad => {
            const option = document.createElement('option');
            option.value = ciudad.toLowerCase();
            option.textContent = ciudad;
            ciudadSelect.appendChild(option);
        });
    }
});

// Función para mostrar los trabajos filtrados
function mostrarResultados(filtrados) {
    const listaResultados = document.getElementById('lista-resultados');
    const cantidadResultados = document.getElementById('cantidad-resultados');

    listaResultados.innerHTML = ''; // Limpiar resultados anteriores
    cantidadResultados.textContent = `Resultados encontrados: ${filtrados.length}`;

    if (filtrados.length === 0) {
        listaResultados.innerHTML = '<p>No se encontraron trabajos con los filtros aplicados.</p>';
    } else {
        filtrados.forEach(trabajo => {
            const div = document.createElement('div');
            div.classList.add('resultado-item');
            div.innerHTML = `
                <h3>${trabajo.titulo}</h3>
                <p>Ciudad: ${trabajo.ciudad}</p>
                <p>Empresa: ${trabajo.empresa}</p>
                <p>Tipo: ${trabajo.tipo}</p>
                <p>Fecha de Publicación: ${trabajo.fecha}</p>
                <p>Categoría: ${trabajo.categoria}</p>
            `;
            listaResultados.appendChild(div);
        });
    }
}

// Filtrar resultados en base a los filtros aplicados
function filtrarTrabajos() {
    const provincia = document.getElementById('provincia').value;
    const ciudad = document.getElementById('ciudad').value;
    const empresa = document.getElementById('empresa').value.toLowerCase();
    const tipo = document.getElementById('tipo').value;
    const fechaPublicacion = document.getElementById('fecha-publicacion').value;
    const categoria = document.getElementById('categoria').value;

    const filtrados = trabajos.filter(trabajo => {
        return (
            (provincia === 'todas' || provincias[provincia].map(c => c.toLowerCase()).includes(trabajo.ciudad.toLowerCase())) &&
            (ciudad === 'todas' || trabajo.ciudad.toLowerCase() === ciudad) &&
            (empresa === '' || trabajo.empresa.toLowerCase().includes(empresa)) &&
            (tipo === 'todos' || trabajo.tipo === tipo) &&
            (!fechaPublicacion || trabajo.fecha === fechaPublicacion) &&
            (categoria === 'todas' || trabajo.categoria === categoria)
        );
    });

    mostrarResultados(filtrados);
}

// Evento para el botón "Aplicar Filtros"
document.getElementById('aplicar-filtros').addEventListener('click', filtrarTrabajos);

// Evento para el buscador
document.getElementById('buscar-btn').addEventListener('click', () => {
    const busqueda = document.getElementById('busqueda').value.toLowerCase();
    const filtrados = trabajos.filter(trabajo => trabajo.titulo.toLowerCase().includes(busqueda) || trabajo.empresa.toLowerCase().includes(busqueda));
    
    mostrarResultados(filtrados);
});

document.addEventListener('DOMContentLoaded', () => {
    const notificacionesBtn = document.getElementById('notificaciones-btn');
    const notificacionesContainer = document.getElementById('notificaciones-container');

    // Función para cargar notificaciones desde otro archivo HTML
    const cargarNotificaciones = () => {
        fetch('buzon-notificaciones.html')
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

