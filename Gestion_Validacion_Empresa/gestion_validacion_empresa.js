const params = new URLSearchParams(window.location.search);
const idEmpresa = params.get('id');

function cargarSolicitudes(pagina = 1) {
    fetch(`gestion_validacion_empresa.php?pagina=${pagina}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {
            const { solicitudes, totalSolicitudes, paginaActual, limite } = data;
            const contenedor = document.getElementById('solicitudes-container');
            contenedor.innerHTML = '';  

            solicitudes.forEach(solicitud => {
                const solicitudDiv = document.createElement('div');
                solicitudDiv.classList.add('solicitud');
                solicitudDiv.innerHTML = `
                    <div class="solicitud-info">
                        <h3>Nombre de la Empresa: <span>${solicitud.razonSocial}</span></h3>
                        <p>RUT: <span>${solicitud.registroTributario}</span></p>
                        <p>Dirección: <span>${solicitud.direccionFiscal}</span></p>
                        <p>Correo Electrónico Corporativo: <span>${solicitud.correoCooperativo}</span></p>
                        <p>Estado: <span>${solicitud.estado}</span></p>
                        <div class="acciones">
                            <button class="btn-aceptar" onclick="validarEmpresa('aceptar', ${solicitud.id_Empresa})">Aceptar</button>
                            <button class="btn-rechazar" onclick="validarEmpresa('rechazar', ${solicitud.id_Empresa})">Rechazar</button>
                            <button class="btn-detalles" onclick="verDetalles(${solicitud.id_Empresa})">Ver Detalles</button>
                        </div>
                    </div>
                `;
                contenedor.appendChild(solicitudDiv);
            });

            actualizarBotonesPaginacion(totalSolicitudes, paginaActual, limite);
        })
        .catch(error => {
            console.error('Error al cargar las solicitudes:', error);
            alert('Error al cargar las solicitudes. Revisa la consola para más detalles.');
        });
}

function actualizarBotonesPaginacion(totalSolicitudes, paginaActual, limite) {
    const totalPaginas = Math.ceil(totalSolicitudes / limite);  
    const botonesPaginacion = document.getElementById('paginacion');
    botonesPaginacion.innerHTML = '';  

    if (paginaActual > 1) {
        const btnAnterior = document.createElement('button');
        btnAnterior.textContent = 'Anterior';
        btnAnterior.onclick = () => cargarSolicitudes(paginaActual - 1);
        botonesPaginacion.appendChild(btnAnterior);
    }

    for (let i = 1; i <= totalPaginas; i++) {
        const btnPagina = document.createElement('button');
        btnPagina.textContent = i;
        if (i === paginaActual) {
            btnPagina.disabled = true; 
        }
        btnPagina.onclick = () => cargarSolicitudes(i);
        botonesPaginacion.appendChild(btnPagina);
    }

    if (paginaActual < totalPaginas) {
        const btnSiguiente = document.createElement('button');
        btnSiguiente.textContent = 'Siguiente';
        btnSiguiente.onclick = () => cargarSolicitudes(paginaActual + 1);
        botonesPaginacion.appendChild(btnSiguiente);
    }
}

function validarEmpresa(accion, idEmpresa) {
    const datos = new FormData();
    datos.append('accion', accion);
    datos.append('idEmpresa', idEmpresa);

    fetch('actualizar_estado_validacion.php', {
        method: 'POST',
        body: datos
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al procesar la solicitud');
        }
        return response.text(); 
    })
    .then(data => {
        alert(`La empresa ha sido ${accion === 'aceptar' ? 'aceptada' : 'rechazada'} correctamente.`);
        cargarSolicitudes();  
    })
    .catch(error => {
        console.error('Error al actualizar el estado de la empresa:', error);
        alert('Ocurrió un error al actualizar el estado de la empresa.');
    });
}

function verDetalles(idEmpresa) {
    window.location.href = `btn_detalles.html?id=${idEmpresa}`;
}

function cargarDetallesEmpresa(idEmpresa) {
    fetch(`Obtener_detalles_empresa.php?id=${idEmpresa}`)
        .then(response => response.json())
        .then(data => {
            const informacionSolicitud = document.getElementById('informacion-solicitud');
            const nombreEmpresaDetalles = document.getElementById('nombre-empresa-detalles');

            if (data) {
                nombreEmpresaDetalles.textContent = data.razonSocial;
                informacionSolicitud.innerHTML = `
                    <p><strong>RUT:</strong> ${data.registroTributario}</p>
                    <p><strong>Dirección:</strong> ${data.direccionFiscal}</p>
                    <p><strong>Correo Electrónico Corporativo:</strong> ${data.correoCooperativo}</p>
                    <p><strong>Estado:</strong> ${data.estado}</p>
                `;
            } else {
                informacionSolicitud.innerHTML = '<p>Detalles de la empresa no encontrados.</p>';
            }
        })
        .catch(error => {
            console.error('Error al cargar los detalles de la empresa:', error);
            alert('Ocurrió un error al cargar los detalles.');
        });
}

if (idEmpresa) {
    cargarDetallesEmpresa(idEmpresa);
} else {
    if (document.getElementById('informacion-solicitud')) {
        alert('No se ha proporcionado un ID válido de la empresa.');
    } else {
        cargarSolicitudes();  
    }
}
