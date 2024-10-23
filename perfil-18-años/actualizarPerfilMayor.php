<?php
include 'conexion.php'; 

$data = json_decode(file_get_contents("php://input"), true);

$telefono = $data['telefono'];
$correo = $data['correo'];
$acercaDe = $data['acercaDe'];
$experiencia = $data['experiencia'];
$educacion = $data['educacion'];

$idUsuario = 1; 

$sql = "UPDATE Postulantee SET telefono = ?, correo = ?, acerca_de = ?, experiencia = ?, educacion = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi", $telefono, $correo, $acercaDe, $experiencia, $educacion, $idUsuario);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => $conn->error]);
}

$stmt->close();
$conn->close();
?>
