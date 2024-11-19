<?php
$servername = "mysql.inf.uct.cl";
$username = "ecaranza"; 
$password = "wd65dZXb1IXFKw-Lb"; 
$dbname = "A2024_ecaranza"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} 
?>
