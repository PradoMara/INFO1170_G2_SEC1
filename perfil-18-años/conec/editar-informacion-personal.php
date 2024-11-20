<?php
session_start();

if (!isset($_SESSION['id_usuario'])) {
    echo "No has iniciado sesión.";
    exit;
}

include '../conexion-bd/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id_usuario = $_SESSION['id_usuario'];
    $telefono = trim($_POST['telefono']);
    $estado_civil = trim($_POST['estado_civil']);

    // validar entradas
    if (empty($telefono) || empty($estado_civil)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    if (!preg_match('/^[0-9]{8,15}$/', $telefono)) {
        echo "El número de teléfono no es válido.";
        exit;
    }

    // preparar la consulta SQL
    $sql = "UPDATE Usuario SET telefono = ?, estado_civil = ? WHERE id_usuario = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("ssi", $telefono, $estado_civil, $id_usuario);

        if ($stmt->execute()) {
            echo "Se ha cambiado la información correctamente.<br>";
        } else {
            error_log("Error en la ejecución de la consulta: " . $stmt->error);
            echo "Error al intentar cambiar la información. Por favor, inténtalo de nuevo.<br>";
        }

        $stmt->close();
    } else {
        error_log("Error en la preparación de la consulta: " . $conn->error);
        echo "Error al intentar cambiar la información. Por favor, inténtalo de nuevo.<br>";
    }

    $conn->close();
}
?>
