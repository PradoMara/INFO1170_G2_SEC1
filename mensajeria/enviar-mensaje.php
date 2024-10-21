<?php
include ('/conexion-bd/conexion.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mensaje = $_POST['mensaje'];

    if (!empty($mensaje)) {
        $usuario = 1; 
        $sql = "INSERT INTO Mensajes (usuario, mensaje) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $usuario, $mensaje);
        $stmt->execute();
    }
    if ($stmt->execute()) {
        echo "Mensaje enviado correctamente";
    } else {
        echo "Error: " . $conn->error;
    }
    
}
?>
