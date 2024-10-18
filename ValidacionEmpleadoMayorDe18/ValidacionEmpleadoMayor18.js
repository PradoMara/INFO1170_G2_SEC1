function toggleHelp() {
    var helpSection = document.getElementById("help-section");
    if (helpSection.style.display === "none" || helpSection.style.display === "") {
        helpSection.style.display = "block"; 
    } else {
        helpSection.style.display = "none"; 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validacion-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const rut = document.getElementById('rut').value;
        const carnetFrontal = document.getElementById('carnet-frontal').files[0];
        const carnetReverso = document.getElementById('carnet-reverso').files[0];
        const edad = parseInt(document.getElementById('edad').value);
        const maxSize = 2 * 1024 * 1024; 

        const patronRut = /^[0-9]{1,8}-[0-9kK]{1}$/;
        if (!patronRut.test(rut)) {
            alert('El RUT ingresado no es válido. Debe tener el formato 12345678-9.');
            return;
        }

        if (isNaN(edad) || edad < 18) {
            alert('Debes tener al menos 18 años para postular.');
            return;
        }

        if (!carnetFrontal || !carnetReverso) {
            alert('Debes subir ambas fotos del carnet.');
            return;
        }

        const tiposPermitidos = ['image/jpeg', 'image/png'];
        if (!tiposPermitidos.includes(carnetFrontal.type) || !tiposPermitidos.includes(carnetReverso.type)) {
            alert('Solo se permiten archivos de imagen en formato JPG, JPEG o PNG.');
            return;
        }

        if (carnetFrontal.size > maxSize || carnetReverso.size > maxSize) {
            alert('El tamaño de las imágenes no debe superar los 2MB.');
            return;
        }

        alert('Validación exitosa');
        window.location.href = '../inicio-18años/main.html';
    });
});
