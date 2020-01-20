<meta http-equiv="refresh" content="10">
<?php
    session_start();
    if($_SESSION['status'] != 'logged' && !empty($_SESSION['salleTchat'])){
        include("index.html");
    }
    include("conn.php");
    $dataReq = $dataBase->query('SELECT nom_salle_msg, pseudo, date_post, txt_msg, DATE_FORMAT(date_post, \'[%d/%m/%Y] - [%H:%i]\') AS date_post_fr FROM msg WHERE nom_salle_msg LIKE "'.$_SESSION['salleTchat'].'" ORDER BY date_post ASC LIMIT 0, 10');

    while($dataRecu = $dataReq->fetch() ){
        echo '<p>'.'<span class="pseudo">'.htmlspecialchars($dataRecu['pseudo']).'</span> : '.htmlspecialchars($dataRecu['txt_msg']).'<span class="datation">'.htmlspecialchars($dataRecu['date_post_fr']).'</span>'.'</p>';
    }
    $dataReq->closeCursor();
?>