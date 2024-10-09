<?php

include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // $id_usuario = se obtiene del login del usuario
    $nueva_contraseña= $_POST['new-password'];
    $confirmar_contraseña = $_POST['confirm-password'];

    $sql = "UPDATE Usuario SET 
    contraseña = '$nueva_contraseña', 
    WHERE id_usuario = '$id_usuario'", $nueva_contraseña = $confirmar_contraseña;
    if ($conn->query($sql) === TRUE) {
        echo "LA contraseña fue cambiada correctamente.<br>";
    } else {
        echo "Error al cambiar contraseña: " . $conn->error . "<br>";
    }
}
?>