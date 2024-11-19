document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById("form-contacto");
    const mensajeDiv = document.getElementById("resultado-mensaje");
    const contadorCaracteres = document.getElementById("contador-caracteres");

    // Contador de caracteres
    document.getElementById("mensaje").addEventListener("input", function() {
        let caracteres = this.value.length;
        contadorCaracteres.textContent = `${caracteres}/500 caracteres`;
    });

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault(); 

        const formData = new FormData(formulario); 

        fetch("dudas_consultas.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text()) 
        .then(data => {
            mensajeDiv.style.display = "block";
            mensajeDiv.textContent = data; 
            formulario.reset();
            contadorCaracteres.textContent = "0/500 caracteres"; 
        })
        .catch(error => {
            mensajeDiv.style.display = "block";
            mensajeDiv.textContent = "Ocurrió un error al enviar los datos.";
        });
    });
});
