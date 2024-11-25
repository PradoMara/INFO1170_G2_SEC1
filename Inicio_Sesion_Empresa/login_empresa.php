<?php
include 'conexion.php';

// Habilitar errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Configuración de cabecera
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = mysqli_real_escape_string($conexion, trim($_POST['email']));
    $password = trim($_POST['password']);

    if (empty($email) || empty($password)) {
        echo json_encode(["success" => false, "message" => "Por favor, completa todos los campos."]);
        exit();
    }

    $stmt = $conexion->prepare("SELECT * FROM empresas WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result && $result->num_rows > 0) {
        $row = $result->fetch_assoc();

        if (password_verify($password, $row['password'])) {
            echo json_encode(["success" => true, "message" => "Inicio de sesión exitoso.", "redirect" => "../Pagina_empresa/EmpresaPrincipal.html"]);
        } else {
            echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "El correo no está registrado."]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
}

mysqli_close($conexion);
?>
