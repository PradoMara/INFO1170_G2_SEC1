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

        // Manejo de subida de imagen
        $foto_perfil = null;
        if (isset($_FILES['foto_perfil']) && $_FILES['foto_perfil']['error'] === UPLOAD_ERR_OK) {
            $nombreArchivo = $_FILES['foto_perfil']['name'];
            $tmpName = $_FILES['foto_perfil']['tmp_name'];
            $directorioDestino = 'uploads/perfiles/';

            if (!file_exists($directorioDestino)) {
                mkdir($directorioDestino, 0777, true);
            }

            $rutaArchivo = $directorioDestino . uniqid() . '-' . $nombreArchivo;

            if (move_uploaded_file($tmpName, $rutaArchivo)) {
                $foto_perfil = $rutaArchivo;
            } else {
                echo json_encode(["error" => "Error al subir la imagen."]);
                exit;
            }
        }

        $sql = "UPDATE Usuarios 
                SET nombre = ?, edad = ?, direccion = ?, acerca_de_mi = ?, habilidades = ?, experiencia = ?, educacion = ?, actividades_extracurriculares = ?, foto_perfil = COALESCE(?, foto_perfil)
                WHERE id_Usuario = ?";
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
            $foto_perfil,
            $id_postulante
        );

        if ($stmt->execute()) {
            echo json_encode(["success" => "Perfil actualizado correctamente.", "foto_perfil" => $foto_perfil]);
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
