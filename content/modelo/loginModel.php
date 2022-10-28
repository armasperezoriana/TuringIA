<?php

	namespace content\modelo;

	use content\config\conection\database as database;
	use content\traits\Utility;
	use PDOException;
	use Exception;

	class loginModel extends database{

		private $con;
		public $usuario;
		public $correo;
		private $pass;

		public function __construct(){
			
			$this->con = parent::__construct();
		}


			public function ConsultarIniciar(){
		try{
				$query = parent::prepare("SELECT * FROM usuarios WHERE status = 1 AND usuario = '{$this->username}' AND contrasena = '{$this->password}'");

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

	function usuarioExiste ( $usuario, $contrasena ) {

      try {
        $query = parent::prepare('SELECT * FROM usuarios WHERE usuario = :usuario AND contrasena = :contrasena AND status = 1');
        $query->execute(['username' => $usuario, 'password' => $contrasena]);

        return $query->rowCount();
      } catch(PDOException $e) {
        return false;
      }
    }
		function usuario_sesion($usuario){

			try{
				$query = parent::prepare("SELECT * FROM usuarios WHERE usuario = :usuario");
				 while($row = $query->fetch()){
         session_start();
          $_SESSION['id_usuario'] = ($row['id_usuario']);
          $_SESSION['cedula'] = ($row['cedula']);
          $_SESSION['usuario'] = ($row['usuario']);
          $_SESSION['nombre'] = ($row['nombre']);
          $_SESSION['apellido'] = ($row['apellido']);
          $_SESSION['cedula'] = ($row['cedula']);
          $_SESSION['correo'] = ($row['correo']);
           $_SESSION['nombre_rol'] = ($row['nombre_rol']);
          $_SESSION['rol'] = ($row['rol']);
        }
         return $query->rowCount();
			}catch(PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
		}

	}
	public function buscarCorreo($correo){
		try {
			$query = parent::prepare("SELECT 1 FROM usuarios WHERE correo = :correo");
			$query->execute(['correo' => $correo]);
			return $query->fetchAll(parent::FETCH_OBJ); 
		} catch (Exception $e) {
			return $e->getMessage();
		}
	}

	public function userByCorreo($correo){
		try {
			$usuario = array();
			$query = parent::prepare("SELECT * FROM usuarios WHERE correo = :correo");
			$query->execute(['correo' => $correo]);
			while($row = $query->fetch()){
				 $usuario['id_usuario'] = ($row['id_usuario']);
				 $usuario['cedula'] = ($row['cedula']);
				 $usuario['usuario'] = ($row['usuario']);
				 $usuario['nombre'] = ($row['nombre']);
				 $usuario['apellido'] = ($row['apellido']);
				 $usuario['cedula'] = ($row['cedula']);
				 $usuario['correo'] = ($row['correo']);
			   }
			return $usuario;
		} catch (Exception $e) {
			return $e->getMessage();
		}
	}


	
	public function setId($id){
		$this->id_usuario = $id;
	}
	public function setNombre($nombre){
		$this->nombre = $nombre;
	}
	public function setApellido($apellido){
		$this->apellido = $apellido;
	}
	public function setCedula($cedula){
		$this->cedula = $cedula;
	}
	public function setUsername($username){
		$this->username = $username;
	}
	public function setRol($rol){
		$this->rol = $rol;
	}
	public function setPassword($pass){
		$this->password = $pass;
	}
	public function setCorreo($correo){
		$this->correo = $correo;
	}



	}
?>