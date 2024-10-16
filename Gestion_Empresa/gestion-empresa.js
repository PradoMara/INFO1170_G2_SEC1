const solicitudes = [
    {
        id: 1,
        nombreEmpresa: "Soluciones Empresariales Innovatech",
        rut: "77.234.567-8",
        direccion: "Avenida Independencia 1245",
        email: "contacto@innovatech.com",
        documento: "innovatech_verificacion.pdf",
        fecha: "2024-09-15"
    },
    {
        id: 2,
        nombreEmpresa: "Construcciones Los Robles",
        rut: "89.765.432-9",
        direccion: "Camino Vecinal 987",
        email: "info@losrobles.cl",
        documento: "losrobles_verificacion.pdf",
        fecha: "2024-10-01"
    },
    {
        id: 3,
        nombreEmpresa: "Consultoría y Finanzas Equilibrio",
        rut: "10.123.456-0",
        direccion: "Calle del Sol 2024",
        email: "equilibrio@finanzas.com",
        documento: "equilibrio_consultoria.pdf",
        fecha: "2024-08-28"
    },
    {
        id: 4,
        nombreEmpresa: "Innovación y Tecnología Avanzada",
        rut: "11.234.567-1",
        direccion: "Avenida Libertador 1122",
        email: "info@innovaciontecnologia.com",
        documento: "innovacion_tecnologia.pdf",
        fecha: "2024-08-29"
    },
    {
        id: 5,
        nombreEmpresa: "Servicios Ambientales EcoVida",
        rut: "12.345.678-2",
        direccion: "Calle Verde 345",
        email: "contacto@ecovida.com",
        documento: "ecovida_servicios.pdf",
        fecha: "2024-08-30"
    },
    {
        id: 6,
        nombreEmpresa: "Construcciones y Proyectos Sostenibles",
        rut: "13.456.789-3",
        direccion: "Ruta 68, Km 5",
        email: "proyectos@construccionsostenible.com",
        documento: "construcciones_proyectos.pdf",
        fecha: "2024-08-31"
    },
    {
        id: 7,
        nombreEmpresa: "Asesoría Legal y Financiera LexCorp",
        rut: "14.567.890-4",
        direccion: "Calle del Abogado 99",
        email: "lexcorp@asesoria.com",
        documento: "lexcorp_asesoria.pdf",
        fecha: "2024-09-01"
    },
    {
        id: 8,
        nombreEmpresa: "Soluciones en Marketing Digital",
        rut: "15.678.901-5",
        direccion: "Calle de la Publicidad 76",
        email: "info@marketingdigital.com",
        documento: "marketing_digital.pdf",
        fecha: "2024-09-02"
    },
    {
        id: 9,
        nombreEmpresa: "Desarrollo de Software Innovatech",
        rut: "16.789.012-6",
        direccion: "Avenida de la Tecnología 55",
        email: "contacto@innovatech.com",
        documento: "innovatech_software.pdf",
        fecha: "2024-09-03"
    },
    {
        id: 10,
        nombreEmpresa: "Estudio de Diseño Creativo",
        rut: "17.890.123-7",
        direccion: "Calle del Diseño 22",
        email: "info@disenocreativo.com",
        documento: "diseno_creativo.pdf",
        fecha: "2024-09-04"
    },
    {
        id: 11,
        nombreEmpresa: "Gestión de Proyectos y Consultoría",
        rut: "18.901.234-8",
        direccion: "Calle del Éxito 101",
        email: "gestion@consultoria.com",
        documento: "gestion_proyectos.pdf",
        fecha: "2024-09-05"
    },
    {
        id: 12,
        nombreEmpresa: "Alimentación Saludable y Sostenible",
        rut: "19.012.345-9",
        direccion: "Calle de la Salud 44",
        email: "info@alimentosaludable.com",
        documento: "alimentos_sostenibles.pdf",
        fecha: "2024-09-06"
    },
    {
        id: 13,
        nombreEmpresa: "Turismo y Aventura Exploradores",
        rut: "20.123.456-0",
        direccion: "Calle de la Aventura 88",
        email: "info@exploradores.com",
        documento: "turismo_aventura.pdf",
        fecha: "2024-09-07"
    },
    {
        id: 14,
        nombreEmpresa: "Consultores en Recursos Humanos Talentia",
        rut: "21.234.567-1",
        direccion: "Avenida de la Gestión 27",
        email: "talentia@recursoshumanos.com",
        documento: "talentia_consultores.pdf",
        fecha: "2024-09-08"
    },
    {
        id: 15,
        nombreEmpresa: "Arquitectura y Urbanismo Creativo",
        rut: "22.345.678-2",
        direccion: "Calle del Diseño Urbano 33",
        email: "info@arquitecturacreativa.com",
        documento: "arquitectura_urbanismo.pdf",
        fecha: "2024-09-09"
    },
    {
        id: 16,
        nombreEmpresa: "Eventos Corporativos y Sociales",
        rut: "23.456.789-3",
        direccion: "Calle de los Eventos 10",
        email: "contacto@eventos.com",
        documento: "eventos_corporativos.pdf",
        fecha: "2024-09-10"
    },
    {
        id: 17,
        nombreEmpresa: "Gestión y Consultoría Ambiental",
        rut: "24.567.890-4",
        direccion: "Avenida Ecológica 20",
        email: "info@gestionambiental.com",
        documento: "gestion_ambiental.pdf",
        fecha: "2024-09-11"
    },
    {
        id: 18,
        nombreEmpresa: "Desarrollo Web y Aplicaciones Móviles",
        rut: "25.678.901-5",
        direccion: "Calle de la Innovación 90",
        email: "info@desarrolloweb.com",
        documento: "desarrollo_web.pdf",
        fecha: "2024-09-12"
    },
    {
        id: 19,
        nombreEmpresa: "Consultoría de Seguridad y Riesgo",
        rut: "26.789.012-6",
        direccion: "Calle de la Seguridad 77",
        email: "contacto@seguridad.com",
        documento: "consultoria_seguridad.pdf",
        fecha: "2024-09-13"
    },
    {
        id: 20,
        nombreEmpresa: "Salud y Bienestar Integral",
        rut: "27.890.123-7",
        direccion: "Calle de la Bienestar 11",
        email: "info@saludybienestar.com",
        documento: "salud_bienestar.pdf",
        fecha: "2024-09-14"
    },
    {
        id: 21,
        nombreEmpresa: "Plataforma de E-learning EduTech",
        rut: "28.901.234-8",
        direccion: "Avenida de la Educación 300",
        email: "contacto@edutech.com",
        documento: "edutech_elearning.pdf",
        fecha: "2024-09-15"
    }
];
const itemsPorPagina = 5;
let paginaActual = 1;

