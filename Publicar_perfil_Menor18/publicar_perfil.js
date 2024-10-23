document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById('submitBtn');
    const cvUpload = document.getElementById('cvUpload');

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault(); 

        if (cvUpload.files.length > 0) {
            const file = cvUpload.files[0];

            const formData = new FormData();
            formData.append('cv', file);

            fetch('subir_cv_menor.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(data); 
            })
            .catch(error => {
                console.error('Error al subir el archivo:', error);
                alert('Error al subir el archivo.');
            });
        } else {
            alert("Por favor, selecciona un archivo para subir.");
        }
    });
});
