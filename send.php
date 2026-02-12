<?php
namespace PHPMailer\PHPMailer;

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'assets/php/src/Exception.php';
require 'assets/php/src/PHPMailer.php';
require 'assets/php/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';

$nombre = trim($_POST['name']);
$apellido = trim($_POST['apellido']);
$email = trim($_POST['correo']);
$marca = trim($_POST['marca']);
$modelo = trim($_POST['modelo']);
$year = trim($_POST['year']);
$mensaje = trim($_POST['mensaje']);

if ($nombre == "" || $apellido == "" || $email == "" || $mensaje == "") {
    //echo '<div class="alert alert-danger">Todos los campos son requeridos para el envio</div>';    
    echo 'Error: Todos los campos requeridos deben ser completados';
    exit;
} 
    try {
        // Configuración, cambiar correo y credenciales.
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'demo@allgarage.cl';
        $mail->Password = 'Allgarage_Demo2025';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;


        $to = "contacto@allgarage.cl"; // el correo donde llegará todo
        $mail->setFrom('demo@allgarage.cl', 'Formulario Web Allgarage');
        $mail->addReplyTo($email, $nombre . ' ' . $apellido); // Responder a este correo
        $mail->addAddress($to);
        $mail->addCC('denisse.rossel@todosuministros.cl'); // Copia a la dirección del remitente
        $mail->addCC('efigueroa@allgarage.cl'); // Copia a la dirección del remitente
        $mail->Subject = 'Nuevo mensaje desde tu web';
       
        $mail->isHTML(true);
        $mail->Subject = 'Nuevo mensaje desde Allgarage.cl';
        $mail->Body = "
            <strong> $nombre $apellido </strong> te ha contactado desde tu web y ha enviado la siguiente información: <br> 
            <p> <strong> Marca: </strong> $marca <br> 
            <strong> Modelo: </strong> $modelo <br> 
            <strong> Año: </strong> $year <br> 
            <strong> Mensaje: </strong> $mensaje </p> ";

        // Envío del correo electrónico
        $mail->send();

        echo "Formulario enviado correctamente";
    } catch (Exception $e) {
        echo "Error al enviar el formualrio: " . $mail->ErrorInfo;
    }
?>

