<?php

include 'conexion.php';

$sql = "SELECT * FROM ofertas_empleo WHERE disponible = 1 ORDER BY fecha_publicacion DESC";
$resultado = mysqli_query($conexion, $sql);

$ofertas = [];

if (mysqli_num_rows($resultado) > 0) {
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $ofertas[] = $fila;
    }
}

echo json_encode($ofertas);

mysqli_close($conexion);
?>
