<?php
	
	if(file_exists("vendor/autoload.php")){
		require_once("vendor/autoload.php"); 
	}else{
		
		if(file_exists("content/component/error404.php")){
			require_once("content/component/error404.php");
		}
		die($html404); 
	}

	if(!isset($_SESSION)) {
		session_start();
	}
	
	use config\settings\sysConfig as sysConfig; 

	$globalConfig = new sysConfig(); 
	$globalConfig->_int(); 


	use content\controllers\frontController as frontController; 
	$IndexSystem = new frontController($_REQUEST); 	
	

?>