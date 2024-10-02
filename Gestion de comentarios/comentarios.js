document.getElementById("comentario-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const comentarioTexto = document.getElementById("comentario").value.trim();
    
    if (comentarioTexto === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    const nuevoComentario = document.createElement("li");
    nuevoComentario.textContent = comentarioTexto;

    document.getElementById("comentarios-lista").appendChild(nuevoComentario);

    document.getElementById("comentario").value = "";
});
