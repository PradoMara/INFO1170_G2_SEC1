// simulacion no mas
const ofertas = [
    {
        id: 1,
        titulo: "Desarrollador Frontend",
        empresa: "ABC Corp",
        ubicacion: "Temuco",
        fecha: "2024-12-14",
        descripcion: "En ABC Corp buscamos un Desarrollador Frontend con experiencia en HTML, CSS y JavaScript para unirse a nuestro equipo.",
        requisitos: ["2 años de experiencia en desarrollo web", "Conocimientos en React o Angular"],
        beneficios: ["Trabajo remoto", "Seguro de salud"]
    },
    {
        id: 2,
        titulo: "Analista de Datos",
        empresa: "XYZ Data Solutions",
        ubicacion: "Santiago",
        fecha: "2024-12-10",
        descripcion: "XYZ busca un Analista de Datos con experiencia en análisis de grandes volúmenes de datos.",
        requisitos: ["3 años de experiencia en análisis de datos", "Manejo avanzado de SQL y Python"],
        beneficios: ["Bono de desempeño", "Capacitaciones constantes"]
    }
];


const params = new URLSearchParams(window.location.search);
const idOferta = params.get('id');


const oferta = ofertas.find(o => o.id === parseInt(idOferta));


const informacionSolicitud = document.getElementById('informacion-solicitud');
const nombreEmpresaDetalles = document.getElementById('nombre-empresa-detalles');

if (oferta) {
    informacionSolicitud.innerHTML = `
        <p><strong>Empresa:</strong> ${oferta.empresa}</p>
        <p><strong>Ubicación:</strong> ${oferta.ubicacion}</p>
        <p><strong>Fecha de Publicación:</strong> ${oferta.fecha}</p>
        <p><strong>Descripción del puesto:</strong> ${oferta.descripcion}</p>
        <h2>Requisitos:</h2>
        <ul>${oferta.requisitos.map(req => `<li>${req}</li>`).join('')}</ul>
        <h2>Beneficios:</h2>
        <ul>${oferta.beneficios.map(ben => `<li>${ben}</li>`).join('')}</ul>
    `;
    nombreEmpresaDetalles.textContent = oferta.titulo; 
} else {
    informacionSolicitud.innerHTML = `<p>Oferta no encontrada.</p>`;
}


document.getElementById('guardar-comentarios').addEventListener('click', () => {
    const comentarios = document.getElementById('comentarios').value;
    if (comentarios) {
        alert(`Comentarios guardados: ${comentarios}`);
    } else {
        alert("Por favor, escribe un comentario antes de guardar.");
    }
});
