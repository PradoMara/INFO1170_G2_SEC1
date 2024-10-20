<?php
include 'conexion.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $accion = $_POST['accion'];
    $idEmpresa = $_POST['idEmpresa'];

    $nuevoEstado = ($accion === 'aceptar') ? 'aceptada' : 'rechazada';

    $sql = "UPDATE verificacionEmpresa SET estado = ? WHERE id_Empresa = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('si', $nuevoEstado, $idEmpresa);

    if ($stmt->execute()) {
        echo "Estado de la empresa actualizado a $nuevoEstado";
    } else {
        echo "Error al actualizar el estado: " . $conn->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Solicitud no válida";
}
?>
