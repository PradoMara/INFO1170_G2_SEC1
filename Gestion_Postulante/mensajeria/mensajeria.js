document.getElementById('send').addEventListener('click', function() {
    var message = document.getElementById('message').value;

    if (message.trim() !== "") {  // Verificar si el mensaje no está vacío
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "enviar-mensaje.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText); // Verificar la respuesta del servidor
                document.getElementById('message').value = ''; // Limpiar el campo de mensaje
            }
        };
        xhr.send("mensaje=" + encodeURIComponent(message)); // Enviar el mensaje
    } else {
        alert("Por favor, escribe un mensaje.");
    }
});


