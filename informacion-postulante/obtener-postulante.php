<?php
function obtenerPostulante($conn, $id) {
    // validar que el id sea un entero valido
    $id = intval($id);
    if ($id <= 0) {
        return null; // ID invalido
    }

    $sql = "SELECT * FROM postulantes WHERE id = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        error_log("Error en la preparación de la consulta: " . $conn->error);
        return null;
    }

    $stmt->bind_param("i", $id);
    if ($stmt->execute() === false) {
        error_log("Error en la ejecución de la consulta: " . $stmt->error);
        $stmt->close();
        return null;
    }

    $result = $stmt->get_result();
    $postulante = $result->fetch_assoc();

    $stmt->close();
    return $postulante;
}
?>