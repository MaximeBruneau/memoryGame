<!DOCTYPE html>
<link href="../styles/style_accueil.css" rel="stylesheet" type="text/css" media="screen" />
<script type="text/javascript" src="../actions/script_actions.js"></script>
<html>

<head>
  <meta charset="UTF-8">
  <title>ACCUEIL</title>
</head>

<body>

  <?php include('menu.html'); ?>
  <!--on inclut le menu commun à toutes les pages-->

  <div id="main">
    <br>
    <section class="corps">
      <h1>Bienvenue sur notre jeu du memory !</h1><br>
      <p>
      <h3>Pour jouer, entrez votre nom et un thème ci-dessous et choisissez le niveau de difficulté.</h3> <br>

      <?php include('choice.html'); ?>
      <!--on inclut le fichier qui gère le jeu-->
      </p>

      <div id="aide">
        <span>Besoin d'aide </span>
        <a href="apropos.php#comment"><img src="../images/question_mark.png" alt="?" id="question_mark" title="consulter la documentation"></a>
      </div>

    </section>

    <!--bouton qui permet de retourner en haut de la page-->
    <!--ne s'affiche que lorsque qu'on a fait défilé la page-->
    <p id="bouton_retour_haut"><img src="../images/up_arrow.png" alt="Retour en haut" title="Retour en haut" OnClick="to_the_top()"></p>
  </div>


  <footer>
    <span>2022</span>
    <span><a href="../pages/accueil.php">Memory</a></span>
    <span><a href="../pages/equipe.php">L'équipe</a></span>
  </footer>

</body>

</html>
