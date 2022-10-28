<?php

namespace content\controllers;

use config\settings\sysConfig as sysConfig;
use content\component\headElement as headElement;
use content\modelo\loginModel as loginModel;
use content\modelo\usuariosModel as usuariosModel;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;


require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
//require 'vendor/autoload.php';

class loginController
{
	//use Utility;
	private $url;
	private $login;

	function __construct($url)
	{
		$this->url = $url;
		$this->usuario = new usuariosModel();
		$this->login = new loginModel();
	}

	public function Consultar()
	{
		if(!empty($_SESSION['ut_usuario'])) {
			header('Location: Home');
		}
		$objModel = new loginModel;
		$_css = new headElement;
		$_css->Heading();

		$url = $this->url;
		$usuarios = $this->usuario->Consultar();

		require_once("view/loginView.php");

	}

	public function IniciarSesion()
	{
		if(!preg_match("/^[a-zA-Z0-9\_\-]{4,16}$/",$_POST['username'])){

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
		}


		if (!empty($_POST['username']) || !empty($_POST['pass'])) {
			$username = $_POST['username'];
			$pass= $_POST['pass'];
			 $this->usuario->setPassword($pass);
			//Agregar un Consultar para ver si existe el registro; 
			$result = $this->usuario->ObtenerUsuario($username);
			
			
			if ($result['ejecucion'] == true) {
				$res = $result['resultado'];
				if ($res) {
					if(password_verify($pass, $res['contrasena'])){
						$resultP = $this->usuario->ObtenerPermisos($res['rol']);
						$permisos = $resultP['resultado'];
						$_SESSION['ut_usuario'] = $res['usuario'];
						$_SESSION['ut_id'] = $res['id_usuario'];
						$_SESSION['ut_rol'] = $res['rol'];
						$_SESSION['ut_nombre'] = $res['nombre'];
						$_SESSION['ut_apellido'] = $res['apellido'];
						$_SESSION['ut_cedula'] = $res['cedula'];
						$_SESSION['ut_correo'] = $res['correo'];
						$_SESSION['ut_permisos'] = $permisos;
						echo json_encode([
							'tipo' => 'success', 'mensaje' => 'Sesión Iniciada'
						]); 
					}
					else{
						echo json_encode([
							'titulo' => '¡Contraseña incorrecta!',
							'mensaje' => 'La Contraseña ingresada es incorrecta',
							'tipo' => 'error',
						]);
					}
				} else {
					echo json_encode([
						'titulo' => '¡Usuario incorrecto!',
						'mensaje' => 'Por favor verifique el usuario',
						'tipo' => 'error',
					]);
				}
			} else {
				echo json_encode([
					'titulo' => '¡Error!',
					'mensaje' => 'Intente nuevamente',
					'tipo' => 'error',
				]);
			}
		}
	}


public function codigoAleatorio(){
$caracteres='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#?*-';
//$logitud ='10';
for ($i =0; $i<7; $i++ ){
echo substr(($caracteres), rand (0,65), 1);
	}
}

public function emailValidation(){
	//header('Content-Type: application/json; charset=utf-8');
	$correo = isset($_REQUEST['correo']) ? $_REQUEST['correo'] : null;
	$response =	$this->login->buscarCorreo($correo);
	// json_encode($response);
	if(!empty($response)){
		http_response_code(200);
	}else{

		http_response_code(404);
	}


}

public function modificarClaveUsuario(){
	require_once("view/recuperarUsuarioView.php");
	if(isset($_POST['pass']))
{
	$pass = password_hash($pass, PASSWORD_BCRYPT, ['cost' => 8]);
	$this->usuario->setPassword($pass);
		echo 'Cambio de clave exitosa';
	}else{
      echo "Error al vericar su clave";
	}
}



public function mailReset(){

		$longitud ='7';
		$caracteres='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#?*-';
		$miclave = substr(($caracteres), rand (0,66), $longitud);
		$clave = $miclave;
		$value = password_hash($clave, PASSWORD_BCRYPT, ['cost' => 8]);



		$correo = isset($_REQUEST['correo']) ? $_REQUEST['correo'] : null;
		$usuario = $this->login->userByCorreo($correo);
		$response = $this->usuario->ModificarPassword($usuario['id_usuario'],$value);

		if ($response){
		
		setcookie("pass", $value, time()+3600);  /* expira en 1 hora */
		$value =  password_hash($clave, PASSWORD_BCRYPT, ['cost' => 8]);
		//var_dump($correo);
			
	
			$mail = new PHPMailer(true);
			try {
				//Server settings
				$mail->SMTPDebug = 0;                      //Enable verbose debug output
				$mail->isSMTP();                                            //Send using SMTP
				$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
				$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
				$mail->Username   = 'armasoriana98@gmail.com';                     //SMTP username
				$mail->Password   = 'sgsnkewqzajegxgr';                               //SMTP password
				$mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
				$mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

				//Recipients
				$mail->setFrom($mail->Username, 'SISTEMA UT');
			$mail->addAddress($usuario['correo'], 'Usuario ');     //a quien se le va enviar
				
				//Content
				$mail->isHTML(true);                                  //Set email format to HTML
				$mail->Subject = 'Restablecer password SISTEMA UT';
				$mail->Body    = '<b>SISTEMA UNIDAD DE TRANSPORTE-RECUPERACIÓN DE USUARIO</b>
					<center>Correo automático de recuperación</center>
					<h2>Hola! '.$usuario['nombre'].'   '.$usuario['apellido'].'</h2>
				Si solicitaste la recuperación de acceso para tu usuario:
								<h4> '.$usuario['usuario'].'</h4>, usa el codigo que aparece a continuación 
								<b>Nueva clave:</b>. '.$clave.'
								Ingresa en el formulario de modificación para completar el proceso. Esta es una clave temporal y te recomendamos modificarla al ingresar al sistema.<br>
								Si no solicitaste esto, puedes ignorar este correo. <br>
							<br>';
			$mail->send();
			echo json_encode([
				'tipo' => 'success', 'mensaje' =>  'Enlace enviado al correo '.$usuario['correo'],
			]); 
			require_once("view/recuperarUsuarioView.php");
			return true;
			} catch (Exception $e) {
				echo json_encode([
					'error' => true,
					'message' => 'No se pudo enviar el correo. Lo sentimos! Intente de nuevo.',
				]);
				return false;
			}
		}else{
				echo json_encode([
					'error' => true,
					'message' => 'Correo no registrado.',
				]);
			}
		}




	public function Iniciar($username, $pass)
	{

		if (isset($_POST['username']) && ($_POST['pass'] !== "")) {

			$username = ($_POST['username'] !== "") ? $_POST['username'] : NULL;

			$pass = ($_POST['pass'] !== "") ? $_POST['pass'] : NULL;

		} else {

			echo "Datos equivocados";
		}
	}

	public function logout(){
		session_destroy();
		header('Location: ../login');
	}
}
