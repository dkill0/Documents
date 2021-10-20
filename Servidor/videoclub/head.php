<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title><?php echo $title; ?></title>
<meta http-equiv="Content-Language" content="English" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="<?php echo $base_home; ?>style.css" media="screen" />
</head>
<body>

<div id="wrap">

<div id="header">
<div class="headings">
<h1><a href="<?php echo $base_home; ?>"><?php echo $title; ?></a></h1>
<h2><?php echo $subtitle; ?></h2>
</div>

<div class="nav">
<ul>
<li><a href="<?php echo $base_home; ?>">Principal</a></li> 
<li><a href="<?php echo $base_home; ?>seccion.php?sec=peliculas">Peliculas</a></li> 
<li><a href="<?php echo $base_home; ?>seccion.php?sec=series">Series</a></li> 
<?php
if(!isset($_SESSION["Nombre"]))
 echo '<li><a href="'.$base_home.'usuarios.php">Usuarios</a></li>';
else {
 echo '<li><a href="'.$base_home.'cuenta.php">Cuenta</a></li>';
 echo '<li><a href="'.$base_home.'salir.php">Salir</a></li>';
}
?>
<li><a href="<?php echo $base_home; ?>contacto.php">Contacto</a></li>
</ul>
</div>
</div>

