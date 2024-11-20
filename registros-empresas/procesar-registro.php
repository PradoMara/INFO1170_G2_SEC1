<?php
include '../conexion-bd/conexion.php';
 
// validar el token csrf 
if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die(json_encode(['error' => 'token CSRF invalido o ausente']));
}

// obtener y validar las entradas de forma estricta
$nombre_empresa = isset($_POST['nombre_empresa']) ? htmlspecialchars(trim($_POST['nombre_empresa'])) : '';
$rut = isset($_POST['rut']) ? htmlspecialchars(trim($_POST['rut'])) : '';
$direccion = isset($_POST['direccion']) ? htmlspecialchars(trim($_POST['direccion'])) : '';
$ciudad = isset($_POST['ciudad']) ? htmlspecialchars(trim($_POST['ciudad'])) : '';
$codigo_postal = isset($_POST['codigo_postal']) ? htmlspecialchars(trim($_POST['codigo_postal'])) : '';
$telefono = isset($_POST['telefono']) ? htmlspecialchars(trim($_POST['telefono'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : '';
$contacto = isset($_POST['contacto']) ? htmlspecialchars(trim($_POST['contacto'])) : '';
$puesto = isset($_POST['puesto']) ? htmlspecialchars(trim($_POST['puesto'])) : '';
$descripcion = isset($_POST['descripcion']) ? htmlspecialchars(trim($_POST['descripcion'])) : '';
$id_usuario = isset($_POST['id_usuario']) ? intval($_POST['id_usuario']) : 0;

// validar campos obligatorios
if (empty($nombre_empresa) || empty($rut) || empty($direccion) || empty($ciudad) || empty($email) || !$email) {
    die(json_encode(['error' => 'campos obligatorios faltantes o invalidos']));
}

// generar token csrf para evitar ataques csrf
session_start();
if (!isset($_SESSION['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
    die(json_encode(['error' => 'token csrf invalido']));
}

// preparar la consulta segura con pdo
try {
    $stmt = $pdo->prepare('INSERT INTO empresas (nombre_empresa, rut, direccion, ciudad, codigo_postal, telefono, email, contacto, puesto, descripcion, id_usuario) 
                           VALUES (:nombre_empresa, :rut, :direccion, :ciudad, :codigo_postal, :telefono, :email, :contacto, :puesto, :descripcion, :id_usuario)');
    
    $stmt->execute([
        ':nombre_empresa' => $nombre_empresa,
        ':rut' => $rut,
        ':direccion' => $direccion,
        ':ciudad' => $ciudad,
        ':codigo_postal' => $codigo_postal,
        ':telefono' => $telefono,
        ':email' => $email,
        ':contacto' => $contacto,
        ':puesto' => $puesto,
        ':descripcion' => $descripcion,
        ':id_usuario' => $id_usuario,
    ]);

    echo json_encode(['success' => 'registro insertado correctamente']);
} catch (Exception $e) {
    // registrar el error en un archivo seguro para su revision
    error_log('error al insertar registro: ' . $e->getMessage());
    die(json_encode(['error' => 'error interno del servidor']));
}
?>
