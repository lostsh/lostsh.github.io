<?php
    session_start();
    include("conn.php");
    
    if(!empty($_POST['room']) && !empty($_POST['pseudo']) && !empty($_POST['text_message'])){
        $dataReq=$dataBase->prepare('INSERT INTO msg (ip_client,nom_salle_msg,pseudo,txt_msg) VALUES (?,?,?,?)');
        $dataReq->execute(array($_SERVER['REMOTE_ADDR'],$_POST['room'],$_POST['pseudo'],$_POST['text_message']));
    }

    $status='logged';
    $_SESSION['pseudo']=$_POST['pseudo'];
    //header('Location: tchat.php');
    include("tchat.php");
?>