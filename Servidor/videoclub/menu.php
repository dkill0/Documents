<div id="right">

<div class="adleft">
<br /><br />
125x125<br />
Anuncio
</div>
<div class="adright">
<br /><br />
125x125<br />
Anuncio
</div>

<div style="clear: both;"> </div>

<div class="latestarticles">
<h2>Novedades en pel&iacute;culas</h2>
<ul>
<?php
      $queEmp = "SELECT * FROM videos WHERE idVideo IN (SELECT idVideo FROM peliculas) ORDER BY idVideo DESC LIMIT 10";
      $resEmp = mysqli_query($conexion,$queEmp) or die(mysqli_error($conexion));
      $totEmp = mysqli_num_rows($resEmp);

      if ($totEmp> 0) {
         while ($rowEmp = mysqli_fetch_assoc($resEmp)) {
		 	$idVideo=$rowEmp['idVideo'];
		 	$nomVideo=$rowEmp['nomVideo'];
            echo "<li><a href='${base_home}video.php?id=$idVideo'>$nomVideo</a></li> ";
         }
      }
?>
</ul>
</div>

<div class="latestarticles">
<h2>Novedades en series</h2>
<ul>
<?php
      $queEmp = "SELECT * FROM videos WHERE idVideo IN (SELECT idVideo FROM episodios) ORDER BY idVideo DESC LIMIT 10";
      $resEmp = mysqli_query($conexion,$queEmp) or die(mysqli_error($conexion));
      $totEmp = mysqli_num_rows($resEmp);

      if ($totEmp> 0) {
         while ($rowEmp = mysqli_fetch_assoc($resEmp)) {
		 	$idVideo=$rowEmp['idVideo'];
		 	$nomVideo=$rowEmp['nomVideo'];
            echo "<li><a href='${base_home}video.php?id=$idVideo'>$nomVideo</a></li> ";
         }
      }
?>
</ul>
</div>

</div>