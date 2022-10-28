<?php

	namespace content\controllers;

	use config\settings\sysConfig as sysConfig;
	use content\component\headElement as headElement;
	use content\modelo\homeModel as homeModel;

	class homeController{
		private $url;
		function __construct($url){
			$this->url = $url;
		}

		public function Consultar(){
			//var_dump($_SESSION);
			//return 0;
			$objModel = new homeModel;
			$_css = new headElement;
			$_css->Heading();
			
			$url = $this->url;
			require_once("view/homeView.php");
		}


		function cantUsuarios(){
      $query = $this->db->connect()->query('SELECT * FROM usuarios WHERE status = 1');
      $cantidad = 0;
      while($row = $query->fetch()){
          $cantidad = $cantidad + 1;
        }
      echo $cantidad;
    }
      function cantVehiculos(){
        $query = $this->db->connect()->query('SELECT * FROM vehiculos WHERE status = 1');
      $cantidad = 0;
      while($row = $query->fetch()){
          $cantidad = $cantidad + 1;
        }
      echo $cantidad;
    }
     function cantChoferes(){
        $query = $this->db->connect()->query('SELECT * FROM choferes WHERE status = 1');
      $cantidad = 0;
      while($row = $query->fetch()){
          $cantidad = $cantidad + 1;
        }
      echo $cantidad;
    }
      function cantRutas(){
        $query = $this->db->connect()->query('SELECT * FROM rutas WHERE status = 1');
      $cantidad = 0;
      while($row = $query->fetch()){
          $cantidad = $cantidad + 1;
        }
      echo $cantidad;
    }
     function cantTaller(){
        $query = $this->db->connect()->query('SELECT * FROM taller WHERE status = 1');
      $cantidad = 0;
      while($row = $query->fetch()){
          $cantidad = $cantidad + 1;
        }
      echo $cantidad;
    }
      function cantMantenimiento(){
       $query = $this->db->connect()->query('SELECT * FROM mantenimientos WHERE status = 0');
      $cantidad = 0;
      while($row = $query->fetch()){
          $cantidad = $cantidad + 1;
        }
      echo $cantidad;
    }


	}
		

?>