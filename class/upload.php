<?php
	$upload_folder ='../images';
	$nombre_archivo = $_FILES['archivo']['name'];
	$tipo_archivo = $_FILES['archivo']['type'];
	$tamano_archivo = $_FILES['archivo']['size'];
	$tmp_archivo = $_FILES['archivo']['tmp_name'];
	$archivador = $upload_folder . '/' . $nombre_archivo;
	$return = Array('ok'=>TRUE, 'name' => $nombre_archivo);
	if (!move_uploaded_file($tmp_archivo, $archivador)) {
		$return = Array('ok' => FALSE, 'msg' => "Ocurrio un error al subir el archivo. No pudo guardarse.", 'status' => 'error');
	}
	echo json_encode($return);
?>

