<!DOCTYPE html>
<link href="/styles/style_equipe.css" rel="stylesheet" type="text/css" media="screen" />
<script type="text/javascript" src="/actions/script_actions.js"></script>
<html>

<head>
  <meta charset="UTF-8">
  <title>L'équipe</title>
</head>

<body>

  <?php include('menu.html'); ?>
  <!--on inclut le menu commun à toutes les pages-->

  <div id="main">

    <section class="corps">
      <h3>Découvrez l'équipe derrière ce memory</h3>

      <section class="section_equipe">
        <section class="section_nous">
          <img src="/images/avatar_anthonin3.png">Anthonin
          <div class="content">
            <div class="text">Je suis Anthonin Hinschberger-Boscher et je suis très content de faire ce site web !</div>
          </div>
        </section>

        <section class="section_nous">
          <img src="/images/avatar_emilien3.png">Émilien
          <div class="content">
            <div class="text">Je suis Émilien Lequeux et je suis très content de faire ce site web !</div>
          </div>
        </section>

        <section class="section_nous">
          <img src="/images/avatar_maxime3.png">Maxime
          <div class="content_right">
            <div class="text">Je suis Maxime Bruneau et je suis très content de faire ce site web !</div>
          </div>
        </section>

        <section class="section_nous">
          <img src="/images/avatar_coline3.png">Coline
          <div class="content_right">
            <div class="text">HOLA je me suis bien amusée</div>
          </div>
        </section>
      </section>
    </section>

    <!--bouton qui permet de retourner en haut de la page-->
    <!--ne s'affiche que lorsque qu'on a fait défilé la page-->
    <p id="bouton_retour_haut"><img src="/images/up_arrow.png" alt="Retour en haut" title="Retour en haut" OnClick="to_the_top()"></p>

  </div>

</body>

<footer>
  <span>2022</span>
  <span><a href="/pages/accueil.php">Memory</a></span>
  <span><a href="/pages/equipe.php">L'équipe</a></span>
</footer>

</html>