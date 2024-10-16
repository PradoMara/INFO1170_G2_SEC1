document.addEventListener("DOMContentLoaded", function() {
    const comentarios = [
        { autor: "Postulante 1", texto: "Excelente plataforma.", fecha: "2024-10-12" },
        { autor: "Empresa ABC", texto: "Muy útil para encontrar talento local.", fecha: "2024-10-10" },
        { autor: "Postulante 2", texto: "Facilita mucho la búsqueda de empleo.", fecha: "2024-10-09" }
    ];

    const listaComentarios = document.getElementById("comentarios-lista");

    comentarios.forEach(comentario => {
        const li = document.createElement("li");
        li.textContent = `${comentario.autor}: "${comentario.texto}" - ${comentario.fecha}`;
        listaComentarios.appendChild(li);
    });
});
