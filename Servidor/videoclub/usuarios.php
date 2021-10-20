<?php
include("conf.php");
$title="Usuarios - VideoClub";
include("head.php");
?>
<div id="left">

<h2>Inicio de sesi&oacute;n</h2>
<?php

if(isset($_GET["env"]) && $_GET["env"]==1) {
	$Nombre=$_POST["Nombre"];
	if($Nombre=="")
		echo "<p>Has insertado el campo Usuario vacio.</p>";
	else {
	$_SESSION["Nombre"]=$Nombre;
	header("Location: ${base_home}cuenta.php");
	}
}
else {
?>
<form method="POST" action="usuarios.php?env=1">
	<p><span class="Estilo1"><b>
	</b></span><br>
         Usuario *: <br>
         <input name="Nombre" type="text" value="" size="42"><br>
         Contrase&ntilde;a *: <br>
         <input name="Pass" type="text" value="" size="42"><br>
         <input name="submit" type="submit" value="Enviar">
	<br>*Los campos con asterisco son obligatorios</p>
</form>
<p>
<?php
}
?>
</p>
<h2>Olvid&oacute; la contrase&ntilde;a </h2>
<?php

if(isset($_GET["env"]) && $_GET["env"]==2)
	echo "<p>Contrase&ntilde;a enviada.</p>";
else {
?>
<form method="post" action="usuarios.php?env=2">
  <p><span class="Estilo1"><b> </b></span>    Email *: <br />
    <input name="Email2" type="text" value="" size="42" />
    <br />
    <input name="submit3" type="submit" value="Enviar" />
    <br />
    *Los campos con asterisco son obligatorios</p>
</form>
<p> <?php
}
?></p>
<h2>Registro</h2>
<?php

if(isset($_GET["env"]) && $_GET["env"]==3)
	echo "<p>Registro finalizado.</p>";
else {
?>
<form method="post" action="usuarios.php?env=3">
  <p><span class="Estilo1"><b> </b></span><br />
    Usuario *: <br />
    <input name="Nombre2" type="text" value="" size="42" />
    <br />
    Contrase&ntilde;a *: <br />
    <input name="Email" type="text" value="" size="42" />
    <br />
    Email *: <br />
    <input name="Email" type="text" value="" size="42" />
    <br />
    <input name="submit2" type="submit" value="Enviar" />
    <br />
    *Los campos con asterisco son obligatorios</p>
</form>
<form method="POST" action="usuarios.php?env=2"></form>
<?php
}
?>

<br /><br />

</div>

<?php
include("foot.php");
?>
