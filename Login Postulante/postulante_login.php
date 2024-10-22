<?php
session_start();

// Conectar a la base de datos (ajusta estos valores)
$conn = new mysqli(hostname: "db.inf.uct.cl",username: "doliva", password: "51.srv0ArxWbwSqmI", database: "A2024_doliva");

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Consulta SQL para verificar al usuario
    $sql = "SELECT * FROM postulantes WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();

        // Verificar la contraseña (usando password_hash en la base de datos)
        if (password_verify($password, $user['password'])) {
            // Crear variables de sesión
            $_SESSION['loggedin'] = true;
            $_SESSION['email'] = $user['email'];
            $_SESSION['nombre'] = $user['nombre']; // Puedes agregar más datos si lo deseas

            // Redireccionar a la página de postulante
            header("Location: postulante_dashboard.php");
            exit;
        } else {
            echo "<p style='color:red;'>Contraseña incorrecta</p>";
        }
    } else {
        echo "<p style='color:red;'>Correo electrónico no encontrado</p>";
    }
}

$conn->close();
?>
