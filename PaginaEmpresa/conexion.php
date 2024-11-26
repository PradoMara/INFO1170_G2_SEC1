<?php
$host = "db.inf.uct.cl";
$user = "dprado";
$password = "9uwlZuJJWPHjj+uYU";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error al conectar: " . $e->getMessage());
}
?>
