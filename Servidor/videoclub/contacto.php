<?php
include("conf.php");
$title="Contacto - VideoClub";
include("head.php");
?>
<div id="left">

<h2>Contacto</h2>
<?php

if(isset($_GET["env"]))
	echo "<p>Mensaje enviado</p>";
else {
?>
<form method="POST" action="contacto.php?env=1">
	<p><span class="Estilo1"><b>
	</b></span><br>
         Nombre *: <br>
         <input name="Nombre" type="text" value="" size="42"><br>
         E-Mail *: <br>
         <input name="Email" type="text" value="" size="42"><br>
         Mensaje: <br>
         <textarea name="Mensaje" id="Mensaje" cols="40" rows="5" ></textarea><br>
         <input name="submit" type="submit" value="Enviar">
	<br>*Los campos con asterisco son obligatorios</p>
</form>
<?php
}
?>

<br /><br />

</div>

<?php
include("foot.php");
?>
