<?php
include('/conexion-bd/conexion.php');

$sql = "SELECT usuario, mensaje, fecha FROM Mensajes ORDER BY fecha DESC";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    echo "<p><strong>" . htmlspecialchars($row['usuario']) . ":</strong> " . htmlspecialchars($row['mensaje']) . "</p>";
}
?>
