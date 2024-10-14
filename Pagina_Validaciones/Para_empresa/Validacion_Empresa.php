<?php
require_once 'conexion-bd/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $razonSocial = $_POST["razonSocial"];
    $registroTributario = $_POST["registroTributario"];
    $direccionSocial = $_POST["direccionSocial"];
    $correoCooperativo = $_POST["correoCooperativo"];

    if (empty($razonSocial) || empty($registroTributario) || empty($direccionSocial) || empty($correoCooperativo)) {
        echo "Todos los campos son obligatorios.";
        exit;
    }

    $nombreArchivo = $_FILES["documento"]["name"];
    $tipoArchivo = $_FILES["documento"]["type"];
    $tamanoArchivo = $_FILES["documento"]["size"];
    $rutaTemporal = $_FILES["documento"]["tmp_name"];
    
    $directorioSubida = "uploads/";
    $rutaArchivo = $directorioSubida . basename($nombreArchivo);

    if (move_uploaded_file($rutaTemporal, $rutaArchivo)) {
        $sqlEmpresa = "INSERT INTO Empresa (razon_Social, registro_Tributario, direccion_Social, correo_Cooperativo) 
                       VALUES (?, ?, ?, ?)";

        $stmt = $conexion->prepare($sqlEmpresa);
        $stmt->bind_param("ssss", $razonSocial, $registroTributario, $direccionSocial, $correoCooperativo);

        if ($stmt->execute()) {
            $idEmpresa = $stmt->insert_id;

            $sqlDocumento = "INSERT INTO Documentos_Empresa (id_Empresa, nom_Documento, tipo_Documento, size, ubicacion_Archivo) 
                             VALUES (?, ?, ?, ?, ?)";
            
            $stmtDoc = $conexion->prepare($sqlDocumento);
            $stmtDoc->bind_param("issis", $idEmpresa, $nombreArchivo, $tipoArchivo, $tamanoArchivo, $rutaArchivo);

            if ($stmtDoc->execute()) {
                echo "Empresa registrada y documento subido con éxito.";
            } else {
                echo "Error al registrar el documento: " . $stmtDoc->error;
            }
        } else {
            echo "Error al registrar la empresa: " . $stmt->error;
        }
    } else {
        echo "Error al subir el archivo.";
    }
}

$conexion->close();
?>
