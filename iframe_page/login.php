<?php
session_start();
if($_SESSION['status'] == 'logged'){
    header('Location: tchat.php');
}

include("conn.php");
if(empty($_POST['room'] || $_POST['passwd'])){
    echo '
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Hidden0ne</title>
            <link rel="stylesheet" href="assets/css/index.css">
        </head>
        <body>
            <p>You probabily miss some information</p>
            <p><a href="index.php">Retour</a></p>
        </body>
    </html>
    ';
    session_destroy();
}else{
$dataReq=$dataBase->prepare('SELECT nom_salle, mdp FROM chat_room WHERE nom_salle = :room');
$dataReq->bindValue(':room',$_POST['room'],PDO::PARAM_STR);//pour le type text ou varchar
$dataReq->execute();

$data=$dataReq->fetch();

if($data['mdp']==($_POST['passwd'])){
    $_SESSION['status']='logged';
    $_SESSION['salleTchat']=$data['nom_salle'];
    $_SESSION['pseudo'];
    include("tchat.php");
}else{
    $_SESSION['status']='notLogged';
    echo '
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Hidden0ne</title>
            <link rel="stylesheet" href="assets/css/index.css">
        </head>
        <body>
            <p>Connextion Error. Incorrect information</p>
            <p><a href="index.php">Retour</a></p>
        </body>
    </html>
    ';
}
}//fermeture du else pour la verification des parametres vides
?>