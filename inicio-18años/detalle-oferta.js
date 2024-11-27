// simulacion no mas
const ofertas = [
    {
        id: 1,
        titulo: "Desarrollador Frontend",
        empresa: "ABC Corp",
        ubicacion: "Temuco",
        fecha: "2024-12-14",
        descripcion: "En ABC Corp buscamos un Desarrollador Frontend con experiencia en HTML, CSS y JavaScript para unirse a nuestro equipo.",
        requisitos: ["2 años de experiencia en desarrollo web", "Conocimientos en React o Angular"],
        beneficios: ["Trabajo remoto", "Seguro de salud"]
    },
    {
        id: 2,
        titulo: "Analista de Datos",
        empresa: "XYZ Data Solutions",
        ubicacion: "Santiago",  
        fecha: "2024-12-10",
        descripcion: "XYZ busca un Analista de Datos con experiencia en análisis de grandes volúmenes de datos.",
        requisitos: ["3 años de experiencia en análisis de datos", "Manejo avanzado de SQL y Python"],
        beneficios: ["Bono de desempeño", "Capacitaciones constantes"]
    }
];


const itemsPorPagina = 5;
let paginaActual = 1;

// Función para cargar las ofertas de la página actual
const cargarOfertas = () => {
    const ofertasContainer = document.getElementById("ofertas-destacadas");
    const inicio = (paginaActual - 1) * itemsPorPagina;
    const fin = inicio + itemsPorPagina;
    const ofertasPagina = ofertas.slice(inicio, fin);

    ofertasContainer.innerHTML = ""; // Limpiar las ofertas existentes

    // Generar ofertas para la página actual
    ofertasPagina.forEach(oferta => {
        const ofertaDiv = document.createElement("div");
        ofertaDiv.classList.add("tarjeta-oferta");
        ofertaDiv.innerHTML = `
            <h3 class="titulo-oferta">${oferta.titulo}</h3>
            <p class="empresa-oferta">${oferta.empresa}</p>
            <p class="ubicacion-oferta">${oferta.ubicacion}</p>
            <span class="fecha-publicacion">Publicado el ${oferta.fecha}</span>
            <a href="detalle-oferta.html?id=${oferta.id}" class="boton-ver-mas">Ver más</a>
        `;
        ofertasContainer.appendChild(ofertaDiv);
    });

    actualizarPaginacion();
};

// Función para actualizar la paginación
const actualizarPaginacion = () => {
    const paginationContainer = document.getElementById("pagination");
    const totalPaginas = Math.ceil(ofertas.length / itemsPorPagina);

    paginationContainer.innerHTML = ""; // Limpiar paginación anterior

    const crearBoton = (texto, pagina, clase = "") => {
        const li = document.createElement("li");
        li.className = `page-item ${clase}`;
        li.innerHTML = `<a class="page-link" href="#" onclick="irAPagina(${pagina})">${texto}</a>`;
        return li;
    };

    // Primer botón
    paginationContainer.appendChild(crearBoton("« Primero", 1, paginaActual === 1 ? "disabled" : ""));

    // Botón anterior
    paginationContainer.appendChild(crearBoton("‹ Anterior", paginaActual - 1, paginaActual === 1 ? "disabled" : ""));

    // Botones de número
    for (let i = 1; i <= totalPaginas; i++) {
        const activeClass = i === paginaActual ? "active" : "";
        paginationContainer.appendChild(crearBoton(i, i, activeClass));
    }

    // Botón siguiente
    paginationContainer.appendChild(crearBoton("Siguiente ›", paginaActual + 1, paginaActual === totalPaginas ? "disabled" : ""));

    // Último botón
    paginationContainer.appendChild(crearBoton("Última »", totalPaginas, paginaActual === totalPaginas ? "disabled" : ""));
};

// Función para cambiar de página
const irAPagina = (pagina) => {
    const totalPaginas = Math.ceil(ofertas.length / itemsPorPagina);
    if (pagina >= 1 && pagina <= totalPaginas) {
        paginaActual = pagina;
        cargarOfertas();
    }
};

// Cargar ofertas al cargar el DOM
document.addEventListener("DOMContentLoaded", cargarOfertas);



document.getElementById('guardar-comentarios').addEventListener('click', () => {
    const comentarios = document.getElementById('comentarios').value;
    if (comentarios) {
        alert(`Comentarios guardados: ${comentarios}`);
    } else {
        alert("Por favor, escribe un comentario antes de guardar.");
    }
});
