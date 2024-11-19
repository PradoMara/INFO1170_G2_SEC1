<?php
session_start();
include 'conex.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_id = $_SESSION['user_id'];
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];

    $sql = "UPDATE usuarios SET nombre='$nombre', telefono='$telefono', email='$email' WHERE id='$user_id'";
    if ($conn->query($sql) === TRUE) {
        echo "Perfil actualizado.";
    } else {
        echo "Error al actualizar: " . $conn->error;
    }
}
?>
