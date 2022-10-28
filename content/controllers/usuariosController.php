<?php

namespace content\controllers;

use config\settings\sysConfig as sysConfig;
use content\component\headElement as headElement;
use content\modelo\homeModel as homeModel;
use content\modelo\usuariosModel as usuariosModel;
use content\modelo\rolesModel as rolesModel;
use content\traits\Utility;


class usuariosController
{
	use Utility;

	private $url;
	private $usuario;
	private $rol;

	function __construct($url)
	{

		$this->url = $url;
		$this->usuario = new usuariosModel();

		$this->rol = new rolesModel();
	}

	public function Consultar()
	{
		$objModel = new homeModel;
		$_css = new headElement;
		$_css->Heading();
		
		 if (in_array('usuarios', $_SESSION['ut_permisos']))
            {
	$usuarios = $this->usuario->Consultar();
		$roles = $this->rol->Consultar();
		$url = $this->url;
		require_once("view/usuariosView.php");
		
		return false;
	}else{
			
			require_once("view/errorPermisoView.php");
		return true;
		}
	}
	

	public function Mostrar($param)
    {
        $usuario = $this->usuario->ObtenerOne($param);
		$usuario['clave_especial']=$this->usuario->desencriptarS($usuario['clave_especial']);
        http_response_code(200);
        echo json_encode([
            'data' => $usuario
        ]);
    }



	public function Seguridad($param)
    {
        $usuario = $this->usuario->ObtenerOne($param);
        http_response_code(200);
        echo json_encode([
            'data' => $usuario
        ]);
    }


	public function Registrar()
	{
		if(!preg_match("/^[a-zA-ZÀ-ÿ\s]{3,20}$/",$_POST['nombre'])){

			echo json_encode([
				'titulo' => '¡Nombre incorrecto!',
				'mensaje' => 'No coincide con el formato aceptado',
				'tipo' => 'error',
			]);

			exit();
		}if(!preg_match("/^[a-zA-ZÀ-ÿ\s]{3,20}$/",$_POST['apellido'])){

			echo json_encode([
				'titulo' => '¡Apellido invalido!',
				'mensaje' => 'El Apellido ingresada no cumple con el formato aceptado',
				'tipo' => 'error',
			]);
			exit();
		}if(!preg_match("/^\d{7,14}$/",$_POST['cedula'])){

			echo json_encode([
				'titulo' => '¡Cedula invalida!',
				'mensaje' => 'No cumple con el formato aceptado',
				'tipo' => 'error',
			]);
			exit();
		}if(!preg_match("/^[a-zA-Z0-9\_\-]{4,16}$/",$_POST['username'])){

			echo json_encode([
				'titulo' => '¡Usuario incorrecto!',
				'mensaje' => 'No coincide con el formato aceptado',
				'tipo' => 'error',
			]);

			exit();
		}if(!preg_match("/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/",$_POST['pass'])){

			echo json_encode([
				'titulo' => '¡Contraseña invalida!',
				'mensaje' => 'La contraseña ingresada no cumple con el formato aceptado',
				'tipo' => 'error',
			]);
			exit();
		}if(!preg_match("/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/",$_POST['correo'])){

			echo json_encode([
				'titulo' => '¡Correo incorrecto!',
				'mensaje' => 'No coincide con el formato aceptado',
				'tipo' => 'error',
			]);

			exit();
		}if(!preg_match("/^[a-zA-ZÀ-ÿ\s]{5,7}$/",$_POST['clave_especial'])){

			echo json_encode([
				'titulo' => '¡Clave especial invalida!',
				'mensaje' => 'La clave especial no cumple con el formato aceptado',
				'tipo' => 'error',
			]);
			exit();
		}

		if (!empty($_POST['nombre']) && !empty($_POST['apellido'])) {
			$nombre = $_POST['nombre'];
			$apellido = $_POST['apellido'];
			$cedula = $_POST['cedula']; 
			$username = $_POST['username'];
			$id_rol = $_POST['rol'];
			$pass = $_POST['pass'];
			$correo = $_POST['correo'];
			$clave_especial = $_POST['clave_especial'];
			
			$clave_especial = $this->usuario->encriptarS(($_POST['clave_especial']));

			$pass = password_hash($pass, PASSWORD_BCRYPT, ['cost' => 8]);
			//cadena que encripta
			
			$this->usuario->setNombre($nombre);
			$this->usuario->setApellido($apellido);
			$this->usuario->setCedula($cedula);
			$this->usuario->setUsername($username);
			$this->usuario->setRol($id_rol);
			$this->usuario->setPassword($pass);
			$this->usuario->setCorreo($correo);
			$this->usuario->setClaveEspecial($clave_especial);
			//var_dump($clave_especial);
			//Agregar un Consultar para ver si existe Antes de Guardar o Rechazar;
			$result = $this->usuario->ConsultarOne();
			if ($result['ejecucion'] == true) {
				if (count($result) > 1) {
					echo "3";
				} else {
					$execute = $this->usuario->Agregar();
					//Codigo de bitacora sobre Agregar Usuario
					if ($execute['ejecucion'] == true) {
						$usu = $this->usuario->ObtenerUsuario($username);
						$id = $usu['resultado']['id_usuario'];
						echo '1';
					} else {
						echo "2";
					}
				}
			} else {
				echo "2";
			}
		}
	}
	


