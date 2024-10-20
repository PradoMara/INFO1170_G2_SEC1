document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById('submitBtn');
    const cvUpload = document.getElementById('cvUpload');

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault(); 

        if (cvUpload.files.length > 0) {
            alert("CV subido con éxito: " + cvUpload.files[0].name);
        } else {
            alert("Por favor, selecciona un archivo para subir.");
        }
    });
});
