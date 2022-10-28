<?php

	namespace content\modelo;

	use content\config\conection\database as database;

	class usuariosModel extends database{

		private $id_usuario;
		private $cedula;
	    private $nombre; 
	    private $apellido;
	    private $username;
	    private $rol;
	    private $password;
	    private $correo;
		private $clave_especial;


		public function __construct(){
			// $this->con = parent::__construct();
			parent::__construct();
		}
		public function Consultar(){
			try {
				$query = parent::prepare('SELECT * FROM usuarios');
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

		public function ConsultarOne(){
			try {
				$query = parent::prepare("SELECT * FROM usuarios WHERE status = 1 and cedula = '{$this->cedula}'");
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
		public function buscarCorreo($correo){
			try {
				$query = parent::prepare("SELECT * FROM usuarios WHERE correo = '$correo' LIMIT 1");
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$res = $query->fetchAll(parent::FETCH_ASSOC); 
				$correo = [];
				foreach($res as $p){
					array_push($correo, $p['correo']);
				}
				$respuestaArreglo = ['resultado' => $correo];
				$respuestaArreglo += ['ejecucion' => true];
				return $respuestaArreglo;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}

		public function ConsultarUsuarioId(){
			try {
				$query = parent::prepare("SELECT MAX(id_usuario) FROM usuarios");
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuestaArreglo = $query->fetchAll(parent::FETCH_ASSOC); 
				$id="";
				foreach($respuestaArreglo as $r){
						$id=$r['MAX(id_usuario)'];
				}
				return $id;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}

	
		}



		public function ObtenerOne($id){
			try {
				$query = parent::prepare("SELECT * FROM usuarios WHERE id_usuario = '$id'");
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuesta = $query->fetch(parent::FETCH_ASSOC); 
				return $respuesta;
				//$respuestaArreglo += ['ejecucion' => true];
				//return $respuestaArreglo;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}


		public function ObtenerUsuario($usuario){
			try {
				$query = parent::prepare("SELECT * FROM usuarios WHERE usuario = '$usuario' LIMIT 1");
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuestaArreglo = ['resultado' => $query->fetch(parent::FETCH_ASSOC)];
				$respuestaArreglo += ['ejecucion' => true];
				return $respuestaArreglo;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}

		public function ObtenerClaveEspecial($clave_especial,$usuario){
			try {
				$query = parent::prepare("SELECT usuario, clave_especial FROM usuarios WHERE clave_especial = '$clave_especial' AND usuario ='$usuario' AND rol ='1' ");
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuesta = $query->fetch(parent::FETCH_ASSOC); 
				//var_dump($respuesta);
				return $respuesta;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}
		
		


		public function BuscarDatos(){
			try {
				$query = parent::prepare("SELECT  usuario, correo FROM usuarios WHERE id_usuario = '$this->id_usuario' LIMIT 1");
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuestaArreglo = ['resultado' => $query->fetch(parent::FETCH_ASSOC)];
				$respuestaArreglo += ['ejecucion' => true];
				return $respuestaArreglo;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}
		public function ObtenerPermisos($rol_id){
			try {
				$query = parent::prepare("SELECT p.nombre as permiso FROM roles r 
					INNER JOIN roles_permisos rp ON r.id_rol=rp.rol_id INNER JOIN permisos p ON rp.permisos_id=p.id_permisos 
					WHERE r.id_rol=$rol_id ORDER BY rp.permisos_id");
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$res = $query->fetchAll(parent::FETCH_ASSOC);
				$permisos = [];
				foreach($res as $p){
					array_push($permisos, $p['permiso']);
				}
				$respuestaArreglo = ['resultado' => $permisos];
				$respuestaArreglo += ['ejecucion' => true];
				return $respuestaArreglo;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}

		public function encriptarS($palabra){
			$valor=unpack('H*',$palabra);
			$nivel1=base_convert($valor[1],16,2);
			$parte1="";
			$parte2="";
		
			for($n=0;$n<strlen($nivel1);$n++){
			  if($n<(strlen($nivel1)/2)){
				$parte1.=$nivel1[$n];
			  }
			  else{
				$parte2.=$nivel1[$n];
			  }
			}
		
			$parte1Encriptada="";
			for($n=0;$n<strlen($parte1);$n++){
			  if($parte1[$n]==1){
				$parte1Encriptada.="%";
			  }
			  else{
				$parte1Encriptada.="$";
			  }
			}
		
			$parte2Encriptada="";
			for($n=0;$n<strlen($parte2);$n++){
			  if($parte2[$n]==1){
				$parte2Encriptada.="%";
			  }
			  else{
				$parte2Encriptada.="$";
			  }
			}
		
			$nivel2=$parte2Encriptada."/".$parte1Encriptada;
		
			return $nivel2;
		
		
		  }
		
		  public function desencriptarS($palabra){
		
			$parte1="";
			$parte2="";
			$part2Decode="";
		
			for($n=0;$n<strlen($palabra);$n++){
		
			  if($palabra[$n]!="/"){
		
				$palabra[$n]=="$"?$palabra[$n]=0:$palabra[$n]=1;
		
			  }
			}
		
			$palabraDesencriptada=explode("/",$palabra);
		
			$part2=$palabraDesencriptada[0];
		
			$part1=$palabraDesencriptada[1];
		
			$completado= pack('H*', base_convert($part1.$part2, 2, 16));
		
			return $completado;
		  }

		  public function encriptar($cadena)
		  {
			  $salida = FALSE;
			  $password = hash('sha256', CODIGO_PASSWORD); //Genera Valor Cifrado en base a un string
			  $vectorInicializacion = substr(hash('sha256', CODIGO_VECTOR), 0, 16);
			  $salida = openssl_encrypt($cadena, METODO, $password, 0, $vectorInicializacion);
			  $salida = base64_encode($salida);
			  return $salida;
		  }
	  
		  public function desencriptar($cadena)
		  {
			  $password = hash('sha256', CODIGO_PASSWORD);
			  $vectorInicializacion = substr(hash('sha256', CODIGO_VECTOR), 0, 16);
			  $salida = openssl_decrypt(base64_decode($cadena), METODO, $password, 0, $vectorInicializacion);
			  return $salida;
		  }
		  public function encriptarContrasena($password)
		  {
			  $salida = password_hash($password, PASSWORD_DEFAULT, ['cost' => 8]);
			  return $salida;
		  }
		  public function verificarContrasena($password_verificar, $password)
		  {
			  $salida = password_verify($password_verificar, $password);
			  return $salida;
		  }

		public function Agregar(){
			$id= 0;
			try {
				$query = parent::prepare('SELECT MAX(id_usuario) as max FROM usuarios');
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$result = $query->fetchAll(parent::FETCH_ASSOC); 
				foreach($result as $row){
					if(!empty($row['max'])){
						$id = $row['max']+1;
					}else{
						$id++;
					}
				}
				$query = parent::prepare("INSERT INTO usuarios (id_usuario, cedula, usuario, nombre, apellido, contrasena, rol, correo, clave_especial, status) VALUES ($id, '{$this->cedula}', '{$this->username}', '{$this->nombre}', '{$this->apellido}', '{$this->password}', '{$this->rol}', '{$this->correo}', '{$this->clave_especial}', 1)");
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuestaArreglo = ['resultado' => $query->fetchAll(parent::FETCH_ASSOC)];
				$respuestaArreglo += ['ejecucion' => true];
				return $respuestaArreglo;
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}


		public function ModificarPassword($id,$clave){
			try{
				$query = parent::prepare("UPDATE usuarios SET contrasena = '$clave'
					WHERE id_usuario = '$id'");
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuestaArreglo = $query->fetchAll(parent::FETCH_ASSOC); 
				$respuestaArreglo += ['ejecucion' => true];
				return $respuestaArreglo;
			} 
			 catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}

		public function Modificar(){
			try{
				$query = parent::prepare("UPDATE usuarios SET cedula = '$this->cedula', usuario = '$this->username', 
					nombre = '$this->nombre', apellido = '$this->apellido', contrasena = '$this->password', rol = '$this->rol', 
					correo = '$this->correo', clave_especial ='$this->clave_especial'
					WHERE id_usuario = '$this->id_usuario'");
				$respuestaArreglo = '';
				$query->execute();
				$query->setFetchMode(parent::FETCH_ASSOC);
				$respuestaArreglo = $query->fetchAll(parent::FETCH_ASSOC); 
				$respuestaArreglo += ['ejecucion' => true];
				return $respuestaArreglo;
			} 
			 catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}


		public function Borrar(int $id){
			try {

				$query = parent::prepare("DELETE usuarios WHERE id = :id VALUES ($id, '{$this->cedula}', '{$this->username}', '{$this->nombre}', '{$this->apellido}', '{$this->password}', '{$this->rol}', '{$this->correo}', 0)");
				
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
		public function Inhabilitar($id){    //Método que elimina logicamente un registro
			try{
				$consulta = parent::prepare("UPDATE usuarios SET status=0 WHERE id_usuario=$id");
				$consulta->execute();
				$respuestaArreglo = ['ejecucion' => true];
				return $respuestaArreglo;
	
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}
		public function Habilitar($id){    //Método que habilita logicamente un registro
			try{
				$consulta = parent::prepare("UPDATE usuarios SET status=1 WHERE id_usuario=$id");
				$consulta->execute();
				$respuestaArreglo = ['ejecucion' => true];
				return $respuestaArreglo;
	
			} catch (PDOException $e) {
				$errorReturn = ['ejecucion' => false];
				$errorReturn += ['info' => "error sql:{$e}"];
				return $errorReturn;
			}
		}
		public function CambiarPassword(){

			$method = $_SERVER['REQUEST_METHOD'];
			if ($method != 'POST') {
				http_response_code(404);
				return false;
			}
			if (!empty($_POST['correo'])) {
				$correo = $_POST['correo'];
				//$pass = $_POST['pass'];
	
				//$pass = password_hash($pass, PASSWORD_BCRYPT, ['cost' => 8]);
				
				//$this->usuario->setPassword($pass);
				$this->usuario->setCorreo($correo);		
				//$this->usuario->setUsername($username);
	
				$execute = $this->login->ModificarPassword();
				if ($execute['ejecucion'] == true) {
					$usu = $this->usuario->ObtenerUsuario($username);
							$id = $usu['resultado']['id_usuario'];
							$usu = $this->usuario->ObtenerUsuario($username);
							$id = $usu['resultado']['id_usuario'];
							$pass = $_POST['pass'];
							$execute = $this->usuario->Modificar();
							echo '1';
				} else {
					echo "2";
				}
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
		public function setClaveEspecial($clave_especial){
			$this->clave_especial = $clave_especial;
		}




		public function getId(){
			return $this->id_usuario;
		}
		public function getNombre(){
			return $this->nombre;
		}
		public function getApellido(){
			return $this->apellido;
		}
		public function getCedula(){
			return $this->cedula;
		}
		public function getUsername(){
			return $this->username;
		}
		public function getRol(){
			return $this->rol;
		}
		public function getPassword(){
			return $this->password;
		}
		public function getCorreo(){
			return $this->correo;
		}

	}

?>