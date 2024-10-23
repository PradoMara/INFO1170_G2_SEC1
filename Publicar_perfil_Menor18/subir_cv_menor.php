<?php

include 'conexion.php';

$directorioDestino = '/home/users/nmartinez/public_html/TallerIntegracion/AraucaniaLaboral/uploads/'; 

if (!is_dir($directorioDestino)) {
    mkdir($directorioDestino, 0755, true); 
}

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_FILES['cv'])) {
    $archivo = $_FILES['cv'];

    if ($archivo['error'] === UPLOAD_ERR_OK) {
        $nombreArchivo = basename($archivo['name']);
        $rutaArchivo = $directorioDestino . $nombreArchivo;

        if (move_uploaded_file($archivo['tmp_name'], $rutaArchivo)) {

            $sql = "INSERT INTO archivos_cv_menor (nombre_archivo, ruta_archivo) VALUES (?, ?)";
            $stmt = mysqli_prepare($conexion, $sql);

            if ($stmt) {
                mysqli_stmt_bind_param($stmt, "ss", $nombreArchivo, $rutaArchivo);
                mysqli_stmt_execute($stmt);
                echo "Archivo subido y registrado en la base de datos correctamente.";
            } else {
                echo "Error al preparar la consulta a la base de datos.";
            }
        } else {
            echo "Error al mover el archivo a la carpeta de destino.";
        }
    } else {
        echo "Error en la subida del archivo.";
    }
} else {
    echo "No se ha recibido ningún archivo.";
}

mysqli_close($conexion);
