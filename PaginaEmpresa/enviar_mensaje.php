<?php
// Incluir el archivo de conexión
include 'conexionEmpresaPrincipal.php';

// Verificar si el formulario ha sido enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos enviados por el formulario
    $postulante_id = $_POST['postulante_id'];
    $mensaje = $_POST['mensaje'];

    // Insertar el mensaje en la base de datos
    $sql = "INSERT INTO mensajes (postulante_id, mensaje) VALUES ('$postulante_id', '$mensaje')";

    if ($conn->query($sql) === TRUE) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Cerrar la conexión
    $conn->close();
}
?>