// cargamos la lista de solicitudes en el contenedor
function cargarSolicitudes() {
    const contenedor = document.getElementById('solicitudes-container');
    
    // si no encontramos el contenedor, no hacemos nada
    if (!contenedor) {
        console.error("Contenedor de solicitudes no encontrado.");
        return;
    }
    
    // limpiamos el contenido existente del contenedor
    contenedor.innerHTML = '';  
    const inicio = (paginaActual - 1) * itemsPorPagina;
    const fin = inicio + itemsPorPagina;
    const empresasEnPagina = solicitudes.slice(inicio, fin);

    // agregamos cada solicitud como un div
    empresasEnPagina.forEach(solicitud => {
        const solicitudDiv = document.createElement('div');
        solicitudDiv.classList.add('solicitud');
        solicitudDiv.innerHTML = `
            <div class="solicitud-info">
                <h3>Nombre de la Empresa: <span>${solicitud.nombreEmpresa}</span></h3>
                <p>RUT: <span>${solicitud.rut}</span></p>
                <p>Dirección: <span>${solicitud.direccion}</span></p>
                <p>Correo Electrónico Corporativo: <span>${solicitud.email}</span></p>
                <p>Documento de Verificación: <a href="pdfs/${solicitud.documento}" target="_blank">${solicitud.documento}</a></p>
                <button class="btn-detalles" onclick="verDetalles(${solicitud.id})">Ver Detalles</button>
            </div>
        `;
        contenedor.appendChild(solicitudDiv);
    });

    // actualizar la paginación
    actualizarPaginacion();
}

