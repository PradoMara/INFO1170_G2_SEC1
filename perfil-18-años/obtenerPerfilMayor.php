<?php
include 'conexion.php';

$idUsuario = $_GET['id']; 

$sql = "SELECT nombre, telefono, correo, acerca_de, experiencia, educacion FROM PostulanteeWHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $idUsuario);
$stmt->execute();
$resultado = $stmt->get_result();
$perfil = $resultado->fetch_assoc();

header('Content-Type: application/json');
echo json_encode($perfil);

$stmt->close();
$conn->close();
?>
