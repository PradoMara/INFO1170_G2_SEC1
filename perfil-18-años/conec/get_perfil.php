<?php
session_start();
include '/conexion-bd/conexion.php';

$user_id = $_SESSION['user_id'];

$sql = "SELECT nombre, telefono, email FROM usuarios WHERE id='$user_id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode([]);
}
?>
