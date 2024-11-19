<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'conexion.php'; 

$pagina = isset($_GET['pagina']) ? (int)$_GET['pagina'] : 1;
$limite = 3;
$inicio = ($pagina - 1) * $limite;

if ($conn->connect_error) {
    die("Error en la conexión: " . $conn->connect_error);
}

$sql = "SELECT id_Empresa, razonSocial, registroTributario, direccionFiscal, correoCooperativo, estado 
        FROM verificacionEmpresa 
        LIMIT $inicio, $limite";

$resultado = $conn->query($sql);

if (!$resultado) {
    die("Error en la consulta SQL: " . $conn->error);
}

$solicitudes = [];

if ($resultado->num_rows > 0) {
    while ($fila = $resultado->fetch_assoc()) {
        $solicitudes[] = $fila;
    }
}

$sqlTotal = "SELECT COUNT(*) as total FROM verificacionEmpresa";
$resultadoTotal = $conn->query($sqlTotal);
$totalSolicitudes = $resultadoTotal->fetch_assoc()['total'] ?? 0; 

header('Content-Type: application/json');
echo json_encode([
    'solicitudes' => $solicitudes,
    'totalSolicitudes' => $totalSolicitudes,
    'paginaActual' => $pagina,
    'limite' => $limite
]);

$conn->close();
?>
