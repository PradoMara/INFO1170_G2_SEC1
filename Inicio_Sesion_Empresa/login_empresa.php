<?php
include 'conexion.php';

// Habilitar errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Configuración de cabecera
header('Content-Type: application/json');

// Validar método POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = mysqli_real_escape_string($conexion, $_POST['email']);
    $password = mysqli_real_escape_string($conexion, $_POST['password']);

    // Consulta SQL
    $sql = "SELECT * FROM empresas WHERE email = '$email'";
    $result = mysqli_query($conexion, $sql);

    if (!$result) {
        echo json_encode(["success" => false, "message" => "Error en la consulta SQL: " . mysqli_error($conexion)]);
        exit();
    }

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        // Verificar contraseña
        if (password_verify($password, $row['password'])) {
            echo json_encode(["success" => true, "message" => "Inicio de sesión exitoso.", "redirect" => "../Pagina_empresa/EmpresaPrincipal.html"]);
        } else {
            echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "El correo no está registrado."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
}

mysqli_close($conexion);
?>
