<?php

namespace content\controllers;

use config\settings\sysConfig as sysConfig;

class frontController extends sysConfig
{

	private $url;
	private $direccion;
	private $controlador;

	private $request;
	private $controller;
	private $method;
	private $params;

	public function __construct($request)
	{
		if (empty($request['url'])) {
			$request['url'] = "";
		}
		$this->request = $request['url'];
		$this->Url();
		$this->Controller();
		$this->Method();
		$this->Param();
		$this->Validar_URL();
	}

	public function Url()
	{
		$this->url = explode('/', $this->request);
		$this->direccion = _DIRECTORY_;
		$this->controlador = _CONTROLLER_;
	}
	public function Controller()
	{
		if(!empty($_SESSION['ut_usuario'])) {
			$this->controller = $this->url[0] == '' ? 'Home' : $this->url[0];
		}
		else{
			$this->controller = "Login";
		}
		$this->url[0] = $this->controller;
	}
	public function Method()
	{
		$this->method = !empty($this->url[1]) ? $this->url[1] : 'Consultar';
	}
	public function Param()
	{
		$this->params = !empty($this->url[2]) ? $this->url[2] : '';
	}

	private function Validar_URL()
	{
		$url = preg_match_all("/^[a-zA-Z0-9-@\/.=:_#$ ]{1,700}$/", $this->url[0]);
		if ($url == 1) {
			$this->Cargar_Pagina($this->url[0]); /* llamdo de la funcion que cargara las vistas */
		} else {
			require_once("errorController.php");
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

	private function Cargar_Pagina($url)
	{
		/* verificacion si el archivo existe , en la direccion predeterminada */
		if (file_exists($this->direccion . mb_strtolower($url) . $this->controlador)) {
			/* si existe trae el archivo solicitado mediante el require_once */
			require_once($this->direccion . mb_strtolower($url) . $this->controlador);

			$root = str_replace("/", "\\", $this->direccion);
			$method = $this->method;

			$class = $root . mb_strtolower($url) . "Controller";
			if (class_exists($class)) {
				$object = new $class($url);
				if (method_exists($object, $method)) {
					$object->$method($this->params);
				} else {
					require_once("errorController.php");
				}
			} else {
				require_once("errorController.php");
			}
		} else {

			require_once("errorController.php");
		}
	}
}
