<?php

include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // $id_usuario = se obtiene del login del usuario
    $telefono= $_POST['telefono-contacto'];
    $email = $_POST['email-contacto'];

    $sql = "UPDATE Usuario SET 
    telefono = 'telefono', correo = 'email'
    WHERE id_usuario = '$id_usuario'";
    if ($conn->query($sql) === TRUE) {
        echo "LA informacion de contacto fue cambiada correctamente.<br>";
    } else {
        echo "Error al cambiar la informacion de contacto: " . $conn->error . "<br>";
    }
}
?>