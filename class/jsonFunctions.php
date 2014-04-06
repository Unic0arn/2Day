<?php
	$nombre = $_POST['nombre'];
	$datos = $_POST['datos'];
	$fp = fopen("../js/models/".$nombre, "w");
	fwrite($fp, $datos);
	fclose($fp);
	echo "File correctly saved";
?>