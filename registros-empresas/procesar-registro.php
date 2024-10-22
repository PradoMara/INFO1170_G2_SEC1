
<?php
include '/conexion-bd/conexion.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
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
    $contraseña = password_hash($_POST['contraseña'], PASSWORD_DEFAULT); 

    
    $sql = "INSERT INTO Empresa (nombre_Empresa, rut_Empresa, direccion, ciudad, codigo_postal, telefono, email, contacto, puesto_contacto, descripcion, contraseña)
            VALUES ('$nombre_empresa', '$rut', '$direccion', '$ciudad', '$codigo_postal', '$telefono', '$email', '$contacto', '$puesto', '$descripcion', '$contraseña')";

    
    if ($conn->query($sql) === TRUE) {
        echo "Registro exitoso. La empresa ha sido registrada.";
    } else {
        echo "Error al registrar la empresa: " . $conn->error;
    }


    $conn->close();
}
?>
