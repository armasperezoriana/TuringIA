<?php

	namespace content\controllers;

	use config\settings\sysConfig as sysConfig;
	use content\component\headElement as headElement;
	use content\modelo\usuariosModel as usuariosModel;
	use content\modelo\rolesModel as rolesModel;

	class rolesController{
		private $url;
		private $rol;
		private $usuario;
		function __construct($url){
			$this->url = $url;
			$this->usuario = new usuariosModel();
				$this->rol = new rolesModel();
		}

		public function Consultar(){
			$objModel = new rolesModel;
			$this->rol = new rolesModel();
			$_css = new headElement;
			$_css->Heading();

			$usuarios = $this->usuario->Consultar();
		$roles = $this->rol->Consultar();
			
			$url = $this->url;
			require_once("view/rolesView.php");
		}

public function Mostrar($param)
    {
        $rol = $this->rol->ObtenerRol($param);
        http_response_code(200);
        echo json_encode($rol);
    }

}

	
?>