<?php

include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $token = $_POST['token']; 
    $nueva_contrasena = password_hash($_POST['nueva_contrasena'], PASSWORD_DEFAULT); 

    $sql = "SELECT * FROM usuarios WHERE token_recuperacion = ? AND token_expira > NOW()";
    $stmt = mysqli_prepare($conexion, $sql);
    mysqli_stmt_bind_param($stmt, 's', $token);
    mysqli_stmt_execute($stmt);
    $resultado = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($resultado) > 0) {

        $sql = "UPDATE usuarios SET contrasena = ?, token_recuperacion = NULL, token_expira = NULL WHERE token_recuperacion = ?";
        $stmt = mysqli_prepare($conexion, $sql);
        mysqli_stmt_bind_param($stmt, 'ss', $nueva_contrasena, $token);
        mysqli_stmt_execute($stmt);

        echo "<script>
                alert('Tu contraseña ha sido actualizada correctamente. Ahora puedes iniciar sesión con tu nueva contraseña.');
                window.location.href = '../Inicio_Sesion_Postulante/Inicio_Sesion_Postulante.html'; 
            </script>";
    } else {
        echo "<script>
                alert('El enlace de recuperación es inválido o ha expirado. Por favor, solicita una nueva recuperación.');
                window.location.href = 'recuperar-contraseña.html';}
            </script>";
    }

    mysqli_close($conexion);
}
?>
