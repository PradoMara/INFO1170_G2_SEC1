<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conexion, $_POST['email']);
    $codigoIngresado = intval($_POST['codigo']);

    $sql = "SELECT codigo_2fa FROM empresas WHERE email = '$email'";
    $result = mysqli_query($conexion, $sql);

    if ($result && mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        if ($row['codigo_2fa'] == $codigoIngresado) {
            // Código correcto: autenticar al usuario
            echo json_encode(["success" => true, "message" => "Autenticación exitosa.", "redirect" => "perfil_empresa.html"]);
        } else {
            echo json_encode(["success" => false, "message" => "Código incorrecto."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "No se encontró el usuario o el código."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método de solicitud no válido."]);
}
?>
