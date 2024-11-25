<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'conexion.php';
header('Content-Type: application/json');

$recaptchaSecret = "6LfL6YgqAAAAANWaQRxgBS4dmk3cF3py_O3qpxVs";
$recaptchaUrl = "https://www.google.com/recaptcha/api/siteverify";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conexion, $_POST['email']);
    $password = mysqli_real_escape_string($conexion, $_POST['password']);
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    // Validar reCAPTCHA
    $recaptchaVerify = file_get_contents($recaptchaUrl . "?secret=" . $recaptchaSecret . "&response=" . $recaptchaResponse);
    $recaptchaVerifyResponse = json_decode($recaptchaVerify, true);

    if (!$recaptchaVerifyResponse['success']) {
        echo json_encode(["success" => false, "message" => "Error en la validación de reCAPTCHA."]);
        exit();
    }

    $sql = "SELECT * FROM empresas WHERE email = '$email'";
    $result = mysqli_query($conexion, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        if (password_verify($password, $row['password'])) {
            $codigo2FA = rand(100000, 999999);
            $sqlUpdate = "UPDATE empresas SET codigo_2fa = '$codigo2FA' WHERE email = '$email'";
            mysqli_query($conexion, $sqlUpdate);

            $to = $email;
            $subject = "Código de autenticación";
            $message = "Tu código de autenticación es: $codigo2FA";
            mail($to, $subject, $message);

            echo json_encode(["success" => true, "message" => "Código 2FA enviado.", "redirect" => "verificar_codigo.php"]);
        } else {
            echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "El correo no existe."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
}

mysqli_close($conexion);
?>
