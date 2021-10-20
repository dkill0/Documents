<?php
session_start();
$title="VideoClub Online";
$subtitle="Peliculas y Series pal saco";
$base_home="http://127.0.0.1/videoclub/";
$conexion = mysqli_connect("localhost", "root", "");
mysqli_select_db($conexion, "videoclub");
?>