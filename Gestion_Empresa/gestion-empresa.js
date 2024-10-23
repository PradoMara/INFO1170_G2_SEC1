// // const solicitudes = [
//     {
//         id: 1,
//         nombreEmpresa: "Soluciones Empresariales Innovatech",
//         rut: "77.234.567-8",
//         direccion: "Avenida Independencia 1245",
//         email: "contacto@innovatech.com",
//         documento: "innovatech_verificacion.pdf",
//         fecha: "2024-09-15"
//     },
//     {
//         id: 2,
//         nombreEmpresa: "Construcciones Los Robles",
//         rut: "89.765.432-9",
//         direccion: "Camino Vecinal 987",
//         email: "info@losrobles.cl",
//         documento: "losrobles_verificacion.pdf",
//         fecha: "2024-10-01"
//     },
//     {
//         id: 3,
//         nombreEmpresa: "Consultoría y Finanzas Equilibrio",
//         rut: "10.123.456-0",
//         direccion: "Calle del Sol 2024",
//         email: "equilibrio@finanzas.com",
//         documento: "equilibrio_consultoria.pdf",
//         fecha: "2024-08-28"
//     },
//     {
//         id: 4,
//         nombreEmpresa: "Innovación y Tecnología Avanzada",
//         rut: "11.234.567-1",
//         direccion: "Avenida Libertador 1122",
//         email: "info@innovaciontecnologia.com",
//         documento: "innovacion_tecnologia.pdf",
//         fecha: "2024-08-29"
//     },
//     {
//         id: 5,
//         nombreEmpresa: "Servicios Ambientales EcoVida",
//         rut: "12.345.678-2",
//         direccion: "Calle Verde 345",
//         email: "contacto@ecovida.com",
//         documento: "ecovida_servicios.pdf",
//         fecha: "2024-08-30"
//     },
//     {
//         id: 6,
//         nombreEmpresa: "Construcciones y Proyectos Sostenibles",
//         rut: "13.456.789-3",
//         direccion: "Ruta 68, Km 5",
//         email: "proyectos@construccionsostenible.com",
//         documento: "construcciones_proyectos.pdf",
//         fecha: "2024-08-31"
//     },
//     {
//         id: 7,
//         nombreEmpresa: "Asesoría Legal y Financiera LexCorp",
//         rut: "14.567.890-4",
//         direccion: "Calle del Abogado 99",
//         email: "lexcorp@asesoria.com",
//         documento: "lexcorp_asesoria.pdf",
//         fecha: "2024-09-01"
//     },
//     {
//         id: 8,
//         nombreEmpresa: "Soluciones en Marketing Digital",
//         rut: "15.678.901-5",
//         direccion: "Calle de la Publicidad 76",
//         email: "info@marketingdigital.com",
//         documento: "marketing_digital.pdf",
//         fecha: "2024-09-02"
//     },
//     {
//         id: 9,
//         nombreEmpresa: "Desarrollo de Software Innovatech",
//         rut: "16.789.012-6",
//         direccion: "Avenida de la Tecnología 55",
//         email: "contacto@innovatech.com",
//         documento: "innovatech_software.pdf",
//         fecha: "2024-09-03"
//     },
//     {
//         id: 10,
//         nombreEmpresa: "Estudio de Diseño Creativo",
//         rut: "17.890.123-7",
//         direccion: "Calle del Diseño 22",
//         email: "info@disenocreativo.com",
//         documento: "diseno_creativo.pdf",
//         fecha: "2024-09-04"
//     },
//     {
//         id: 11,
//         nombreEmpresa: "Gestión de Proyectos y Consultoría",
//         rut: "18.901.234-8",
//         direccion: "Calle del Éxito 101",
//         email: "gestion@consultoria.com",
//         documento: "gestion_proyectos.pdf",
//         fecha: "2024-09-05"
//     },
//     {
//         id: 12,
//         nombreEmpresa: "Alimentación Saludable y Sostenible",
//         rut: "19.012.345-9",
//         direccion: "Calle de la Salud 44",
//         email: "info@alimentosaludable.com",
//         documento: "alimentos_sostenibles.pdf",
//         fecha: "2024-09-06"
//     },
//     {
//         id: 13,
//         nombreEmpresa: "Turismo y Aventura Exploradores",
//         rut: "20.123.456-0",
//         direccion: "Calle de la Aventura 88",
//         email: "info@exploradores.com",
//         documento: "turismo_aventura.pdf",
//         fecha: "2024-09-07"
//     },
//     {
//         id: 14,
//         nombreEmpresa: "Consultores en Recursos Humanos Talentia",
//         rut: "21.234.567-1",
//         direccion: "Avenida de la Gestión 27",
//         email: "talentia@recursoshumanos.com",
//         documento: "talentia_consultores.pdf",
//         fecha: "2024-09-08"
//     },
//     {
//         id: 15,
//         nombreEmpresa: "Arquitectura y Urbanismo Creativo",
//         rut: "22.345.678-2",
//         direccion: "Calle del Diseño Urbano 33",
//         email: "info@arquitecturacreativa.com",
//         documento: "arquitectura_urbanismo.pdf",
//         fecha: "2024-09-09"
//     },
//     {
//         id: 16,
//         nombreEmpresa: "Eventos Corporativos y Sociales",
//         rut: "23.456.789-3",
//         direccion: "Calle de los Eventos 10",
//         email: "contacto@eventos.com",
//         documento: "eventos_corporativos.pdf",
//         fecha: "2024-09-10"
//     },
//     {
//         id: 17,
//         nombreEmpresa: "Gestión y Consultoría Ambiental",
//         rut: "24.567.890-4",
//         direccion: "Avenida Ecológica 20",
//         email: "info@gestionambiental.com",
//         documento: "gestion_ambiental.pdf",
//         fecha: "2024-09-11"
//     },
//     {
//         id: 18,
//         nombreEmpresa: "Desarrollo Web y Aplicaciones Móviles",
//         rut: "25.678.901-5",
//         direccion: "Calle de la Innovación 90",
//         email: "info@desarrolloweb.com",
//         documento: "desarrollo_web.pdf",
//         fecha: "2024-09-12"
//     },
//     {
//         id: 19,
//         nombreEmpresa: "Consultoría de Seguridad y Riesgo",
//         rut: "26.789.012-6",
//         direccion: "Calle de la Seguridad 77",
//         email: "contacto@seguridad.com",
//         documento: "consultoria_seguridad.pdf",
//         fecha: "2024-09-13"
//     },
//     {
//         id: 20,
//         nombreEmpresa: "Salud y Bienestar Integral",
//         rut: "27.890.123-7",
//         direccion: "Calle de la Bienestar 11",
//         email: "info@saludybienestar.com",
//         documento: "salud_bienestar.pdf",
//         fecha: "2024-09-14"
//     },
//     {
//         id: 21,
//         nombreEmpresa: "Plataforma de E-learning EduTech",
//         rut: "28.901.234-8",
//         direccion: "Avenida de la Educación 300",
//         email: "contacto@edutech.com",
//         documento: "edutech_elearning.pdf",
//         fecha: "2024-09-15"
//     }
// ];
document.addEventListener("DOMContentLoaded", () => {

    const cargarEmpresas = () => {
        fetch('get_empresas.php')
            .then(response => response.json())
            .then(data => {
                const container = document.getElementById('solicitudes-container');
                container.innerHTML = '';

                data.forEach(empresa => {
                    const empresaElement = document.createElement('div');
                    empresaElement.classList.add('solicitud');
                    empresaElement.innerHTML = `
                        <h3>${empresa.nombre_Empresa}</h3>
                        <p>RUT: ${empresa.rut_Empresa}</p>
                        <p>Dirección: ${empresa.direccion}</p>
                        <p>Descripción: ${empresa.des_Empresa}</p>
                        <div class="acciones">
                            <button class="actualizar" data-id="${empresa.id_Empresa}">Actualizar</button>
                            <button class="eliminar" data-id="${empresa.id_Empresa}">Eliminar</button>
                        </div>
                    `;
                    container.appendChild(empresaElement);
                });

                // Añadir eventos a los botones de actualizar y eliminar
                document.querySelectorAll('.eliminar').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const idEmpresa = e.target.getAttribute('data-id');
                        eliminarEmpresa(idEmpresa);
                    });
                });

                document.querySelectorAll('.actualizar').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const idEmpresa = e.target.getAttribute('data-id');
                        actualizarEmpresa(idEmpresa);
                    });
                });
            });
    };

    const eliminarEmpresa = (id_Empresa) => {
        if (confirm("¿Estás seguro de que deseas eliminar esta empresa?")) {
            fetch('eliminar_empresa.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `id_Empresa=${id_Empresa}`
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                cargarEmpresas(); 
            });
        }
    };


    const actualizarEmpresa = (id_Empresa) => {
  
        const nombre = prompt("Nuevo nombre de la empresa:");
        const direccion = prompt("Nueva dirección:");
        const rut = prompt("Nuevo RUT:");
        const descripcion = prompt("Nueva descripción:");

        fetch('actualizar_empresa.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `id_Empresa=${id_Empresa}&nombre_Empresa=${nombre}&direccion=${direccion}&rut_Empresa=${rut}&des_Empresa=${descripcion}`
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            cargarEmpresas(); 
        });
    };

    cargarEmpresas();
    document.getElementById('busqueda').addEventListener('input', () => cargarEmpresas());
    document.getElementById('filtro-recientes').addEventListener('change', () => cargarEmpresas());
    document.getElementById('filtro-abecedario').addEventListener('change', () => cargarEmpresas());
    
});




