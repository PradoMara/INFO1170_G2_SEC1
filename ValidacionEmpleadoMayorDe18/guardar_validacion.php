<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rut = $_POST['rut'];
    $direccion = $_POST['direccion'];
    $edad = $_POST['edad'];
    $numeroSerieCarnet = $_POST['numero-serie-carnet']; 

    $sql = "INSERT INTO validacion_empleados18 (rut, direccion, edad, numero_serie_carnet) 
            VALUES ('$rut', '$direccion', '$edad', '$numeroSerieCarnet')";

    if ($conexion->query($sql) === TRUE) {
        echo "Validación guardada exitosamente";
    } else {
        echo "Error en la inserción: " . $conexion->error;
    }

    $conexion->close();
}
?>
