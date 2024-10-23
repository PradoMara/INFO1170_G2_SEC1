<?php
include '/conexion-bd/conexion.php';

$id_Empresa = $_POST['id_Empresa'];
$nombre = $_POST['nombre_Empresa'];
$direccion = $_POST['direccion'];
$rut = $_POST['rut_Empresa'];
$descripcion = $_POST['des_Empresa'];

$sql = "UPDATE Empresa SET nombre_Empresa = '$nombre', direccion = '$direccion', rut_Empresa = '$rut', des_Empresa = '$descripcion' WHERE id_Empresa = $id_Empresa";

if ($conn->query($sql) === TRUE) {
    echo "Empresa actualizada correctamente.";
} else {
    echo "Error al actualizar empresa: " . $conn->error;
}
?>
