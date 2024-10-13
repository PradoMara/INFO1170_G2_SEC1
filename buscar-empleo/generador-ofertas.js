const ofertasDestacadas = [
    { titulo: "Desarrollador Backend", empresa: "Empresa ABC", ubicacion: "Temuco", fecha: "Publicado el 14/12/2024" },
    { titulo: "Analista de Datos", empresa: "Empresa XYZ", ubicacion: "Angol", fecha: "Publicado hace 2 días" },
    // Agrega más ofertas según sea necesario
];

function generarOfertas() {
    const contenedorOfertas = document.getElementById('ofertas-destacadas');
    
    ofertasDestacadas.forEach(oferta => {
        const ofertaHTML = `
            <div class="tarjeta-oferta">
                <h3 class="titulo-oferta">${oferta.titulo}</h3>
                <p class="empresa-oferta">${oferta.empresa}</p>
                <p class="ubicacion-oferta">${oferta.ubicacion}</p>
                <span class="fecha-publicacion">${oferta.fecha}</span>
                <a href="detalle-oferta.html" class="boton-ver-mas">Ver más</a>
            </div>
        `;
        
        contenedorOfertas.innerHTML += ofertaHTML;
    });
}

generarOfertas();
