<?php

$mysqli_HOST = "localhost";
$mysqli_LOGIN = "root";
$mysqli_PASS = "";
$mysqli_DB = "videoclub";

 $db = mysqli_connect($mysqli_HOST,$mysqli_LOGIN,$mysqli_PASS);

if(!$db){
	echo('<td><font class=content2>Unable to connect to db' . mysqli_error($conexion));
	exit;
}

mysqli_select_db($conexion,$mysqli_DB);

#below follows my custom database handling functions - required for the class

function q($q, $debug = 0){
	$r = mysqli_query($q);
	if(mysqli_error($conexion)){
		echo mysqli_error($conexion);
		echo "$q<br>";
	}

	if($debug == 1)
		echo "<br>$q<br>";

	if(stristr(substr($q,0,8),"delete") ||	stristr(substr($q,0,8),"insert") || stristr(substr($q,0,8),"update")){
		if(mysqli_affected_rows() > 0)
			return true;
		else
			return false;
	}
	if(mysqli_num_rows($r) > 1){
		while($row = mysqli_fetch_array($r)){
			$results[] = $row;
		}
	}
	else if(mysqli_num_rows($r) == 1){
		$results = array();
		$results[] = mysqli_fetch_array($r);
	}

	else
		$results = array();
	return $results;
}

function q1($q, $debug = 0){
	$r = mysqli_query($q);
	if(mysqli_error($conexion)){
		echo mysqli_error($conexion);
		echo "<br>$q<br>";
	}

	if($debug == 1)
		echo "<br>$q<br>";
	$row = @mysqli_fetch_array($r);

	if(count($row) == 2)
		return $row[0];
	else
		return $row;
}

function qr($q, $debug = 0){
	$r = mysqli_query($q);
	if(mysqli_error($conexion)){
		echo mysqli_error($conexion);
		echo "<br>$q<br>";
	}

	if($debug == 1)
		echo "<br>$q<br>";

	if(stristr(substr($q,0,8),"delete") ||	stristr(substr($q,0,8),"insert") || stristr(substr($q,0,8),"update")){
		if(mysqli_affected_rows() > 0)
			return true;
		else
			return false;
	}

	$results = array();
	$results[] = mysqli_fetch_array($r);
	$results = $results[0];

	return $results;
}


?>
