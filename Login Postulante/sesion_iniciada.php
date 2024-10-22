<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['loggedin'])) {
    header("Location: postulante_login.php");
    exit;
}

echo "Bienvenido, " . $_SESSION['nombre'] . "!";
?>
