<?php

include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

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
        mysqli_stmt_execute($stmt);

        $enlace = "http://tusitio.com/restablecer.php?token=" . $token;
        $mensaje = "Hola, \n\nHaz clic en el siguiente enlace para restablecer tu contraseña: " . $enlace . "\n\nEste enlace expira en 1 hora.";
        $asunto = "Recuperación de Contraseña";
        $cabeceras = "From: no-reply@tusitio.com";

        if (mail($email, $asunto, $mensaje, $cabeceras)) {
            echo "Te hemos enviado un enlace para restablecer tu contraseña a $email.";
        } else {
            echo "Error al enviar el correo. Inténtalo de nuevo.";
        }
    } else {
        echo "No existe una cuenta asociada a ese correo.";
    }
}
?>
