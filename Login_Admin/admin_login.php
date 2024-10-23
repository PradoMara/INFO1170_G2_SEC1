<?php 
session_start();
$host = "db.inf.uct.cl";
$user = "doliva";
$password = "51.srv0ArxWbwSqmI";
$bd = "A2024_doliva";

$conexion = new mysqli($host, $user, $password, $bd);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Filtrar los datos ingresados
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = htmlspecialchars($_POST['password']); // Filtrar contraseña para evitar problemas

    // Verificar que los campos no estén vacíos
    if (!empty($email) && !empty($password)) {
        // Consulta SQL para verificar si el administrador existe
        $sql = "SELECT * FROM administradores WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 1) {
            $admin = $result->fetch_assoc();

            // Verificar la contraseña (sin encriptación por ahora)
            if ($password === $admin['password']) {
                // Crear variables de sesión
                $_SESSION['loggedin'] = true;
                $_SESSION['email'] = $admin['email'];
                $_SESSION['nombre'] = $admin['nombre']; // Obtener el nombre del administrador

                // Redireccionar al panel de administración
                header("Location: admin_dashboard.php");
                exit;
            } else {
                $_SESSION['error'] = "Contraseña incorrecta"; // Almacenar el error en la sesión
                header("Location: admin_login.php");
                exit;
            }
        } else {
            $_SESSION['error'] = "Correo electrónico no encontrado"; // Almacenar el error en la sesión
            header("Location: admin_login.php");
            exit;
        }
    } else {
        $_SESSION['error'] = "Por favor, completa todos los campos"; // Almacenar el error en la sesión
        header("Location: admin_login.php");
        exit;
    }
}

$conn->close();
?>
