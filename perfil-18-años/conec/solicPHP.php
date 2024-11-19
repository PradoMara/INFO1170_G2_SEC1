<?php

include '../conexion-bd/conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nacionalidad = $_POST['nacionalidad'];
    $rut = $_POST['rut'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $telefono = $_POST['telefono'];
    $estado_civil = $_POST['estado_civil'];
    $user_id = $_POST['user_id'];
}

$sql = "UPDATE usuarios SET nacionalidad=?, rut=?, fecha_nacimiento=?, telefono=?, estado_civil=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssi", $nacionalidad, $rut, $fecha_nacimiento, $telefono, $estado_civil, $user_id);

if ($stmt->execute()) {
    echo "Perfil actualizado correctamente.";
} else {
    echo "Error al actualizar el perfil: " . $conn->error;
}

$conn->close();
?>