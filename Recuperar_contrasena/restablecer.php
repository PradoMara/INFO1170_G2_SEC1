<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $token = trim($_POST['token']);
    $nueva_contrasena = trim($_POST['nueva_contrasena']);

    if (empty($token) || empty($nueva_contrasena)) {
        echo "<script>
                alert('Todos los campos son obligatorios.');
                window.location.href = 'recuperar-contraseña.html';
            </script>";
        exit;
    }

    try {
        $sql = "SELECT * FROM usuarios WHERE token_recuperacion = ? AND token_expira > NOW()";
        $stmt = mysqli_prepare($conexion, $sql);
        mysqli_stmt_bind_param($stmt, 's', $token);
        mysqli_stmt_execute($stmt);
        $resultado = mysqli_stmt_get_result($stmt);

        if (mysqli_num_rows($resultado) > 0) {
            $hash_contrasena = password_hash($nueva_contrasena, PASSWORD_DEFAULT);

            $sql = "UPDATE usuarios SET contrasena = ?, token_recuperacion = NULL, token_expira = NULL WHERE token_recuperacion = ?";
            $stmt = mysqli_prepare($conexion, $sql);
            mysqli_stmt_bind_param($stmt, 'ss', $hash_contrasena, $token);

            if (mysqli_stmt_execute($stmt)) {
                echo "<script>
                        alert('Tu contraseña ha sido actualizada correctamente. Ahora puedes iniciar sesión con tu nueva contraseña.');
                        window.location.href = '../Inicio_Sesion_Postulante/Inicio_Sesion_Postulante.html'; 
                    </script>";
            } else {
                throw new Exception("No se pudo actualizar la contraseña. Intenta más tarde.");
            }
        } else {
            echo "<script>
                    alert('El enlace de recuperación es inválido o ha expirado. Por favor, solicita una nueva recuperación.');
                    window.location.href = 'recuperar-contraseña.html'; 
                </script>";
        }
    } catch (Exception $e) {
        echo "<script>
                alert('Ocurrió un error: " . $e->getMessage() . "');
                window.location.href = 'recuperar-contraseña.html'; 
            </script>";
    } finally {
        mysqli_close($conexion);
    }
}
?>
