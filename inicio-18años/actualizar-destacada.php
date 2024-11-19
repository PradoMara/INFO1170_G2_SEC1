<?php
include '/conexion-bd/conexion.php';

$id_Oferta = $_POST['id_Oferta'];
$destacada = $_POST['destacada']; /
$sql = "UPDATE Oferta_trabajo SET destacada = $destacada WHERE id_Oferta = $id_Oferta";

if ($conn->query($sql) === TRUE) {
    echo "Oferta actualizada correctamente.";
} else {
    echo "Error al actualizar la oferta: " . $conn->error;
}
?>
