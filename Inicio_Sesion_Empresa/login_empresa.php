<?php

include 'conexion.php';
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conexion, $_POST['email']);
    $password = mysqli_real_escape_string($conexion, $_POST['password']);

    $sql = "SELECT * FROM empresas WHERE email = '$email'";
    $result = mysqli_query($conexion, $sql);

    if (!$result) {
        echo json_encode(["success" => false, "message" => "Error en la consulta de la base de datos."]);
        exit();
    }

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        if (password_verify($password, $row['password'])) {
            // Generar código 2FA
            $codigo2FA = rand(100000, 999999);
            $sqlUpdate = "UPDATE empresas SET codigo_2fa = '$codigo2FA' WHERE email = '$email'";
            mysqli_query($conexion, $sqlUpdate);

            // Enviar correo con el código 2FA
            $to = $email;
            $subject = "Código de autenticación de Araucanía Laboral";
            $message = "Tu código de autenticación es: $codigo2FA";
            $headers = "From: integracion58@gmail.com";

            if (mail($to, $subject, $message, $headers)) {
                echo json_encode(["success" => true, "message" => "Código 2FA enviado a tu correo.", "redirect" => "verificar_codigo.php"]);
            } else {
                echo json_encode(["success" => false, "message" => "No se pudo enviar el correo con el código."]);
            }
        } else {
            echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "El correo no existe."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método de solicitud no válido."]);
}

mysqli_close($conexion);
?>
