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
            echo json_encode(["success" => true]);
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
