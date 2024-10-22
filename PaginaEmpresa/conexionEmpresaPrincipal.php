<?php
// Datos de conexión a la base de datos
$servername = "db.inf.uct.cl";  
$username = "doliva";         
$password = "51.srv0ArxWbwSqmI";             
$dbname = "A2024_doliva";   
// Crear la conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>
