<?php
include 'conexion.php';
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = mysqli_real_escape_string($conexion, $_POST['email']);
    $codigo = intval($_POST['codigo']);

    $sql = "SELECT codigo_2fa FROM empresas WHERE email = '$email'";
    $result = mysqli_query($conexion, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        if ($row['codigo_2fa'] == $codigo) {
            echo json_encode(["success" => true, "message" => "Autenticación exitosa.", "redirect" => "../Pagina_empresa/EmpresaPrincipal.html"]);
        } else {
            echo json_encode(["success" => false, "message" => "Código incorrecto."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "El correo no está registrado o el código es inválido."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
}

mysqli_close($conexion);
?>
