<?php
include '../conexion-bd/conexion.php'; 

// obtener y validar la entrada
$id_Empresa = isset($_POST['id_Empresa']) ? intval($_POST['id_Empresa']) : 0;

if ($id_Empresa > 0) {
    // preparar la consulta
    $sql = "DELETE FROM Empresa WHERE id_Empresa = ?";
    $stmt = $conn->prepare($sql);
    
    if ($stmt) {
        $stmt->bind_param("i", $id_Empresa);
        
        if ($stmt->execute()) {
            echo "Empresa eliminada correctamente.";
        } else {
            echo "Error al eliminar empresa: " . $stmt->error;
        }
        
        $stmt->close();
    } else {
        echo "Error en la preparación de la consulta: " . $conn->error;
    }
} else {
    echo "ID de empresa inválido.";
}

$conn->close();
?>