<?php
include 'conexion.php';  

if (isset($_GET['id'])) {
    $idEmpresa = $_GET['id'];

    $sql = "SELECT id_Empresa, razonSocial, registroTributario, direccionFiscal, correoCooperativo, estado
            FROM verificacionEmpresa 
            WHERE id_Empresa = ?";

    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param('i', $idEmpresa); 
        $stmt->execute();
        $resultado = $stmt->get_result();
        $empresa = $resultado->fetch_assoc();

        header('Content-Type: application/json');
        echo json_encode($empresa);
    } else {
        echo json_encode(['error' => 'Error al preparar la consulta']);
    }

    $stmt->close();
} else {
    echo json_encode(['error' => 'ID de empresa no proporcionado']);
}

$conn->close();
?>
