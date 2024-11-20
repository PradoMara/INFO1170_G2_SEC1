<?php

include "conexion.php";

header('Content-Type: application/json');

if (!$conexion || $conexion->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Error de conexión a la base de datos.']);
    exit;
}

if (isset($_FILES['archivo'], $_FILES['permiso']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK && $_FILES['permiso']['error'] === UPLOAD_ERR_OK) {
    $fechaNacimiento = $_POST['fecha_nacimiento'];

    $tipoArchivo = $_FILES['archivo']['type'];
    $contenidoArchivo = file_get_contents($_FILES['archivo']['tmp_name']);

    $tipoPermiso = $_FILES['permiso']['type'];
    $contenidoPermiso = file_get_contents($_FILES['permiso']['tmp_name']);

    $stmt = $conexion->prepare("INSERT INTO ValidacionMenor18 (fecha_nacimiento, tipo_archivo, archivo, tipo_permiso, permiso) VALUES (?, ?, ?, ?, ?)");
    if (!$stmt) {
        echo json_encode(['success' => false, 'message' => 'Error al preparar la consulta: ' . $conexion->error]);
        exit;
    }

    $stmt->bind_param("sssss", $fechaNacimiento, $tipoArchivo, $contenidoArchivo, $tipoPermiso, $contenidoPermiso);

    if ($stmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Validación registrada exitosamente.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al guardar los datos en la base de datos: ' . $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Debe seleccionar ambos archivos (archivo principal y permiso legal).']);
}

$conexion->close();
?>
