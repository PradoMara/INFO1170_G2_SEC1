<?php
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $id_postulante = filter_var($_POST['id'], FILTER_VALIDATE_INT);
        $nombre = htmlspecialchars(trim($_POST['nombre']));
        $edad = filter_var($_POST['edad'], FILTER_VALIDATE_INT);
        $ubicacion = htmlspecialchars(trim($_POST['ubicacion']));
        $acerca_de_mi = htmlspecialchars(trim($_POST['acerca_de_mi']));
        $habilidades = htmlspecialchars(trim($_POST['habilidades']));
        $experiencia = htmlspecialchars(trim($_POST['experiencia']));
        $educacion = htmlspecialchars(trim($_POST['educacion']));
        $actividades_extracurriculares = htmlspecialchars(trim($_POST['actividades_extracurriculares']));

        if (!$id_postulante || !$nombre || !$edad || !$ubicacion) {
            echo json_encode(["error" => "Datos insuficientes o inválidos."]);
            exit;
        }

        $sql = "UPDATE Postulantee
                SET nombre = ?, edad = ?, ubicacion = ?, acerca_de_mi = ?, habilidades = ?, experiencia = ?, educacion = ?, actividades_extracurriculares = ?
                WHERE id_postulante = ?";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            throw new Exception("Error al preparar la consulta");
        }

        $stmt->bind_param(
            "sissssssi",
            $nombre,
            $edad,
            $ubicacion,
            $acerca_de_mi,
            $habilidades,
            $experiencia,
            $educacion,
            $actividades_extracurriculares,
            $id_postulante
        );

        if ($stmt->execute()) {
            echo json_encode(["success" => "Perfil actualizado correctamente."]);
        } else {
            throw new Exception("Error al actualizar el perfil.");
        }
    } catch (Exception $e) {
        echo json_encode(["error" => $e->getMessage()]);
    } finally {
        if (isset($stmt) && $stmt !== false) {
            $stmt->close();
        }
        $conn->close();
    }
} else {
    echo json_encode(["error" => "Método no permitido."]);
}
?>
