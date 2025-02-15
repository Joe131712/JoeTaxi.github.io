<?php
 if(isset($_POST['submit'])){
    $to = 'joe.taxi94@outlook.com';
    $subject = 'Commande de taxi';
    $message = 'Voici le recap de la commande ' ."\n". $_POST['fname'] ."\n". $_POST['email'] ."\n". $_POST['tel'] ."\n". $_POST['datetime'] ."\n".$_POST['adresse1']."\n". $_POST['adresse'];
    $headers = 'From: joe.mars94@gmail.com';

    if (mail($to, $subject, $message, $headers)) 
    echo 'Email envoyer avec succès!';
 } else {
   echo 'Erreur';
 }

 ?>