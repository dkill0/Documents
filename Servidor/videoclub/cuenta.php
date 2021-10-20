<?php
include("conf.php");
$title="Cuenta - VideoClub";
include("head.php");
if(!isset($_SESSION["Nombre"]))	/* En caso de que no esté logueado */
	header("Location: ${base_home}usuarios.php");
?>
<div id="left">

<h2>Cuenta de <?php echo $_SESSION["Nombre"]; ?></h2>
<p>Muchas cosicas aqu&iacute;</p>
<p>Su saldo es: 100 &euro;</p>
</div>

<?php
include("foot.php");
?>
