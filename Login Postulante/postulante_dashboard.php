<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['loggedin'])) {
    header("Location: login.php");
    exit;
}

echo "Bienvenido, " . $_SESSION['nombre'] . "!";
?>
