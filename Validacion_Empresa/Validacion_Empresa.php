<?php
require 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $razonSocial = $_POST['razonSocial'];
    $registroTributario = $_POST['registroTributario'];
    $direccionFiscal = $_POST['direccionFiscal'];
    $correoCooperativo = $_POST['correoCooperativo'];
    $archivo = $_FILES['archivoEmpresa'];

    if ($archivo['error'] === UPLOAD_ERR_OK) {
        $tipoArchivo = $archivo['type'];
        $contenidoArchivo = file_get_contents($archivo['tmp_name']); // Lee el archivo como binario

        $sql = "INSERT INTO verificacionEmpresa 
                (razonSocial, registroTributario, direccionFiscal, correoCooperativo, estado, tipoArchivo, archivo) 
                VALUES (?, ?, ?, ?, 'pendiente', ?, ?)";
        $stmt = $conexion->prepare($sql);
        $stmt->bind_param(
            "sssssb", 
            $razonSocial, 
            $registroTributario, 
            $direccionFiscal, 
            $correoCooperativo, 
            $tipoArchivo, 
            $contenidoArchivo
        );

        if ($stmt->execute()) {
            echo "Datos y archivo subidos correctamente.";
        } else {
            echo "Error al subir los datos: " . $stmt->error;
        }
    } else {
        echo "Error al subir el archivo.";
    }
}
?>
