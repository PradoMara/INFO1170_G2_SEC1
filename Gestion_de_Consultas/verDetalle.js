document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const consultaId = params.get('id');

    if (consultaId) {
        fetch(`obtenerDetallesConsulta.php?id=${consultaId}`)
            .then(response => response.json())
            .then(data => {
                const detallesDiv = document.getElementById('detalles-consulta');
                if (detallesDiv) {
                    detallesDiv.innerHTML = `
                        <h2>Consulta de ${data.nombre}</h2>
                        <p><strong>Email:</strong> ${data.correo}</p>
                        <p><strong>Consulta:</strong> ${data.mensaje}</p>
                        <p><strong>Estado:</strong> ${data.estado}</p>
                        <p><strong>Respuesta:</strong> ${data.respuesta ? data.respuesta : 'Aún no respondida'}</p>
                    `;
                }
            })
            .catch(error => console.error('Error al cargar los detalles:', error));
    }

    document.getElementById('enviar-respuesta').addEventListener('click', function () {
        const respuesta = document.getElementById('respuesta').value;

        if (respuesta) {
            const formData = new FormData();
            formData.append('idConsulta', consultaId);
            formData.append('respuesta', respuesta);

            fetch('responderConsulta.php', {
                method: 'POST',
                body: formData
            })
                .then(response => response.text())
                .then(data => {
                    alert('Respuesta enviada con éxito.');
                    actualizarEstadoConsulta(consultaId, 'respondida');
                })
                .catch(error => console.error('Error al enviar la respuesta:', error));
        } else {
            alert('Por favor, escribe una respuesta.');
        }
    });

    function actualizarEstadoConsulta(idConsulta, nuevoEstado) {
        const formData = new FormData();
        formData.append('idConsulta', idConsulta);
        formData.append('estado', nuevoEstado);

        fetch('actualizarEstadoConsulta.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log('Estado actualizado:', data);
        })
        .catch(error => {
            console.error('Error al actualizar el estado:', error);
        });
    }

    document.getElementById('volver').addEventListener('click', function () {
        window.location.href = 'gestionDudasConsultas.html';  
    });
});
