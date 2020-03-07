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
    echo '<div class="msgTchat">';
    include("updateTchat.php");
    echo '</div>';


    echo '
    <div class="formPost">
      <form action="insertion.php" method="post">
          <p>
            <label for="pseudo">Pseudo :</label>
            <input id="pseudo" type="text" name="pseudo" value='.$_SESSION['pseudo']. ' >
          </p>
          <p>
            <label for="message">Message :</label>
            <input id="message" type="text" autofocus name="text_message">
          </p>
          <p>
            <input type="submit" value="Send">
          </p>
      </form>
      <p id="logout"><a href="index.php">Log out</a></p>
    </div>
    ';
    ?>
  </body>
</html>