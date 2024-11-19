
<?php
include '/conexion-bd/conexion.php'; 

$nombre_empresa = $_POST['nombre-empresa'];
$rut = $_POST['rut'];
$direccion = $_POST['direccion'];
$ciudad = $_POST['ciudad'];
$codigo_postal = $_POST['codigo-postal'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$contacto = $_POST['contacto'];
$puesto = $_POST['puesto'];
$descripcion = $_POST['descripcion'];
$id_usuario = $_POST['id_usuario'];  


$sql = "INSERT INTO Empresa (nombre_Empresa, direccion, rut_Empresa, ciudad, codigo_postal, telefono, email, contacto_principal, puesto_contacto, des_Empresa, id_Usuario) 
        VALUES ('$nombre_empresa', '$direccion', '$rut', '$ciudad', '$codigo_postal', '$telefono', '$email', '$contacto', '$puesto', '$descripcion', $id_usuario)";

if ($conn->query($sql) === TRUE) {
    echo "Registro completado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
