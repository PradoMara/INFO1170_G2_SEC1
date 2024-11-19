<?php
include '/conexion-bd/conexion.php'; 

$busqueda = isset($_GET['busqueda']) ? $_GET['busqueda'] : '';
$destacadas = isset($_GET['destacadas']) ? true : false;

$sql = "SELECT * FROM Oferta_trabajo WHERE 1";

if ($busqueda != '') {
    $sql .= " AND (descripcion LIKE '%$busqueda%' OR ubicacion LIKE '%$busqueda%' OR requisitos LIKE '%$busqueda%')";
}

if ($destacadas) {
    $sql .= " AND destacada = TRUE";
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
