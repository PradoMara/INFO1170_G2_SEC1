<?php
include 'conexion.php'; 

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

if (!empty($nombre) && !empty($correo) && !empty($mensaje)) {

    $sql = "INSERT INTO dudas_consultas (nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
} else {
    echo "Por favor, completa todos los apartados.";
}

$conn->close();
?>
