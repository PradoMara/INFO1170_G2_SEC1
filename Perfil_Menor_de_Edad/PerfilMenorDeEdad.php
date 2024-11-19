<?php
include 'conexion.php'; 

if (isset($_GET['id'])) {
    $id_postulante = $_GET['id']; 

    $sql = "SELECT nombre, edad, ubicacion, acerca_de_mi, habilidades, experiencia, educacion, actividades_extracurriculares 
            FROM Postulantee
            WHERE id_postulante = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id_postulante);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $datos = $resultado->fetch_assoc();
        echo json_encode($datos);
    } else {
        echo json_encode(["error" => "No se encontraron datos para este postulante"]);
    }

    $stmt->close();
} else {
    echo json_encode(["error" => "No se proporcionó un ID válido"]);
}

$conn->close();
?>
