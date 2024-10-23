document.addEventListener("DOMContentLoaded", function() {
    const listaComentarios = document.getElementById("comentarios-lista");

    fetch('comentarios.php')
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                listaComentarios.innerHTML = `<li>${data.error}</li>`;
            } else {
                data.forEach(comentario => {
                    const li = document.createElement("li");
                    
                    const autor = document.createElement("span");
                    autor.classList.add("comentario-autor");
                    autor.textContent = `${comentario.autor}`;

                    const texto = document.createElement("span");
                    texto.classList.add("comentario-texto");
                    texto.textContent = `: "${comentario.texto}"`;

                    const fecha = document.createElement("span");
                    fecha.classList.add("comentario-fecha");
                    fecha.textContent = ` - ${comentario.fecha}`;

                    li.appendChild(autor);
                    li.appendChild(texto);
                    li.appendChild(fecha);

                    listaComentarios.appendChild(li);
                });
            }
        })
        .catch(error => {
            listaComentarios.innerHTML = `<li>Error al cargar los comentarios</li>`;
            console.error('Error al cargar los comentarios:', error);
        });
});
