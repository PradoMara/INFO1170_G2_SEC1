<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// Conexión a la base de datos
$host = 'db.inf.uct.cl';
$dbname = 'A2024_doliva';
$username = 'doliva';
$password = '51.srv0ArxWbwSqmI';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
    exit();
}

// Consulta para obtener postulantes desde la tabla Postulantes
$sql = "SELECT id, nombre, profesion, ubicacion, experiencia FROM Postulantes";
$stmt = $pdo->prepare($sql);
$stmt->execute();
$postulantes = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Generar HTML dinámico para los postulantes
foreach ($postulantes as $postulante) {
    echo "<div class='postulante-card' data-id='{$postulante['id']}'>
            <h3>{$postulante['nombre']}</h3>
            <p><strong>Profesión:</strong> {$postulante['profesion']}</p>
            <p><strong>Ubicación:</strong> {$postulante['ubicacion']}</p>
            <p><strong>Experiencia:</strong> {$postulante['experiencia']} años</p>
            <button>Contactar</button>
          </div>";
}
?>
