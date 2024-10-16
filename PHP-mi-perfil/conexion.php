<?php
$servername = "db.inf.uct.cl";
$username = "dprado";
$password = "";
$dbname  = "nombre de la base de datos";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "ok";
?>