<?php	

	$html404 = '<!DOCTYPE html>
<html lang="en">

<head>
    <title><?php echo _NAMESYSTEM_; ?> | <?php if(!empty($action)){echo $action; } ?> <?php if(!empty($url)){echo $url;} ?></title>

</head>

<body id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <?php require_once '._ROUTE_.'view/assets/menu.php; ?>
        <!-- End of Sidebar -->
        

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">
	</script>
	
	<style>

	body{
		margin:0;padding:0;
		bottom:80%;
		background-image: url('._ROUTE_.'assets/img/undraw_posting_photo.svg);
		background-repeat: no-repeat;
		background-size: 50% 50%;
		background-position: center;
	}

	</style>




                </div>
               

    <p class="text-gray-500 mb-0"><center>Lo sentimos la pagina que busca no existe!...</p>
    <a href="index.php">&larr; <h2>Volver</h2> </center></a>
</div>
';

		// margin-top:100px;
		// background-size: cover;

?>