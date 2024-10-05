<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $rut = $_POST['rut'];
    $direccion = $_POST['direccion'];
    $edad = $_POST['edad'];

    $carnet_frontal = $_FILES['carnet-frontal'];
    $carnet_reverso = $_FILES['carnet-reverso'];

    if (empty($nombre) || empty($apellidos) || empty($rut) || empty($direccion) || empty($edad)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    $upload_dir = 'uploads/';
    $frontal_path = $upload_dir . basename($carnet_frontal['name']);
    $reverso_path = $upload_dir . basename($carnet_reverso['name']);

    if (move_uploaded_file($carnet_frontal['tmp_name'], $frontal_path) && move_uploaded_file($carnet_reverso['tmp_name'], $reverso_path)) {
        echo "Validación exitosa. Archivos subidos correctamente.";
    } else {
        echo "Error al subir los archivos.";
    }
}
?>
