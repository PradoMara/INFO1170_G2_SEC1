<?php
include 'conexion.php'; 

$idAdmin = $_GET['id'];

if (!$idAdmin) {
    echo json_encode(['error' => 'ID de administrador no proporcionado']);
    exit;
}

$sql = "SELECT nombre, correo, rol, telefono, acerca_de, experiencia, educacion FROM Administradoor WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $idAdmin);
$stmt->execute();
$resultado = $stmt->get_result();
$admin = $resultado->fetch_assoc();

header('Content-Type: application/json');
echo json_encode($admin);

$stmt->close();
$conn->close();
?>
