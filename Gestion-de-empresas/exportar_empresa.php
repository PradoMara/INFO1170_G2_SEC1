<?php
include '../conexion-bd/conexion.php';

// establecer los encabezados para la descarga del archivo CSV
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=empresas.csv');

// abrir el flujo de salida
$output = fopen('php://output', 'w');

// linea de comandos 
fputcsv($output, ['ID Empresa', 'Nombre Empresa', 'Dirección', 'RUT Empresa', 'Descripción Empresa']);

// ejecutar consulta sql
$sql = "SELECT id_Empresa, nombre_Empresa, direccion, rut_Empresa, des_Empresa FROM Empresa WHERE estado_validacion = 'aceptado'";
$result = $conn->query($sql);

if ($result) {
    if ($result->num_rows > 0) {
        // se escribe los datos en un archivo scv
        while ($row = $result->fetch_assoc()) {
            fputcsv($output, $row);
        }
    } else {
        // si no hay dato no escribe nada
        fputcsv($output, ['No hay datos disponibles']);
    }
    $result->free();
} else {
  // por si hay error
    fputcsv($output, ['Error en la consulta: ' . $conn->error]);
}

$conn->close();
fclose($output);
?>
