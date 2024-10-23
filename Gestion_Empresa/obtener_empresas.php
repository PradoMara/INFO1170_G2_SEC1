<?php
include '/conexion-bd/conexion.php';

// Obtener empresas con estado de validación "aceptado"
$sql = "SELECT id_Empresa, nombre_Empresa, direccion, rut_Empresa, des_Empresa FROM Empresa WHERE estado_validacion = 'aceptado'";
$result = $conn->query($sql);

$empresas = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $empresas[] = $row;
    }
}

echo json_encode($empresas);
?>
