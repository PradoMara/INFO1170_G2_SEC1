<?php
include 'conexion.php';

if (!isset($_GET['id'])) {
    echo json_encode(['error' => 'ID no proporcionado']);
    exit;
}

$idValidacion = $_GET['id'];

if ($conn->connect_error) {
    echo json_encode(['error' => 'Error de conexión a la base de datos: ' . $conn->connect_error]);
    exit;
}

$sql = "SELECT fecha_nacimiento, tipo_archivo, archivo, tipo_permiso, permiso, fecha_subida 
        FROM ValidacionMenor18 WHERE id = ?";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode(['error' => 'Error al preparar la consulta']);
    exit;
}

$stmt->bind_param("i", $idValidacion);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    $validacion = $resultado->fetch_assoc();
    header('Content-Type: application/json');
    echo json_encode($validacion);
} else {
    echo json_encode(['error' => 'No se encontró la validación']);
}

$stmt->close();
$conn->close();
?>
