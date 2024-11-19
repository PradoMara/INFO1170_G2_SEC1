<?php
include 'conexion.php'; // Asegúrate de tener un archivo 'conexion.php' con la conexión a tu base de datos

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibir datos del formulario
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['phone'];
    $edad = $_POST['age'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); 

    if ($edad < 16) {
        die("No puedes registrarte si tienes menos de 16 años.");
    }

    $sql = "INSERT INTO Postulantee (nombre, correo, telefono, edad, password) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssis", $nombre, $email, $telefono, $edad, $password);

    if ($stmt->execute()) {
        if ($edad >= 16 && $edad < 18) {
            echo '../ValidacionMenorDeEdad/Validacion_Menor18.html'; 
        } else if ($edad >= 18) {
            echo '../ValidacionEmpleadoMayorDe18/ValidacionEmpleadoMayor18.html'; 
        }
    } else {
        echo "Error al registrar al postulante: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
