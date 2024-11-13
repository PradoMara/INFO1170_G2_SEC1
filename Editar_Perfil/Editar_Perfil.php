<?php
include 'conexion.php';

$idAdmin = $_GET['id']; 

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$acerca_de = $_POST['acerca_de'];
$experiencia = $_POST['experiencia'];
$educacion = $_POST['educacion'];

$sql = "UPDATE Administradoor SET nombre = ?, correo = ?, telefono = ?, acerca_de = ?, experiencia = ?, educacion = ? WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssssi", $nombre, $correo, $telefono, $acerca_de, $experiencia, $educacion, $idAdmin);

if ($stmt->execute()) {
    echo "Perfil actualizado con éxito.";
} else {
    echo "Error al actualizar el perfil: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
