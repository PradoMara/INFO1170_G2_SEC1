<?php
include '../conexion-bd/conexion.php'; // Ajusta la ruta segun corresponda

// establecer el encabezado de tipo de contenido
header('Content-Type: application/json');

// obtener y sanitizar las entradas
$busqueda = isset($_GET['busqueda']) ? trim($_GET['busqueda']) : '';
$destacadas = isset($_GET['destacadas']) ? true : false;

// preparar la consulta base
$sql = "SELECT * FROM Oferta_trabajo WHERE 1=1";
$params = [];
$types = '';

// agregar condiciones a la consulta segun los parámetros proporcionados
if ($busqueda !== '') {
    $sql .= " AND (descripcion LIKE CONCAT('%', ?, '%') OR ubicacion LIKE CONCAT('%', ?, '%') OR requisitos LIKE CONCAT('%', ?, '%'))";
    $params[] = $busqueda;
    $params[] = $busqueda;
    $params[] = $busqueda;
    $types .= 'sss';
}

if ($destacadas) {
    $sql .= " AND destacada = ?";
    $params[] = 1; // 1 TRUE
    $types .= 'i';
}

// preparar la sentencia
$stmt = $conn->prepare($sql);

if ($stmt === false) {
    echo json_encode(['error' => 'Error en la preparación de la consulta']);
    exit;
}

// vinncular parametros si los hay
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