// actualizar los enlaces de paginación
function actualizarPaginacion() {
    const paginationContainer = document.getElementById('pagination');
    const totalPaginas = Math.ceil(solicitudes.length / itemsPorPagina);
    paginationContainer.innerHTML = ''; // Limpiar paginación anterior

    const crearBoton = (texto, pagina, clase = '') => {
        const li = document.createElement('li');
        li.className = clase;
        li.innerHTML = `<a href="#" onclick="irAPagina(${pagina})">${texto}</a>`;
        return li;
    };

    // Primer botón
    paginationContainer.appendChild(crearBoton('« Primero', 1));
    // Botón anterior
    if (paginaActual > 1) {
        paginationContainer.appendChild(crearBoton('«', paginaActual - 1));
    } else {
        paginationContainer.appendChild(crearBoton('«', paginaActual, 'disabled'));
    }

    // Botones de número
    for (let i = 1; i <= totalPaginas; i++) {
        const li = crearBoton(i, i, i === paginaActual ? 'active' : '');
        paginationContainer.appendChild(li);
    }

    // Botón siguiente
    if (paginaActual < totalPaginas) {
        paginationContainer.appendChild(crearBoton('»', paginaActual + 1));
    } else {
        paginationContainer.appendChild(crearBoton('»', paginaActual, 'disabled'));
    }
    // Último botón
    paginationContainer.appendChild(crearBoton('Ultima »', totalPaginas));
}

// Cambiar a la página seleccionada
function irAPagina(pagina) {
    paginaActual = pagina;
    cargarSolicitudes();
}

// redirige a la pagina de detalles de la solicitud con el id correspondiente
function verDetalles(idSolicitud) {
    redirigir(`btn-detalles.html?id=${idSolicitud}`);
}

// funcion generica para redirigir a cualquier url
function redirigir(url) {
    window.location.href = url;
}

// obtener parametros de la url para cargar detalles de la empresa
function obtenerParametroUrl(nombreParametro) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nombreParametro);
}

// cargamos los detalles de la empresa segun el id en la url
function cargarDetallesEmpresa() {
    const idEmpresa = obtenerParametroUrl('id');
    const empresa = solicitudes.find(solicitud => solicitud.id == idEmpresa);

    if (empresa) {
        // asignamos los valores de la empresa a los campos correspondientes
        document.getElementById('nombre-empresa-detalles').textContent = empresa.nombreEmpresa;

        const infoSolicitud = document.getElementById('informacion-solicitud');
        infoSolicitud.innerHTML = `
            <p><strong>RUT:</strong> ${empresa.rut}</p>
            <p><strong>Dirección:</strong> ${empresa.direccion}</p>
            <p><strong>Correo Electrónico:</strong> ${empresa.email}</p>
            <p><strong>Documento de Verificación:</strong> <a href="pdfs/${empresa.documento}" target="_blank">${empresa.documento}</a></p>
        `;
    } else {
        // si no encontramos la empresa, mostramos un mensaje de error
        document.getElementById('informacion-solicitud').innerHTML = '<p>Empresa no encontrada.</p>';
    }
}

// redirigimos a la pagina principal de gestion de empresas
function volver() {
    redirigir('Gestion-de-empresas/gestion-empresas.html');
}

// cuando el DOM se carga, ejecutamos la funcion correspondiente segun la pagina
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('solicitudes-container')) {
        cargarSolicitudes(); // cargamos las solicitudes si estamos en la pagina principal
    } else if (document.getElementById('informacion-solicitud')) {
        cargarDetallesEmpresa(); // cargamos los detalles si estamos en la pagina de detalles
    }

    // verificamos si existe el boton 'volver' y le asignamos el evento de redireccionar
    const botonVolver = document.getElementById('volver');
    if (botonVolver) {
        botonVolver.addEventListener('click', () => redirigir('gestion-empresas.html'));
    }

    // verificamos si existe el boton 'guardar comentarios' y le asignamos su evento
    const botonGuardarComentarios = document.getElementById('guardar-comentarios');
    if (botonGuardarComentarios) {
        botonGuardarComentarios.addEventListener('click', () => {
            const comentarios = document.getElementById('comentarios').value;
            if (comentarios) {
                alert(`Comentarios guardados: ${comentarios}`);
            } else {
                alert("Por favor, escribe un comentario antes de guardar.");
            }
        });
    }
});