	public function ConsultarClaveEspecial()
	{
		$clave_especial = isset($_REQUEST['clave_especial']) ? $_REQUEST['clave_especial'] : null;
		$usuario = isset($_REQUEST['usuario']) ? $_REQUEST['usuario'] : null;
		$result = $this->usuario->ObtenerUsuario($usuario);
		//var_dump($clave_especial);
		$clave_especial = $this->usuario->encriptarS(($_POST['clave_especial']));

		$response= $this->usuario->ObtenerClaveEspecial($clave_especial,$usuario);
		if(!empty($response)){
			//var_dump($response);
			echo "1";
		}else{
			echo "2";
			//var_dump($response);
	
		}
	}
	

	public function ConsultarClaveEspecialRespaldar()
	{
		$clave_especial = isset($_REQUEST['clave_especial']) ? $_REQUEST['clave_especial'] : null;
		$usuario = isset($_REQUEST['usuario']) ? $_REQUEST['usuario'] : null;
		$result = $this->usuario->ObtenerUsuario($usuario);
		//var_dump($clave_especial);
		$clave_especial = $this->usuario->encriptarS(($_POST['clave_especial']));

		$response= $this->usuario->ObtenerClaveEspecial($clave_especial,$usuario);
		if(!empty($response)){
			//var_dump($response);
			echo "1";
		}else{
			echo "2";
			//var_dump($response);
	
		}
	}


	public function ConsultarClaveEspecialRestaurar()
	{
		$clave_especial = isset($_REQUEST['clave_especial']) ? $_REQUEST['clave_especial'] : null;
		$usuario = isset($_REQUEST['usuario']) ? $_REQUEST['usuario'] : null;
		$result = $this->usuario->ObtenerUsuario($usuario);
		//var_dump($clave_especial);
		$clave_especial = $this->usuario->encriptarS(($_POST['clave_especial']));

		$response= $this->usuario->ObtenerClaveEspecial($clave_especial,$usuario);
		if(!empty($response)){
			//var_dump($response);
			echo "1";
		}else{
			echo "2";
			//var_dump($response);
	
		}
	}


	public function ConsultarImagen()
	{
		$preguntauno= isset($_REQUEST['preguntauno']) ? $_REQUEST['preguntauno'] : null;
		$respuestauno = isset($_REQUEST['respuestauno']) ? $_REQUEST['respuestauno'] : null;
		 $img = isset($_REQUEST['img']) ? $_REQUEST['img'] : null;

		 $this->esteganografia->setImg($img);
		$response= $this->esteganografia->RevisarImgSeguridad($respuestauno,$img);
		
		if(!empty($response)){
			//var_dump($response);
			echo "1";
		}else{
			echo "2";
			//var_dump($response);
	
		}
	}
	
	


	public function Modificar()
	{
		$method = $_SERVER['REQUEST_METHOD'];
		if ($method != 'POST') {
			http_response_code(404);
			return false;
		}
		$id_usuario = $_POST['id_usuario'];
		if (!empty($_POST['nombre']) && !empty($_POST['apellido'])) {
			$nombre = $_POST['nombre'];
			$apellido = $_POST['apellido'];
			$cedula = $_POST['cedula'];
			$username = $_POST['username'];
			$id_rol = $_POST['rol'];
			$pass = $_POST['pass'];
			$correo = $_POST['correo'];
			$clave_especial = $_POST['clave_especial'];
			
			$clave_especial = $this->usuario->encriptarS(($_POST['clave_especial']));

			$pass = password_hash($pass, PASSWORD_BCRYPT, ['cost' => 8]);	
			$this->usuario->setId($id_usuario);
			$this->usuario->setNombre($nombre);
			$this->usuario->setApellido($apellido);
			$this->usuario->setCedula($cedula);
			$this->usuario->setUsername($username);
			$this->usuario->setRol($id_rol);
			$this->usuario->setPassword($pass);
			$this->usuario->setCorreo($correo);	
			$this->usuario->setClaveEspecial($clave_especial);
			
			$execute =  $this->usuario->ConsultarOne();
			// $execute = $this->usuario->ObtenerOne($id_usuario);
			if ($execute == true) {
						$execute = $this->usuario->Modificar();
					$usu = $this->usuario->ObtenerUsuario($username);
					$id = $usu['resultado']['id_usuario'];
			echo '1';
		} else {
			echo "2";
		}
	}
}
	

	public function Inhabilitar($id)
	{
		$method = $_SERVER['REQUEST_METHOD'];
		if ($method != 'POST') {
			http_response_code(404);
			return false;
		}

		$result = $this->usuario->Inhabilitar($id);
		if ($result['ejecucion'] == true) {
			echo json_encode([
				'titulo' => 'Registro eliminado!',
				'mensaje' => 'Registro eliminado en nuestro sistema',
				'tipo' => 'success'
			]);
		} else {
			echo json_encode([
				'titulo' => 'Ocurrió un error!',
				'mensaje' => 'No se pudo eliminar el registro',
				'tipo' => 'error'
			]);
		}
	}
	public function Habilitar($id)
	{
		$method = $_SERVER['REQUEST_METHOD'];
		if ($method != 'POST') {
			http_response_code(404);
			return false;
		}

		$result = $this->usuario->Habilitar($id);
		if ($result['ejecucion'] == true) {
			echo json_encode([
				'titulo' => 'Registro habilitado!',
				'mensaje' => 'Registro habilitado en nuestro sistema',
				'tipo' => 'success'
			]);
		} else {
			echo json_encode([
				'titulo' => 'Ocurrió un error!',
				'mensaje' => 'No se pudo habilitar el registro',
				'tipo' => 'error'
			]);
		}
	}

}


?>