<?php
include '../conexion-bd/conexion.php'; 

// obtener y validar las entradas
$id_Oferta = isset($_POST['id_Oferta']) ? intval($_POST['id_Oferta']) : 0;
$destacada = isset($_POST['destacada']) ? intval($_POST['destacada']) : 0;

// verificar que los parametros sean validos
if ($id_Oferta > 0 && ($destacada == 0 || $destacada == 1)) {
    // preparar la consulta
    $sql = "UPDATE Oferta_trabajo SET destacada = ? WHERE id_Oferta = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $destacada, $id_Oferta);

    // ejecutar y verificar el resultado
    if ($stmt->execute()) {
        echo "Oferta actualizada correctamente.";
    } else {
        echo "Error al actualizar la oferta: " . $stmt->error;
    }

    // cerrar la sentencia
    $stmt->close();
} else {
    echo "Datos inválidos.";
}

// cerrar la conexion
$conn->close();
?>
