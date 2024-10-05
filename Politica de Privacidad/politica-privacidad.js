document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-comentarios");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const comentario = document.getElementById("comentario").value.trim();

        const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!nombre || !correo || !comentario) {
            alert("Por favor, completa todos los campos.");
        } else if (!patronCorreo.test(correo)) {
            alert("Por favor, ingresa un correo electrónico válido.");
        } else {
            alert("Comentario enviado. ¡Gracias por tus comentarios!");
            form.reset();
        }
    });
});
