<?php
include '/conexion-bd/conexion.php';

$id_Empresa = $_POST['id_Empresa'];

$sql = "DELETE FROM Empresa WHERE id_Empresa = $id_Empresa";

if ($conn->query($sql) === TRUE) {
    echo "Empresa eliminada correctamente.";
} else {
    echo "Error al eliminar empresa: " . $conn->error;
}
?>
