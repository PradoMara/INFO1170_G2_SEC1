function openModal() {
    document.getElementById("editModal").style.display = "block";
}

function closeModal() {
    document.getElementById("editModal").style.display = "none";
}

function guardarDatos() {

    var nombre = document.getElementById("input-nombre").value;
    var sector = document.getElementById("input-sector").value;
    var direccion = document.getElementById("input-direccion").value;
    var empleados = document.getElementById("input-empleados").value;
    var acerca = document.getElementById("input-acerca").value;
    var fundacion = document.getElementById("input-fundacion").value;
    var sitio = document.getElementById("input-sitio").value;
    var correo = document.getElementById("input-correo").value;
    var telefono = document.getElementById("input-telefono").value;

    document.getElementById("nombre-empresa").innerText = nombre;
    document.getElementById("sector-empresa").innerText = sector;
    document.getElementById("direccion-empresa").innerText = direccion;
    document.getElementById("empleados-empresa").innerText = empleados;
    document.getElementById("acerca-empresa").innerText = acerca;
    document.getElementById("fundacion-empresa").innerText = fundacion;
    document.getElementById("sitio-empresa").innerHTML = '<a href="#">' + sitio + '</a>';
    document.getElementById("correo-empresa").innerText = correo;
    document.getElementById("telefono-empresa").innerText = telefono;

    closeModal();
}
