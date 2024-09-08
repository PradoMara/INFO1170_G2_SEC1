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
