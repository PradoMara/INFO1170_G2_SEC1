<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rut = $_POST['rut'];
    $direccion = $_POST['direccion'];
    $edad = $_POST['edad'];
    $numeroSerieCarnet = $_POST['numero-serie-carnet']; 

    $sql = "INSERT INTO validacion_empleados18 (rut, direccion, edad, numero_serie_carnet) 
            VALUES ('$rut', '$direccion', '$edad', '$numeroSerieCarnet')";

    if (mysqli_query($conexion, $sql)) {
        header("Location: ../inicio-18años/main.html");
        exit();
    } else {
        echo "Error en la inserción: " . mysqli_error($conexion);
    }

    mysqli_close($conexion);
}
?>
