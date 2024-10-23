<?php
include 'conexion.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id_postulante = $_POST['id'];
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $ubicacion = $_POST['ubicacion'];
    $acerca_de_mi = $_POST['acerca_de_mi'];
    $habilidades = $_POST['habilidades'];
    $experiencia = $_POST['experiencia'];
    $educacion = $_POST['educacion'];
    $actividades_extracurriculares = $_POST['actividades_extracurriculares'];

    $sql = "UPDATE Postulantee
            SET nombre = ?, edad = ?, ubicacion = ?, acerca_de_mi = ?, habilidades = ?, experiencia = ?, educacion = ?, actividades_extracurriculares = ?
            WHERE id_postulante = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sissssssi", $nombre, $edad, $ubicacion, $acerca_de_mi, $habilidades, $experiencia, $educacion, $actividades_extracurriculares, $id_postulante);

    if ($stmt->execute()) {
        echo "Perfil actualizado correctamente";
    } else {
        echo "Error al actualizar el perfil: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Método no permitido";
}

$conn->close();
?>
