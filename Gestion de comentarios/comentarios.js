document.getElementById("comentario-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const comentarioTexto = document.getElementById("comentario").value.trim();
    
    if (comentarioTexto === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    const fechaActual = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);

    const nuevoComentario = document.createElement("li");
    nuevoComentario.textContent = `${comentarioTexto} - ${fechaFormateada}`;

    document.getElementById("comentarios-lista").appendChild(nuevoComentario);

    document.getElementById("comentario").value = "";
});
