<?php
include '/conexion-bd/conexion.php';

$titulo = $_GET['titulo'] ?? '';
$ubicacion = $_GET['ubicacion'] ?? '';
$salario_min = $_GET['salario_min'] ?? 0;

// Construir la consulta SQL con los filtros aplicados
$sql = "SELECT * FROM Oferta_trabajo WHERE 1";

if (!empty($titulo)) {
    $sql .= " AND descripcion LIKE '%$titulo%'";
}
if (!empty($ubicacion)) {
    $sql .= " AND ubicacion LIKE '%$ubicacion%'";
}
if (!empty($salario_min)) {
    $sql .= " AND salario >= $salario_min";
}

$result = $conn->query($sql);

$ofertas = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $ofertas[] = $row;
    }
}

echo json_encode($ofertas);
?>
