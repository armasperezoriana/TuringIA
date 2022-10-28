<?php	

	namespace content\component;

	class headElement {

		static public function Heading(){
				// <link rel="stylesheet" href="'._ROUTE_.'view/vendor/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">
			echo ( 



				'<meta charset="utf-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">

				<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
				<meta name="description" content="">
				<meta name="author" content="">
    		
    		<link href="'._ROUTE_.'view/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
		    <link
		        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
		        rel="stylesheet">
		    <link href="'._ROUTE_.'assets/css/sb-admin-2.min.css" rel="stylesheet">
				<link rel="shortcut icon" type="image/k-icon" href="'._ROUTE_.'assets/img/uptaeb.png" class="img-circle">



				<link rel="stylesheet" href="'._ROUTE_.'view/vendor/plugins/sweetalert/sweetalert.css">
				<link rel="stylesheet" href="'._ROUTE_.'view/vendor/plugins/DataTables/datatables.css">


				<link rel="stylesheet" href="'._ROUTE_.'view/vendor/plugins/select2/css/select2.css">

				'
			);
		}


	}


?>
