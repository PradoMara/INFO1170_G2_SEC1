<?php
session_start();

// Verificar si el administrador ha iniciado sesión
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: admin_login.php");
    exit;
}

echo "<h1>Bienvenido, " . htmlspecialchars($_SESSION['nombre']) . " al panel de administración!</h1>";
?>
