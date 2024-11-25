document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const chatMessages = document.getElementById('chatMessages');
    const remitente = document.getElementById('remitente').value;
    const destinatario = document.getElementById('destinatario').value;

    // Cargar mensajes al iniciar
    const cargarMensajes = async () => {
        const response = await fetch(`obtener-mensaje.php?remitente=${remitente}&destinatario=${destinatario}`);
        const data = await response.json();

        if (data.status === 'success') {
            chatMessages.innerHTML = '';
            data.messages.forEach(msg => {
                const div = document.createElement('div');
                div.classList.add(msg.remitente === remitente ? 'mensaje-propio' : 'mensaje-ajeno');
                div.innerHTML = `<p><strong>${msg.remitente}:</strong> ${msg.mensaje}</p><small>${msg.fecha_envio}</small>`;
                chatMessages.appendChild(div);
            });
        }
    };

    // Enviar mensaje
    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const mensaje = document.getElementById('mensaje').value;

        const response = await fetch('enviar-mensaje.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({ remitente, destinatario, mensaje })
        });

        const data = await response.json();
        if (data.status === 'success') {
            cargarMensajes();
            chatForm.reset();
        } else {
            alert(data.message);
        }
    });

    // Actualizar mensajes cada 5 segundos
    setInterval(cargarMensajes, 5000);
    cargarMensajes();
});


