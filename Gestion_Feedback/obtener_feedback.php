<?php
include 'conexion.php';

header('Content-Type: application/json');

$query = "SELECT id, rating, comments, created_at FROM feedback ORDER BY created_at DESC";
$result = $conn->query($query);

$feedback = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $feedback[] = $row;
    }
    echo json_encode($feedback);
} else {
    echo json_encode(['error' => 'No hay feedback disponible']);
}

$conn->close();
?>
