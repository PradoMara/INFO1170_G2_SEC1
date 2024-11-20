document.addEventListener("DOMContentLoaded", function () {
    obtenerValidaciones();
});

function obtenerValidaciones() {
    fetch("obtenerValidaciones.php")
        .then(response => response.json())
        .then(data => {
            const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
            contenedorTarjetas.innerHTML = "";
            data.forEach(validacion => {
                const tarjeta = document.createElement("div");
                tarjeta.classList.add("tarjeta");

                tarjeta.innerHTML = `
                    <h3><i class="fas fa-user"></i> Validación de Postulante</h3>
                    <p><i class="fas fa-calendar-alt"></i> <strong>Fecha de Nacimiento:</strong> ${validacion.fecha_nacimiento}</p>
                    <p><i class="fas fa-file-alt"></i> <strong>Tipo de Archivo:</strong> ${validacion.tipo_archivo}</p>
                    <p><i class="fas fa-shield-alt"></i> <strong>Tipo de Permiso:</strong> ${validacion.tipo_permiso}</p>
                    <p><i class="fas fa-clock"></i> <strong>Fecha de Subida:</strong> ${validacion.fecha_subida}</p>
                    <button onclick="window.location.href='verDetalleValidacion.html?id=${validacion.id}'">
                        <i class="fas fa-info-circle"></i> Ver Detalles
                    </button>
                `;

                contenedorTarjetas.appendChild(tarjeta);
            });
        })
        .catch(error => console.error("Error al obtener validaciones:", error));
}
