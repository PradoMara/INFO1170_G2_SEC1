<?php
session_start();
session_destroy();
header("Location: postulante_login.php");
exit;
?>
