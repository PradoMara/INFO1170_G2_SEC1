document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
        alert("No se proporcionó un ID válido");
        return;
    }

    fetch(`obtenerDetallesValidacion.php?id=${id}`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                mostrarDetalles(data);
            }
        })
        .catch(error => console.error("Error al obtener los detalles:", error));
});

function mostrarDetalles(validacion) {
    const detallesDiv = document.getElementById("detalles-validacion");
    detallesDiv.innerHTML = `
        <p><i class="fas fa-calendar"></i> <strong>Fecha de Nacimiento:</strong> ${validacion.fecha_nacimiento}</p>
        <p><i class="fas fa-file"></i> <strong>Tipo de Archivo:</strong> ${validacion.tipo_archivo}</p>
        <p><i class="fas fa-user-check"></i> <strong>Tipo de Permiso:</strong> ${validacion.tipo_permiso}</p>
        <p><i class="fas fa-file-alt"></i> <strong>Archivo:</strong> ${validacion.archivo ? "Disponible" : "No disponible"}</p>
        <p><i class="fas fa-shield-alt"></i> <strong>Permiso:</strong> ${validacion.permiso ? "Aprobado" : "Pendiente"}</p>
        <p><i class="fas fa-upload"></i> <strong>Fecha de Subida:</strong> ${validacion.fecha_subida}</p>
    `;
}


document.getElementById("volver").addEventListener("click", function () {
    window.history.back();
});
    