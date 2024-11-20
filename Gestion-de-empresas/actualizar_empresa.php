<?php
include '../conexion-bd/conexion.php'; 

// obtener y sanitizar las entradas
$id_Empresa = isset($_POST['id_Empresa']) ? intval($_POST['id_Empresa']) : 0;
$nombre = isset($_POST['nombre_Empresa']) ? trim($_POST['nombre_Empresa']) : '';
$direccion = isset($_POST['direccion']) ? trim($_POST['direccion']) : '';
$rut = isset($_POST['rut_Empresa']) ? trim($_POST['rut_Empresa']) : '';
$descripcion = isset($_POST['des_Empresa']) ? trim($_POST['des_Empresa']) : '';

// validar campos obligatorios
if ($id_Empresa == 0 || empty($nombre) || empty($direccion) || empty($rut)) {
    echo "Todos los campos obligatorios deben ser completados.";
    exit;
}

// preparar la consulta SQL utilizando sentencias preparadas
$sql = "UPDATE Empresa SET nombre_Empresa = ?, direccion = ?, rut_Empresa = ?, des_Empresa = ? WHERE id_Empresa = ?";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("ssssi", $nombre, $direccion, $rut, $descripcion, $id_Empresa);

    if ($stmt->execute()) {
        echo "Empresa actualizada correctamente.";
    } else {
        echo "Error al actualizar empresa: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Error en la preparación de la consulta: " . $conn->error;
}

$conn->close();
?>