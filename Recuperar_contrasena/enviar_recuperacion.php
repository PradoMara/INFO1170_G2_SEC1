<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    if (!$email) {
        echo "El correo electrónico ingresado no es válido.";
        exit;
    }

    try {
        $sql = "SELECT * FROM usuarios WHERE email = ?";
        $stmt = mysqli_prepare($conexion, $sql);
        mysqli_stmt_bind_param($stmt, 's', $email);
        mysqli_stmt_execute($stmt);
        $resultado = mysqli_stmt_get_result($stmt);

        if (mysqli_num_rows($resultado) > 0) {
            $token = bin2hex(random_bytes(50));
            $token_expira = date('Y-m-d H:i:s', strtotime('+1 hour'));

            $sql = "UPDATE usuarios SET token_recuperacion = ?, token_expira = ? WHERE email = ?";
            $stmt = mysqli_prepare($conexion, $sql);
            mysqli_stmt_bind_param($stmt, 'sss', $token, $token_expira, $email);

            if (mysqli_stmt_execute($stmt)) {
                $enlace = "http://tusitio.com/restablecer.php?token=" . urlencode($token);
                $mensaje = "Hola,\n\nHaz clic en el siguiente enlace para restablecer tu contraseña:\n$enlace\n\nEste enlace expira en 1 hora.";
                $asunto = "Recuperación de Contraseña";
                $cabeceras = "From: no-reply@tusitio.com\r\n";
                $cabeceras .= "Content-Type: text/plain; charset=UTF-8";

                if (mail($email, $asunto, $mensaje, $cabeceras)) {
                    echo "Si el correo está asociado a una cuenta, hemos enviado un enlace para restablecer tu contraseña.";
                } else {
                    echo "Hubo un problema al enviar el correo. Inténtalo más tarde.";
                }
            } else {
                throw new Exception("No se pudo actualizar el token de recuperación.");
            }
        } else {
            echo "Si el correo está asociado a una cuenta, hemos enviado un enlace para restablecer tu contraseña.";
        }
    } catch (Exception $e) {
        echo "Ocurrió un error: " . $e->getMessage();
    } finally {
        mysqli_close($conexion);
    }
}
?>
