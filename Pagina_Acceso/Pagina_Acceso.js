// Manejo de la ventana de ayuda
var ventana = document.getElementById("ayudaVentana");
var helpLink = document.querySelector(".ayuda");
var span = document.getElementsByClassName("close")[0];

helpLink.onclick = function() {
    ventana.style.display = "block";
}

span.onclick = function() {
    ventana.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == ventana) {
        ventana.style.display = "none";
    }
}

// Redirigir a páginas cuando se hace clic en los botones
document.getElementById('postulanteBoton').addEventListener('click', function() {
    window.location.href = '../Registro del Postulante/registro.html'; 
});

document.getElementById('empresaBoton').addEventListener('click', function() {
    window.location.href = '../registros-empresas/empresaRg.html'; 
});

document.getElementById('adminBoton').addEventListener('click', function() {
    window.location.href = '../Login Admin/login_admin.html'; 
});
