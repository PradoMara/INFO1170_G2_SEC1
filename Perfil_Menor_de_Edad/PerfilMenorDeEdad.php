<?php
include 'conexion.php';

header('Content-Type: application/json'); 

if (isset($_GET['id'])) {
    $id_postulante = filter_var($_GET['id'], FILTER_VALIDATE_INT);

    if ($id_postulante === false) {
        echo json_encode(["error" => "ID inválido"]);
        exit;
    }

    try {
        $sql = "SELECT nombre, edad, ubicacion, acerca_de_mi, habilidades, experiencia, educacion, actividades_extracurriculares 
                FROM Postulantee
                WHERE id_postulante = ?";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            throw new Exception("Error al preparar la consulta");
        }

        $stmt->bind_param("i", $id_postulante);
        $stmt->execute();

        $resultado = $stmt->get_result();

        if ($resultado->num_rows > 0) {
            $datos = $resultado->fetch_assoc();
            echo json_encode($datos, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        } else {
            echo json_encode(["error" => "No se encontraron datos para este postulante"]);
        }
    } catch (Exception $e) {
        echo json_encode(["error" => "Ocurrió un problema: " . $e->getMessage()]);
    } finally {
        if (isset($stmt) && $stmt !== false) {
            $stmt->close();
        }
        $conn->close();
    }
} else {
    echo json_encode(["error" => "No se proporcionó un ID válido"]);
}
?>
