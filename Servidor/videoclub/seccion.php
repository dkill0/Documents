<?php
include("conf.php");
$sec=ucfirst($_GET["sec"]);
$title="$sec - VideoClub";
include("head.php");
?>
<div id="left">

<h2><?php echo $sec; ?></h2>

<br /><br />
<ul>
<?php
      if($sec=="Series")
	  	$queEmp = "SELECT * FROM videos WHERE idVideo IN (SELECT idVideo FROM episodios) ORDER BY idVideo DESC LIMIT 10";
      else
  	  	$queEmp = "SELECT * FROM videos WHERE idVideo IN (SELECT idVideo FROM peliculas) ORDER BY idVideo DESC LIMIT 10";
      $resEmp = mysqli_query($conexion, $queEmp) or die(mysqli_error($conexion));
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

<?php
include("menu.php");

include("foot.php");
?>
