<?php

	namespace content\modelo;

	use content\config\conection\database as database;
	use PDOException;
	class rolesModel extends database{

	    private $rol;
	    private $id_rol;
	    private $nombre_rol;
	    private $descripcion;
	    private $permisos;
	    private $status;

		public function __construct(){
			parent::__construct();
		}

		public function Consultar(){
			try {
				$query = parent::prepare('SELECT * FROM roles');
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuestaArreglo = $query->fetchAll(parent::FETCH_ASSOC); 
				$respuestaArreglo += ['ejecucion' => true];
				return $respuestaArreglo;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}

			public function ConsultarOne($nombre_rol){

			try {
				$cont=0;
				$query = parent::prepare("SELECT * FROM roles WHERE status = 1 ");
				$respuestaArreglo = '';
				$query->execute();
			//	$query->setFetchMode(parent::FETCH_ASSOC);
				$respuestaArreglo = $query->fetchAll(parent::FETCH_ASSOC); 
				foreach($respuestaArreglo as $ra){
					if(strtolower($nombre_rol)==strtolower($ra['nombre_rol'])){
						$cont++;
					}
				}
				return $cont;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}


		public function ObtenerOne($id){
			try {
				$query = parent::prepare("SELECT * FROM roles WHERE id_rol = $id");
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuesta = $query->fetch(parent::FETCH_ASSOC); 
				return $respuesta;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}
		
		public function ObtenerRol($id){
			try {
				$query = parent::prepare("SELECT r.id_rol, r.nombre_rol AS rol, r.descripcion, p.id_permisos, p.nombre AS permiso FROM `roles` r 
					INNER JOIN roles_permisos rp ON r.id_rol = rp.rol_id 
					INNER JOIN permisos p ON rp.permisos_id = p.id_permisos WHERE r.id_rol = $id");
				$respuesta = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuesta = $query->fetchAll(parent::FETCH_ASSOC); 
				return $respuesta;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}


		public function AgregarR(){
		
		try {
			$query = parent::prepare("INSERT INTO roles (nombre_rol,descripcion, status) VALUES ('{$this->nombre_rol}', '{$this->descripcion}', 1)");
			$respuestaArreglo = '';
			$query->execute();
			$query->setFetchMode(parent::FETCH_ASSOC);
			$respuestaArreglo = $query->fetchAll(parent::FETCH_ASSOC); 
			$respuestaArreglo += ['ejecucion' => true];
			return $respuestaArreglo;
		} catch (PDOException $e) {
			$errorReturn = ['ejecucion' => false];
			$errorReturn += ['info' => "error sql:{$e}"];
			return $errorReturn;
	}
}




		public function setId($id_rol){
			$this->id_rol = $id_rol;
		}
		public function setNombreRol($nombre_rol){
			$this->nombre_rol = $nombre_rol;
		}
		public function setDescripcion($descripcion){
			$this->descripcion = $descripcion;
		}
		public function setStatus($status){
			$this->status = $status;
		}
		public function setPermisos($permisos){
			$this->permisos = $permisos;
		}
		


		public function getId(){
			return $this->id_rol;
		}
		public function getNombreRol(){
			return $this->nombre_rol;
		}
		public function getDescripcion(){
			return $this->descripcion;
		}
		public function getStatus(){
			return $this->status;
		}
		public function getPermisos(){
			return $this->permisos;
		}

	}
