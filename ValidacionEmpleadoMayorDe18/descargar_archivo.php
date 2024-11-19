<?php
include 'conexion.php';

if (isset($_GET['id'])) {
    $id = intval($_GET['id']); // Validar el ID recibido

    // Consulta para recuperar el archivo
    $sql = "SELECT archivo_carnet, numero_serie_carnet FROM validacion_empleados18 WHERE id = ?";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_bind_result($stmt, $archivoContenido, $nombreArchivoConExtension);
    mysqli_stmt_fetch();

    if ($archivoContenido) {
        // Detectar el tipo MIME basado en la extensión
        $extension = strtolower(pathinfo($nombreArchivoConExtension, PATHINFO_EXTENSION));
        $tipoMime = $extension === 'png' ? "image/png" : ($extension === 'pdf' ? "application/pdf" : "application/octet-stream");

        // Enviar encabezados correctos
        header("Content-Type: $tipoMime");
        header("Content-Disposition: attachment; filename=$nombreArchivoConExtension");
        echo $archivoContenido; // Enviar el contenido binario del archivo
    } else {
        echo "Archivo no encontrado.";
    }

    mysqli_stmt_close($stmt);
} else {
    echo "ID no proporcionado.";
}

mysqli_close($conexion);
?>
