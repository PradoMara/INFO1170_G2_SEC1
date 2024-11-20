<?php
include '../conexion-bd/conexion.php'; //ruta de la conexion a la db

// establecer el encabezado de tipo de contenido
header('Content-Type: application/json');

// obtener y sanitizar las entradas
$titulo = isset($_GET['titulo']) ? trim($_GET['titulo']) : '';
$ubicacion = isset($_GET['ubicacion']) ? trim($_GET['ubicacion']) : '';
$salario_min = isset($_GET['salario_min']) ? intval($_GET['salario_min']) : 0;

// preparar la consulta base
$sql = "SELECT * FROM Oferta_trabajo WHERE 1=1";
$params = [];
$types = '';

// agregar condiciones a la consulta segun los datos obtenidos
if (!empty($titulo)) {
    $sql .= " AND descripcion LIKE CONCAT('%', ?, '%')";
    $params[] = $titulo;
    $types .= 's';
}

if (!empty($ubicacion)) {
    $sql .= " AND ubicacion LIKE CONCAT('%', ?, '%')";
    $params[] = $ubicacion;
    $types .= 's';
}

if ($salario_min > 0) {
    $sql .= " AND salario >= ?";
    $params[] = $salario_min;
    $types .= 'i';
}

// preparar la sentencia
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    echo json_encode(['error' => 'Error en la preparación de la consulta']);
    exit;
}

// vincular parametros si los hay
if (!empty($params)) {
    $stmt->bind_param($types, ...$params);
}

// ejecutar la consulta
if ($stmt->execute()) {
    $result = $stmt->get_result();
    $ofertas = [];
    while ($row = $result->fetch_assoc()) {
        $ofertas[] = $row;
    }
    echo json_encode($ofertas);
} else {
    echo json_encode(['error' => 'Error en la ejecución de la consulta']);
}

// cerrar la sentencia y la conexion
$stmt->close();
$conn->close();
?>