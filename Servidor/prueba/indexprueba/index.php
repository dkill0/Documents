 <html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>Página de ejemplo</title>
</head>

<?php
if(isset($_POST['num1']) && isset($_POST['num2']) && !empty($_POST['num1']) && !empty($_POST['num2'])) {
	$num1=$_POST['num1'];
	$num2=$_POST['num2'];
	$sms=$num1+$num2;
}
?>

<body>
<form action="" method="POST">
<fieldset>
<legend>prueba</legend>
<div id="BloqueFormulario">
	<label for="num1">numero 1:</label>
	<input name="num1" id="num1" value="" size="40" maxlength="100" type="text" class="CampoFormulario" required>
</div>
<div id="BloqueFormulario">
	<label for="num2">numero 2:</label>
	<input name="num2" id="num2" value="" size="40" maxlength="100" type="text" class="CampoFormulario" required>
</div>
<br />

<?php
if(isset($sms)&& !empty($sms) ) {
	echo "La suma de los número introducidos es --> $sms";
}
?>

<br />
     <p><input type="submit" name="login" value="sumar"  /></p>
</fieldset>
</form>

</body>
</html>