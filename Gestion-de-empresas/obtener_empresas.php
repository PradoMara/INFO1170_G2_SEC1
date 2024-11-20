<?php
include '../conexion-bd/conexion.php';

// establecer el encabezado de tipo de contenido
header('Content-Type: application/json');

// preparar la consulta
$sql = "SELECT id_Empresa, nombre_Empresa, direccion, rut_Empresa, des_Empresa FROM Empresa WHERE estado_validacion = 'aceptado'";
$result = $conn->query($sql);

$empresas = [];

if ($result) {
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $empresas[] = $row;
        }
    }
    $result->free();
} else {
    echo json_encode(['error' => 'Error en la consulta: ' . $conn->error]);
    exit;
}

echo json_encode($empresas);

// cerrar la conexion
$conn->close();
?>