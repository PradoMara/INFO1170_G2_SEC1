document.querySelector('#form-subir-cv').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.querySelector('#upload-cv');
    const file = fileInput.files[0];
    const fileStatus = document.querySelector('.file-upload-status');

    if (file) {
        if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
            fileStatus.textContent = `Archivo subido: ${file.name}`;
        } else {
            fileStatus.textContent = 'Solo se permiten archivos PDF o imágenes.';
        }
    } else {
        fileStatus.textContent = 'Por favor, selecciona un archivo para subir.';
    }
});
