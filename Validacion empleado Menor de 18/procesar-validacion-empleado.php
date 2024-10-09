<?php
function validarRUT($rut) {
    return preg_match('/^[0-9]{1,8}-[0-9kK]{1}$/', $rut);
}

function esImagenValida($archivo) {
    $tipoArchivo = strtolower(pathinfo($archivo['name'], PATHINFO_EXTENSION));
    $tiposPermitidos = ['jpg', 'jpeg', 'png'];
    return in_array($tipoArchivo, $tiposPermitidos);
}

function crearDirectorioSiNoExiste($directorio) {
    if (!is_dir($directorio)) {
        mkdir($directorio, 0755, true);
    }
}

function sanitizarNombreArchivo($nombre) {
    return preg_replace('/[^a-zA-Z0-9_-]/', '_', $nombre);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $apellidos = htmlspecialchars(trim($_POST['apellidos']));
    $rut = htmlspecialchars(trim($_POST['rut']));
    $direccion = htmlspecialchars(trim($_POST['direccion']));
    $edad = intval($_POST['edad']);

    $carnet_frontal = $_FILES['carnet-frontal'];
    $carnet_reverso = $_FILES['carnet-reverso'];

    $errores = [];

    if (empty($nombre)) {
        $errores[] = "El nombre es obligatorio.";
    }
    if (empty($apellidos)) {
        $errores[] = "Los apellidos son obligatorios.";
    }
    if (empty($rut)) {
        $errores[] = "El RUT es obligatorio.";
    }
    if (empty($direccion)) {
        $errores[] = "La dirección es obligatoria.";
    }
    if ($edad < 15) {
        $errores[] = "Debes tener al menos 15 años.";
    }
    
    if (!validarRUT($rut)) {
        $errores[] = "El RUT ingresado no es válido. Debe tener el formato 12345678-9.";
    }

    $maxSize = 2 * 1024 * 1024; 
    if (!esImagenValida($carnet_frontal) || !esImagenValida($carnet_reverso)) {
        $errores[] = "Solo se permiten archivos de imagen en formato JPG, JPEG o PNG.";
    }

    if ($carnet_frontal['size'] > $maxSize || $carnet_reverso['size'] > $maxSize) {
        $errores[] = "El tamaño de las imágenes no debe superar los 2MB.";
    }

    if (!empty($errores)) {
        foreach ($errores as $error) {
            echo $error . "<br>";
        }
        exit;
    }

    $upload_dir = 'uploads/';
    crearDirectorioSiNoExiste($upload_dir);

    $frontal_path = $upload_dir . sanitizarNombreArchivo(basename($carnet_frontal['name']));
    $reverso_path = $upload_dir . sanitizarNombreArchivo(basename($carnet_reverso['name']));

    if (move_uploaded_file($carnet_frontal['tmp_name'], $frontal_path) && 
        move_uploaded_file($carnet_reverso['tmp_name'], $reverso_path)) {
        echo "Validación exitosa. Archivos subidos correctamente.";
    } else {
        echo "Error al subir los archivos. Inténtalo nuevamente. " . error_get_last()['message'];
    }
}
?>
