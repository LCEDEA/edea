<?php
    if(isset($_POST['send'])){
        if($_POST){
            $to="lyceeclassiquededea@gmail.com";
            $nom=$_POST['nom'];
            $email=$_POST['email'];
            $message=$_POST['message'];
            $headers="MINE-version : 1.0\r\n";
            $headers.="content-type:text/plain ; charset:utf-8 \r\n";
            $headers.="from:$nom <$email> \nx-Mailer:php";
            $destinataire=$to;
            $body=$message;
            if(mail($destinataire,$body,$headers)){
                $response['status']='success';
                $response['msg']=' votre message a été envoyué';
            }
            else{
                $response['status']='error';
                $response['msg']=' désolé,veillez vous rassuretr que tous les champs sont remplis';
            }
            echo json_encode($response);
    }
?>