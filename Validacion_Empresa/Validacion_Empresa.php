<?php
include 'conexion.php';

$razonSocial = $_POST['razonSocial'];
$registroTributario = $_POST['registroTributario'];
$direccionFiscal = $_POST['direccionFiscal'];
$correoCooperativo = $_POST['emailEmpresa'];

$sql = "INSERT INTO verificacionEmpresa (razonSocial, registroTributario, direccionFiscal, correoCooperativo) 
        VALUES ('$razonSocial', '$registroTributario', '$direccionFiscal', '$correoCooperativo')";

if ($conn->query($sql) === TRUE) {
    echo "Se a enviado con exito.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>