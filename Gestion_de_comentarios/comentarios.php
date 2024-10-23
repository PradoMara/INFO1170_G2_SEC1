<?php
include 'conexion.php'; 

$sql = "SELECT autor, texto, fecha FROM comentarios ORDER BY fecha DESC";
$resultado = mysqli_query($conexion, $sql);

$comentarios = [];

if ($resultado) {
    while ($fila = mysqli_fetch_assoc($resultado)) {
        $comentarios[] = $fila;
    }
    echo json_encode($comentarios); 
} else {
    echo json_encode(["error" => "No se pudieron obtener los comentarios."]);
}

mysqli_close($conexion);
?>
