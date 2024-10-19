<?php

include 'conexion.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // $id_usuario = se obtiene del login del usuario
    $telefono= $_POST['telefono'];
    $estado_civil = $_POST['estado-civil'];

    $sql = "UPDATE Usuario SET 
    telefono = '$telefono', estado_civil = '$estado_civil'
    WHERE id_usuario = '$id_usuario'";
    if ($conn->query($sql) === TRUE) {
        echo "Se ha cambiado la informacion correctamente.<br>";
    } else {
        echo "Error al intentar cambiar la informacion: " . $conn->error . "<br>";
    }
}
?>
