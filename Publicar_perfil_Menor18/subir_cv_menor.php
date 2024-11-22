<?php
include 'conexion.php';

// Ruta del directorio de destino
$directorioDestino = '/home/users/nmartinez/public_html/TallerIntegracion/AraucaniaLaboral/uploads/';

// Verificar y crear el directorio si no existe
if (!is_dir($directorioDestino)) {
    if (!mkdir($directorioDestino, 0755, true)) {
        echo json_encode(['success' => false, 'message' => 'No se pudo crear el directorio de destino.']);
        exit;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['cv'])) {
    $archivo = $_FILES['cv'];

    // Validar errores en la subida
    if ($archivo['error'] !== UPLOAD_ERR_OK) {
        echo json_encode(['success' => false, 'message' => 'Error en la subida del archivo.']);
        exit;
    }

    // Validar tipo de archivo
    $tiposPermitidos = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!in_array($archivo['type'], $tiposPermitidos)) {
        echo json_encode(['success' => false, 'message' => 'Tipo de archivo no permitido. Solo se aceptan PDF y documentos de Word.']);
        exit;
    }

    // Validar tamaño del archivo (máximo 2MB)
    $tamanoMaximo = 2 * 1024 * 1024; // 2 MB
    if ($archivo['size'] > $tamanoMaximo) {
        echo json_encode(['success' => false, 'message' => 'El archivo excede el tamaño máximo permitido (2 MB).']);
        exit;
    }

    // Generar nombre único para el archivo
    $extension = pathinfo($archivo['name'], PATHINFO_EXTENSION);
    $nombreArchivo = uniqid('cv_', true) . '.' . $extension;
    $rutaArchivo = $directorioDestino . $nombreArchivo;

    // Mover el archivo al directorio de destino
    if (move_uploaded_file($archivo['tmp_name'], $rutaArchivo)) {
        // Insertar registro en la base de datos
        $sql = "INSERT INTO archivos_cv_menor (nombre_archivo, ruta_archivo) VALUES (?, ?)";
        $stmt = mysqli_prepare($conexion, $sql);

        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "ss", $nombreArchivo, $rutaArchivo);
            if (mysqli_stmt_execute($stmt)) {
                echo json_encode(['success' => true, 'message' => 'Archivo subido y registrado correctamente.']);
            } else {
                echo json_encode(['success' => false, 'message' => 'Error al registrar el archivo en la base de datos.']);
            }
            $stmt->close();
        } else {
            echo json_encode(['success' => false, 'message' => 'Error al preparar la consulta de la base de datos.']);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al mover el archivo al directorio de destino.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No se ha recibido ningún archivo.']);
}

// Cerrar conexión
mysqli_close($conexion);
