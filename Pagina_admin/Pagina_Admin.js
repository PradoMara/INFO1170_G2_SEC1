document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar alerta y redirigir
    function redirigirA(seccion, url) {
        alert('Redirigiendo a la sección de ' + seccion);
        window.location.href = url;
    }

    // Botón para ver postulantes
    var btnVerPostulantes = document.getElementById('btnVerPostulantes');
    btnVerPostulantes.addEventListener('click', function(event) {
        event.preventDefault();
        redirigirA('Postulantes', '../Gestion_postulante/Gestion_Postulante.html');
    });

    // Botón para ver empresas
    var btnVerEmpresas = document.getElementById('btnGestionEmpresa');
    btnVerEmpresas.addEventListener('click', function(event) {
        event.preventDefault();
        redirigirA('Empresas', '../Gestion_Empresa/gestion-empresas.html');
    });

    // Botón para verificar validaciones de postulantes
    var btnVerValidacionesPostulante = document.getElementById('btnVerVerificacionPostulante');
    btnVerValidacionesPostulante.addEventListener('click', function(event) {
        event.preventDefault();
        redirigirA('Validaciones de Postulantes', '../Gestion_Validacion_Postulante/Gestion_Validacion_Postulante.html');
    });

    // Botón para verificar validaciones de empresas
    var btnVerValidacionesEmpresas = document.getElementById('btnVerValidacionesEmpresas');
    btnVerValidacionesEmpresas.addEventListener('click', function(event) {
        event.preventDefault();
        redirigirA('Validaciones de Empresas', '../Gestion_Validacion_Empresa/gestion-validacion-empresa.html');
    });

    // Botón para ver dudas y consultas
    var btnVerConsultas = document.getElementById('btnVerConsultas');
    btnVerConsultas.addEventListener('click', function(event) {
        event.preventDefault();
        redirigirA('Dudas y Consultas', '../Gestion_de_Consultas/gestionDudasConsultas.html');
    });

    // Botón para ver comentarios
    var btnVerComentarios = document.getElementById('btnVerComentarios');
    btnVerComentarios.addEventListener('click', function(event) {
        event.preventDefault();
        redirigirA('Comentarios', '../Gestion_de_comentarios/GestionDeComentarios.html');
    });
});
