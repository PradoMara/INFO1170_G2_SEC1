document.getElementById("btn-volver").addEventListener("click", function() {
    window.location.href = "Pagina_Admin.html"; 
});

function verDetalles(nombre) {
    alert("Detalles de " + nombre);
}

function aprobarValidacion(nombre) {
    alert("Validación de " + nombre + " aprobada.");
}

function rechazarValidacion(nombre) {
    alert("Validación de " + nombre + " rechazada.");
}
document.getElementById("btn-volver").addEventListener("click", function() {
    window.location.href = "index.html"; 
});

// Filtrar por búsqueda, estado y fecha
document.getElementById("busqueda").addEventListener("input", filtrarValidaciones);
document.getElementById("filtro-estado").addEventListener("change", filtrarValidaciones);
document.getElementById("filtro-fecha").addEventListener("change", filtrarValidaciones);

function filtrarValidaciones() {
    const busqueda = document.getElementById("busqueda").value.toLowerCase();
    const estadoSeleccionado = document.getElementById("filtro-estado").value;
    const filtroFecha = parseInt(document.getElementById("filtro-fecha").value);

    const listaValidaciones = document.querySelectorAll(".validacion");

    listaValidaciones.forEach((validacion) => {
        const nombrePostulante = validacion.querySelector(".nombre-postulante").textContent.toLowerCase();
        const estado = validacion.getAttribute("data-estado");
        const fechaValidacion = new Date(validacion.getAttribute("data-fecha"));
        const fechaActual = new Date();

        // Filtro por búsqueda
        const coincideBusqueda = nombrePostulante.includes(busqueda);

        // Filtro por estado
        const coincideEstado = !estadoSeleccionado || estado === estadoSeleccionado;

        // Filtro por fecha
        let coincideFecha = true;
        if (filtroFecha) {
            const diferenciaMeses = (fechaActual.getFullYear() - fechaValidacion.getFullYear()) * 12 + (fechaActual.getMonth() - fechaValidacion.getMonth());
            coincideFecha = diferenciaMeses <= filtroFecha;
        }

        // Mostrar u ocultar la validación según los filtros
        if (coincideBusqueda && coincideEstado && coincideFecha) {
            validacion.style.display = "flex";
        } else {
            validacion.style.display = "none";
        }
    });
}

function verDetalles(nombre) {
    alert("Detalles de " + nombre);
}

function aprobarValidacion(nombre) {
    alert("Validación de " + nombre + " aprobada.");
}

function rechazarValidacion(nombre) {
    alert("Validación de " + nombre + " rechazada.");
}
