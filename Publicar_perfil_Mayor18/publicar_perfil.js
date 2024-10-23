document.querySelector('#form-subir-cv').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.querySelector('#upload-cv');
    const file = fileInput.files[0];
    const fileStatus = document.querySelector('.file-upload-status');
    const progressBar = document.querySelector('#progress-bar');

    if (file) {
        if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
            const formData = new FormData();
            formData.append('cv', file); 

            fileStatus.textContent = 'Subiendo archivo...';
            progressBar.style.display = 'block'; 

            fetch('subir_cv.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())  
            .then(result => {
                progressBar.style.display = 'none'; 
                fileStatus.textContent = result; 
            })
            .catch(error => {
                fileStatus.textContent = 'Error al subir el archivo. Inténtalo nuevamente.';
                progressBar.style.display = 'none'; 
                console.error('Error:', error);
            });
        } else {
            fileStatus.textContent = 'Solo se permiten archivos PDF o imágenes.';
        }
    } else {
        fileStatus.textContent = 'Por favor, selecciona un archivo para subir.';
    }
});
