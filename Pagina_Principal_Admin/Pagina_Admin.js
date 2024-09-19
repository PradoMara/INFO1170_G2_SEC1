function mostrarAlerta(seccion) {
    alert('Navegando a la sección de ' + seccion);
}

document.addEventListener('DOMContentLoaded', function() {
    var btnVerPostulantes = document.getElementById('btnVerPostulantes');
    
    btnVerPostulantes.addEventListener('click', function(event) {
        event.preventDefault(); 
        alert('Redirigiendo a la página de gestión de postulantes.');
        window.location.href = 'Gestion_Postulante.html'; 
    });
});

