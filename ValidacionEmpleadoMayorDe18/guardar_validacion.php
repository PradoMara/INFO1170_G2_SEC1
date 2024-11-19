<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rut = mysqli_real_escape_string($conexion, $_POST['rut']);
    $direccion = mysqli_real_escape_string($conexion, $_POST['direccion']);
    $edad = intval($_POST['edad']);
    $numeroSerieCarnet = mysqli_real_escape_string($conexion, $_POST['numero-serie-carnet']);

    if (isset($_FILES['archivo-carnet']) && $_FILES['archivo-carnet']['error'] == 0) {
        $archivoTmp = $_FILES['archivo-carnet']['tmp_name'];
        $archivoNombre = $_FILES['archivo-carnet']['name']; // Nombre original
        $archivoTipo = $_FILES['archivo-carnet']['type'];
        $archivoContenido = file_get_contents($archivoTmp); // Leer contenido binario
        $extension = strtolower(pathinfo($archivoNombre, PATHINFO_EXTENSION)); // Extraer la extensión

        // Validar tipo de archivo permitido
        $permitidos = ['pdf', 'png'];
        if (!in_array($extension, $permitidos)) {
            die("Error: Solo se permiten archivos PDF o PNG.");
        }

        // Crear un nombre único para el archivo basado en el número de serie y extensión
        $nombreArchivoConExtension = $numeroSerieCarnet . '.' . $extension;

        // Insertar los datos en la base de datos
        $sql = "INSERT INTO validacion_empleados18 (rut, direccion, edad, numero_serie_carnet, archivo_carnet) 
                VALUES (?, ?, ?, ?, ?)";

        $stmt = mysqli_prepare($conexion, $sql);
        mysqli_stmt_bind_param($stmt, "ssiss", $rut, $direccion, $edad, $nombreArchivoConExtension, $archivoContenido);

        if (mysqli_stmt_execute($stmt)) {
            echo "Validación y archivo guardados exitosamente.";
            header("Location: ../inicio-18años/main.html");
            exit();
        } else {
            echo "Error al guardar los datos: " . mysqli_error($conexion);
        }

        mysqli_stmt_close($stmt);
    } else {
        die("Error: No se subió ningún archivo o hubo un error en la subida.");
    }

    mysqli_close($conexion);
}
?>
