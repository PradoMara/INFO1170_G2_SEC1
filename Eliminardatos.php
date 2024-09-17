<?php
$conn = new mysqli("localhost", "usuario", "contraseña", "base_de_datos");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$id = $_POST['id']; // ID del dato a eliminar, proporcionado por el usuario
$sql = "DELETE FROM tabla WHERE id = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $id);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Registro eliminado exitosamente";
} else {
    echo "No se encontró el registro";
}

$stmt->close();
$conn->close();
?>
