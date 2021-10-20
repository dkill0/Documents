<?php
include("conf.php");
$id=mysqli_real_escape_string($conexion,$_GET["id"]);
if(isset($_GET["pago"]))
	$pago=$_GET["pago"];

      $queEmp = "SELECT * FROM videos WHERE idVideo = '$id' LIMIT 1";
      $resEmp = mysqli_query($conexion,$queEmp) or die(mysqli_error($conexion));
      $totEmp = mysqli_num_rows($resEmp);

      if ($totEmp> 0) {
		  $rowEmp = mysqli_fetch_assoc($resEmp);
		  $idVideo=$rowEmp['idVideo'];
		  $nomVideo=$rowEmp['nomVideo'];
		  $embedVideo=$rowEmp['embedVideo'];
		  $fichVideo=$rowEmp['fichVideo'];
		  $sec = "404";
		  if(mysqli_num_rows(mysqli_query($conexion,"SELECT idVideo FROM peliculas WHERE idVideo = '$id' LIMIT 1")) > 0)
		  	$sec = "Pelicula";
		  if(mysqli_num_rows(mysqli_query($conexion,"SELECT idVideo FROM episodios WHERE idVideo = '$id' LIMIT 1")) > 0)
		  	$sec = "Serie";
	  }
	  
$title="$sec";
include("head.php");


?>
<div id="left">

<h2><?php echo $nomVideo; ?></h2>

<?php

if(!isset($pago))
	echo '
	Tienes dos opciones para visualizar este video:
	<ul>
	<li><a href="'.$base_home.'video.php?id='.$id.'&pago=1">Pagar por visi&oacute;n</a> (2&euro;)</li>
	<li><a href="'.$base_home.'video.php?id='.$id.'&pago=2">Pagar por descarga</a> (5&euro;)</li>
	</ul>
	';
else {
	if($pago=="1")
	echo '
	<object width="425" height="344"><param name="movie" value="http://www.youtube.com/v/'.$embedVideo.'&hl=es&fs=1&"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/'.$embedVideo.'&hl=es&fs=1&" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="425" height="344"></embed></object>
	';
	if($pago=="2")
	echo '
	<br /><br />
	Pulsa en el siguiente enlace para descargar la pel&iacute;cula:
	<br />
	<a href="http://downthisvideo.com/?url=http://www.youtube.com/watch?v='.$fichVideo.'">Descarga '.$nomVideo.'</a>
	';
}
?>
</div>

<?php
include("menu.php");

include("foot.php");
?>
