// enviar un mensaje
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.getElementById("input");

    // hacer la solicitud para enviar el mensaje
    fetch("enviar-mensaje.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            usuario: "Usuario1", // cambiar por el usuario dinámico
            mensaje: input.value,
            destinatario: "Usuario2" // cambiar por el destinatario dinamico
        })
    }).then(() => {
        input.value = ""; // limpiar el campo de texto
        cargarMensajes(); // actualizar mensajes
    });
});

// Obtener los mensajes y mostrarlos
function cargarMensajes() {
    fetch("obtener-mensaje.php?destinatario=Usuario1") // Cambiar por el usuario actual
        .then(response => response.json())
        .then(data => {
            const messages = document.getElementById("messages");
            messages.innerHTML = ""; // Limpiar mensajes existentes

            // Añadir los mensajes al contenedor
            data.forEach(msg => {
                const item = document.createElement("div");
                item.textContent = `${msg.usuario}: ${msg.mensaje}`;
                messages.appendChild(item);
            });

            // Desplazarse al final automáticamente
            messages.scrollTop = messages.scrollHeight;
        });
}

// Actualizar los mensajes cada 2 segundos
setInterval(cargarMensajes, 2000);
cargarMensajes(); // Cargar mensajes al iniciar



