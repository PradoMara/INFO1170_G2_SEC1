<?php
function obtenerPostulante($conn, $id) {
    $sql = "SELECT * FROM postulantes WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    return $result->fetch_assoc();
}
?>
