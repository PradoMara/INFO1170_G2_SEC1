<?php
// Conexión a la base de datos
include 'conexion.php';

$sql = "SELECT id_postulante, AVG(calificacion) AS promedio_calificacion FROM calificaciones GROUP BY id_postulante";
$result = $conn->query($sql);

$calificaciones = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $calificaciones[$row['id_postulante']] = $row['promedio_calificacion'];
    }
}

echo json_encode($calificaciones);

$conn->close();
?>
