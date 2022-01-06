<?php
$name = $_POST["name"];
$email = $_POST["email"];
$tel = $_POST["tel"]
$message = $_POST["message"];

$email_from = "nemanja2014@live.com"

$email_subjekt = "New Form Submission"

$email_body =  "User Name: $name.\n"
               "User Email: $email.\n"
               "User Tel: $tel.\n"
               "User Message: $message.\n"

$to = "nemanjadjordjevic2014@gmail.com"

$headers = "From: $email_from \r\n";

$headers .= "Replay-To: $email \r\n"
mail($to,$email_subjekt,$email_body,$headers)
header("location: index.html")
?>