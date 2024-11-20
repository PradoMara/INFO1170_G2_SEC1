<?php
include '../conexion-bd/conexion.php';

// Obtener y sanitizar las entradas
$nombre_empresa = isset($_POST['nombre_empresa']) ? trim($_POST['nombre_empresa']) : '';
$rut = isset($_POST['rut']) ? trim($_POST['rut']) : '';
$direccion = isset($_POST['direccion']) ? trim($_POST['direccion']) : '';
$ciudad = isset($_POST['ciudad']) ? trim($_POST['ciudad']) : '';
$codigo_postal = isset($_POST['codigo_postal']) ? trim($_POST['codigo_postal']) : '';
$telefono = isset($_POST['telefono']) ? trim($_POST['telefono']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$contacto = isset($_POST['contacto']) ? trim($_POST['contacto']) : '';
$puesto = isset($_POST['puesto']) ? trim($_POST['puesto']) : '';
$descripcion = isset($_POST['descripcion']) ? trim($_POST['descripcion']) : '';
$id_usuario = isset($_POST['id_usuario']) ? intval($_POST['id_usuario']) : 0;

// vaalidar campos obligatorios
if (empty($nombre_empresa) || empty($rut) || empty($direccion) || empty($ciudad) || empty($telefono) || empty($email) || $id_usuario == 0) {
    echo "Todos los campos obligatorios deben ser completados.";
    exit;
}

// preparar la consulta
$sql = "INSERT INTO Empresa (nombre_Empresa, direccion, rut_Empresa, ciudad, codigo_postal, telefono, email, contacto_principal, puesto_contacto, des_Empresa, id_Usuario) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    $stmt->bind_param("ssssssssssi", $nombre_empresa, $direccion, $rut, $ciudad, $codigo_postal, $telefono, $email, $contacto, $puesto, $descripcion, $id_usuario);

    if ($stmt->execute()) {
        echo "Registro completado exitosamente";
    } else {
        echo "Error al registrar: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Error en la preparación de la consulta: " . $conn->error;
}

$conn->close();
?>
