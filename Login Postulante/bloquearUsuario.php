<?php
session_start();
require 'conexion.php';  // archivo que contiene la conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Consulta a la base de datos para verificar el usuario
    $sql = "SELECT id, password, bloqueado FROM usuarios WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Verificar si el usuario está bloqueado
        if ($row['bloqueado']) {
            echo "Su cuenta ha sido bloqueada. Contacte al administrador.";
        } else {
            // Verificar la contraseña
            if (password_verify($password, $row['password'])) {
                $_SESSION['usuario_id'] = $row['id'];
                header("Location: dashboard.php");  // Redirigir al usuario al dashboard
                exit();
            } else {
                echo "Contraseña incorrecta.";
            }
        }
    } else {
        echo "Usuario no encontrado.";
    }
}
?>
