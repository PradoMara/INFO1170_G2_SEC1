// Simulamos una lista de solicitudes de validación de empresas
const solicitudes = [
    {
        id: 1,
        nombreEmpresa: "Yamimoto Nokamina",
        rut: "92.345.678-9",
        direccion: "Calle Ficticia 69",
        email: "correoEmpresa@empresa.org",
        documento: "xdxd.txt"
    },
    {
        id: 2,
        nombreEmpresa: "Tech Solutions S.A.",
        rut: "98.765.432-1",
        direccion: "Avenida Siempreviva 742",
        email: "info@techsolutions.com",
        documento: "Technolabs_verif.pdf"
    },
    {
        id: 3,
        nombreEmpresa: "Alan Brito Delgado Industrias",
        rut: "111.222.333-4",
        direccion: "Ruta 5 Sur, KM 10",
        email: "contacto@agrosur.cl",
        documento: "FoodService_verificacion.pdf",
    }
];

// Función para renderizar las solicitudes en el DOM
function cargarSolicitudes() {
    const contenedor = document.getElementById('solicitudes-container');
    solicitudes.forEach(solicitud => {
        const solicitudDiv = document.createElement('div');
        solicitudDiv.classList.add('solicitud');
        solicitudDiv.innerHTML = `
            <div class="solicitud-info">
                <h3>Nombre de la Empresa: <span>${solicitud.nombreEmpresa}</span></h3>
                <p>RUT: <span>${solicitud.rut}</span></p>
                <p>Dirección: <span>${solicitud.direccion}</span></p>
                <p>Correo Electrónico Corporativo: <span>${solicitud.email}</span></p>
                <p>Documento de Verificación: <a href="pdfs/${solicitud.documento}" target="_blank">${solicitud.documento}</a></p>
                <div class="acciones">
                    <button class="btn-aceptar" onclick="validarEmpresa('aceptar', ${solicitud.id})">Aceptar</button>
                    <button class="btn-rechazar" onclick="validarEmpresa('rechazar', ${solicitud.id})">Rechazar</button>
                </div>
            </div>
        `;
        contenedor.appendChild(solicitudDiv);
    });
}

// Simula la validación de la empresa
function validarEmpresa(accion, idEmpresa) {
    const empresa = solicitudes.find(solicitud => solicitud.id === idEmpresa);
    const url = `/validar-empresa`;  // URL simulada del backend

    // Aquí hacemos la solicitud de validación simulada
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accion, idEmpresa }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`La empresa "${empresa.nombreEmpresa}" ha sido ${accion === 'aceptar' ? 'aceptada' : 'rechazada'} correctamente.`);
            document.location.reload();
        } else {
            alert('Hubo un error al validar la empresa.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Llamamos a la función para cargar las solicitudes cuando la página se cargue
document.addEventListener('DOMContentLoaded', cargarSolicitudes);
