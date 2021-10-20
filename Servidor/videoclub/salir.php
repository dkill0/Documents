<?php
include("conf.php");
session_destroy();
header("Location: $base_home");
?>
