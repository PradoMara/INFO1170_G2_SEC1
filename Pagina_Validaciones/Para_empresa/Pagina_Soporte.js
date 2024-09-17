document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-comentarios");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const comentario = document.getElementById("comentario").value.trim();

        const patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (nombre === "" || correo === "" || comentario === "") {
            alert("Por favor, completa todos los campos antes de enviar.");
        } else if (!patronCorreo.test(correo)) {
            alert("Por favor, ingresa un correo electrónico válido.");
        } else {
            // Mostrar el mensaje de confirmación
            alert("Gracias por tu comentario. Lo hemos recibido correctamente.");

            // Reiniciar el formulario para que quede vacío después del envío
            form.reset();
        }
    });
});
