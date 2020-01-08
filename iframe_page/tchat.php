<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Hidden0ne</title>
    <link rel="stylesheet" href="assets/css/tchat.css">
  </head>
  <body>
    <?php
    
    echo '
    <div class="formPost">
    <form action="insertion.php" method="post">
        <p>
          <label for="pseudo">Pseudo :</label>
          <input id="pseudo" type="text" name="pseudo" value='.$_SESSION['pseudo'].' >
        </p>
        <p>
          <label for="message">Message :</label>
          <input id="message" type="text" autofocus name="text_message">
        </p>
        <p>
          <input type="submit" value="Send">
        </p>
    </form>
    <p><a href="index.html">Log out</a></p>
    </div>
    ';

    echo '<div class="msgTchat">';
    if($_SESSION['status'] != 'logged'){
      session_destroy();
      header('Location: index.html');
    }else if($_SESSION['status']=='logged'){
      /*
      include("conn.php");
      $dataReq = $dataBase->query('SELECT nom_salle_msg, pseudo, date_post, txt_msg, DATE_FORMAT(date_post, \'[%d/%m/%Y] - [%H:%i]\') AS date_post_fr FROM msg WHERE nom_salle_msg LIKE "'.$_SESSION['salleTchat'].'" ORDER BY date_post DESC LIMIT 0, 20');

      while($dataRecu = $dataReq->fetch() ){
          echo '<p>'.'<span class="pseudo">'.htmlspecialchars($dataRecu['pseudo']).'</span> : '.htmlspecialchars($dataRecu['txt_msg']).'<span class="datation">'.htmlspecialchars($dataRecu['date_post_fr']).'</span>'.'</p>';
      }
      $dataReq->closeCursor();*/
      include("updateTchat.php");
      echo '</div>';
      $_SESSION['status']='logged';
    }
    ?>
  </body>
</html>