// simulacion 
const solicitudes = [
    {
        id: 1,
        nombreEmpresa: "Yamimoto Nokamina",
        rut: "92.345.678-9",
        direccion: "Calle Ficticia 69",
        email: "correoEmpresa@empresa.org",
        documento: "xdxd.txt",
        fecha: "2024-09-28"
    },
    {
        id: 2,
        nombreEmpresa: "Tech Solutions S.A.",
        rut: "98.765.432-1",
        direccion: "Avenida Siempreviva 742",
        email: "info@techsolutions.com",
        documento: "Technolabs_verif.pdf",
        fecha: "2024-09-30"
    },
    {
        id: 3,
        nombreEmpresa: "Alan Brito Delgado Industrias",
        rut: "111.222.333-4",
        direccion: "Ruta 5 Sur, KM 10",
        email: "contacto@agrosur.cl",
        documento: "FoodService_verificacion.pdf",
        fecha: "2024-09-25"
    }
];

// funcioncita pa renderizar las solicitudes en el DOM
function cargarSolicitudes() {
    const contenedor = document.getElementById('solicitudes-container');
    contenedor.innerHTML = '';  // Limpiar el contenedor
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
                    <button class="btn-detalles" onclick="verDetalles(${solicitud.id})">Ver Detalles</button>
                </div>
            </div>
        `;
        contenedor.appendChild(solicitudDiv);
    });
}

// redirige a otra pagina pa los detalles de la solicitud
function verDetalles(idSolicitud) {
    window.location.href = `btn-detalles.html?id=${idSolicitud}`; 
}

// Ssimula validación de la empresa
function validarEmpresa(accion, idEmpresa) {
    const empresa = solicitudes.find(solicitud => solicitud.id === idEmpresa);

    // Simulación de respuesta del backend
    const response = {
        success: true // Simula una respuesta exitosa
    };

    if (response.success) {
        alert(`La empresa "${empresa.nombreEmpresa}" ha sido ${accion === 'aceptar' ? 'aceptada' : 'rechazada'} correctamente.`);
        document.location.reload();
    } else {
        alert('Hubo un error al validar la empresa.');
    }
}


// filtros de búsqueda
document.addEventListener('DOMContentLoaded', () => {
    const busqueda = document.getElementById('busqueda');
    const filtroAceptadoRechazado = document.getElementById('filtro-aceptado-rechazado');
    const filtroRecientes = document.getElementById('filtro-recientes');
    const filtroAbecedario = document.getElementById('filtro-abecedario');

    const solicitudesOriginales = solicitudes.slice();  // copia de la lista original

    function aplicarFiltros() {
        let solicitudesFiltradas = solicitudesOriginales.slice();

        const textoBusqueda = busqueda.value.toLowerCase();
        const aceptadoRechazado = filtroAceptadoRechazado.value;
        const filtroRecienteSeleccionado = filtroRecientes.value;
        const ordenAbecedario = filtroAbecedario.value;

        // filtro por buqueda
        if (textoBusqueda) {
            solicitudesFiltradas = solicitudesFiltradas.filter(solicitud => solicitud.nombreEmpresa.toLowerCase().includes(textoBusqueda));
        }

        // filtro por aceptados o rechazados
        if (aceptadoRechazado) {

            solicitudesFiltradas = solicitudesFiltradas.filter(solicitud => aceptadoRechazado === 'aceptado' || aceptadoRechazado === 'rechazado');
        }

        // filtro por recientes 
        if (filtroRecienteSeleccionado) {
            const fechaLimite = new Date();
            fechaLimite.setMonth(fechaLimite.getMonth() - filtroRecienteSeleccionado);
            solicitudesFiltradas = solicitudesFiltradas.filter(solicitud => {
                const fecha = new Date(solicitud.fecha); 
                return fecha >= fechaLimite;
            });
        }

        // filtro por orden alfabetico
        if (ordenAbecedario) {
            solicitudesFiltradas.sort((a, b) => {
                const nombreA = a.nombreEmpresa.toLowerCase();
                const nombreB = b.nombreEmpresa.toLowerCase();
                return ordenAbecedario === 'A-Z' ? nombreA.localeCompare(nombreB) : nombreB.localeCompare(nombreA);
            });
        }

        
        // renderizamos los resultados filtrados
        const contenedor = document.getElementById('solicitudes-container');
        contenedor.innerHTML = '';
        solicitudesFiltradas.forEach(solicitud => {
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
                        <button class="btn-detalles" onclick="verDetalles(${solicitud.id})">Ver Detalles</button>

                    </div>
                </div>
            `;
            contenedor.appendChild(solicitudDiv);
        });
    }

    busqueda.addEventListener('input', aplicarFiltros);
    filtroAceptadoRechazado.addEventListener('change', aplicarFiltros);
    filtroRecientes.addEventListener('change', aplicarFiltros);
    filtroAbecedario.addEventListener('change', aplicarFiltros);

    cargarSolicitudes();  // cargamos las solicitudes iniciales
    
});


const params = new URLSearchParams(window.location.search);
const idSolicitud = params.get('id');

// busca la solicitud según el id
const solicitud = solicitudes.find(s => s.id === parseInt(idSolicitud));

// renderiza la informacion de la solicitud
const informacionSolicitud = document.getElementById('informacion-solicitud');
const nombreEmpresaDetalles = document.getElementById('nombre-empresa-detalles');

if (solicitud) {
    informacionSolicitud.innerHTML = `
        <p><strong>Nombre de la Empresa:</strong> ${solicitud.nombreEmpresa}</p>
        <p><strong>RUT:</strong> ${solicitud.rut}</p>
        <p><strong>Dirección:</strong> ${solicitud.direccion}</p>
        <p><strong>Correo Electrónico Corporativo:</strong> ${solicitud.email}</p>
        <p><strong>Documento de Verificación:</strong> <a href="pdfs/${solicitud.documento}" target="_blank">${solicitud.documento}</a></p>
    `;
    nombreEmpresaDetalles.textContent = solicitud.nombreEmpresa; // actualiza el nombre en el titulo
} else {
    informacionSolicitud.innerHTML = `<p>Solicitud no encontrada.</p>`;
}

// guardar comentarios
document.getElementById('guardar-comentarios').addEventListener('click', () => {
    const comentarios = document.getElementById('comentarios').value;
    if (comentarios) {
        alert(`Comentarios guardados: ${comentarios}`);
        
    } else {
        alert("Por favor, escribe un comentario antes de guardar.");
    }
});
