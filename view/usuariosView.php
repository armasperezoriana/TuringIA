<!DOCTYPE html>
<html lang="en">

<head>
 <title>Turing- IA</title>
    <!-- Favicon-->
    <link rel="icon" type="image/x-icon" href="assets/img/logo-turing.png" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <!-- Google fonts-->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />

    <link href="assets/css/styles.css" rel="stylesheet" />
</head>

<body id="page-top">
    <style>
    .card-seguridad-img:hover,
    .card-seguridad-img-autenticar:hover {
        background: gray;
    }
    </style>
    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <?php require_once 'view/assets/menu.php'; ?>
        <!-- End of Sidebar -->


        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <?php require_once 'view/assets/top_menu.php'; ?>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                      
                        <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generar Reportes</a> -->
                    </div>

                    <div class="container-fluid">

                    
                       

                        <!-- DataTales Example -->
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <center>
                                    <h6 class="m-0 font-weight-bold text-primary">Módulo de Usuarios</h6>
                                </center>
                                <center> <img class="img-fluid" src="assets/img/logo-turing.png" alt="..." /></center> 
                
                            </div>

                        </div>
                        <span class="icon text-white-50">
                            <i class="fas fa-check"></i>
                        </span>
                        <?php
                            
                            if (in_array('registrar usuario', $_SESSION['ut_permisos']))
                            {
                               ?>
                        <a href="#" class="btn btn-success btn-icon-split" data-target="#AgregarUsuarioModal"
                            data-toggle="modal" data-target="#AgregarUsuarioModal">
                            <span class="icon text-white-50">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="text">Usuario</span>

                        </a>
                        <?php } ?>

                    </div>
                    <br>
                    <div class="table-responsive">
                        <div class="card-body" style='background:;'>
                            <div class="row" style='font-size:0.9em;'>
                                <table class="table table-striped datatable col-sm-200 " id="">
                                    <thead>
                                        <tr>
                                            <th>Identificación</th>
                                            <th>Usuario</th>
                                            <th>Nombres</th>
                                            <th>Correo</th>
                                            
                                            <th></th>
                                            <th>
                                                <center> Acción<center>
                                            </th>
                                            <th></th>

                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <?php foreach ($usuarios as $value) : ?>
                                        <?php if (!empty($value['id_usuario'])) : ?>
                                        <tr>
                                            <td><?= $value['cedula'] ?></td>
                                            <td><?= $value['usuario'] ?></td>
                                            <td><?= $value['nombre'].' '.$value['apellido']?></td>
                                            <td><?= $value['correo'] ?></td>
                                            <td> </td>
                                            <td></td>
                                            <td>

                                                <div class="col-sm-7" style='text-align:right;'>

                                                    <a href="#" data-id="<?= $value['id_usuario'] ?>"
                                                        class="btn btn-info btn-icon-split consultar" name="consultar">


                                                        <span class="icon text-white-50">
                                                            <i class="fas fa-search"></i>
                                                        </span>
                                                        <span class="text"></span>
                                                    </a>
                                                </div>


                                            </td>
                                            <td>
                                                <?php
                                                         
                                                         if (in_array('editar usuario', $_SESSION['ut_permisos']))
                                                         {
                                                            ?>

                                                <div class="col-sm-7" style='text-align:right;'>

                                                    <a href="#" data-id="<?= $value['id_usuario'] ?>"  id="'$value['id_usuario']'" 
                                                        class="btn btn-warning btn-icon-split editar" name="editar">
                                                        <span class="icon text-white-50" >
                                                            <i class="fas fa-edit"></i>
                                                        </span>
                                                        <span class="text"></span>
                                                    </a>
                                                </div>
                                                <?php } ?>

                                            </td>
                                           
                                        </tr>

                                        <?php endif ?>
                                        <?php endforeach ?>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        <!-- FOOTER-->

        <div class="col-sm-7" style='text-align:right;'>
            <span class="btn btn-primary" href="#" data-toggle="modal" data-target="#AyudaModal">
                Ayuda
            </span>
            

            <!-- <button class="btn btn-success btn-lg" data-toggle="modal" data-target="#modalSeguridad">
                Seguridad
            </button> -->
        </div>
     
        <?php require_once 'view/assets/footer.php'; ?>

        
       
    </div>

    <!-- MODALES -->
    <!-- MODAL DE REGISTRARSE-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
    <style type="text/css">
    .modal {
        font-size: 0.8em;
    }
    </style>
    <div class="modal fade" id="AgregarUsuarioModal" tabindex="-1" role="dialog" aria-hidden="true" style="padding:0;">
        <div class="container">
            <div class="modal-dialog">
                <div class="" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-primary" style="color:#FFF">
                            <h5 class="modal-title" id="exampleModalLabel">Datos de usuario</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div style="width:100%">

                            </div>
                            <br>
                            <div class="contenedor" id="pasouno">
                                <div class="row">
                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="cedula"><b>Identificación</b></label>
                                        <input type="text" class="form-control" name="cedula" id="cedula"
                                            placeholder="Ingrese su nro "
                                            title="Solo puede ingresar de 7 a 10 numeros" maxlength="9" required>
                                        <span class="errorCedula" style="color:red"></span>
                                    </div>
                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="nombre"><b>Nombre</b></label>
                                        <input type="text" class="form-control" name="nombre" id="nombre"
                                            pattern="^[a-zA-Z]{3,20}$" placeholder="Ingrese su nombre" required>
                                        <span class="errorNombre" style="color:red"></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="apellido"><b>Apellido</b></label>
                                        <input type="text" class="form-control" name="apellido" id="apellido"
                                            placeholder="Ingrese su Apellido" required>
                                        <span class="errorApellido" style="color:red"></span>
                                    </div>
                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="username"><b>Usuario</b></label>
                                        <input type="text" class="form-control" name="username" id="username"
                                            placeholder="Nombre de usuario" required>
                                        <span class="errorUsername" style="color:red"></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-sm-12 col-md-12">
                                        <label for="rol"><b>Rol</b></label>
                                        <select class="form-control select2" name="rol" id="rol"
                                            placeholder="Selecciona un rol">
                                            <option></option>
                                            <?php foreach ($roles as $rols) : ?>
                                            <?php if (!empty($rols['id_rol'])) : ?>
                                            <option value="<?= $rols['id_rol'] ?>"><?= $rols['nombre_rol'] ?>
                                            </option>
                                            <?php endif ?>
                                            <?php endforeach ?>
                                        </select>
                                        <span class="errorRol" style="color:red"></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="pass1"><b>Contraseña</b></label>
                                        <input type="password" class="form-control" name="pass1" id="pass1"
                                            placeholder="Ingrese su contraseña" required>
                                        <span class="errorPass1" style="color:red"></span>
                                        <div class="input-group-append">
                                            <center>
                                                <button id="show_password" class="btn btn-primary" type="button"
                                                    onclick="mostrarPassword()"> <span
                                                        class="fa fa-eye-slash icon password"></span> </button>
                                            </center>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="pass2"><b>Repite la Contraseña</b></label>
                                        <input type="password" class="form-control" name="pass2" id="pass2"
                                            placeholder="Repite tu clave" required>
                                        <span class="errorPass2" style="color:red"></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-sm-12 col-md-12">
                                        <label for="correo"><b>Correo</b></label>
                                        <input style="width: 100%;" type="email" class="form-control" name="correo"
                                            id="correo" value="" placeholder="example@gmail.com">
                                        <span class="errorCorreo" style="color:red"></span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-sm-12 col-md-12">
                                        <label for="clave_especial"><b>Empresa</b></label>
                                        <input style="width: 50%;" type="text" class="form-control"
                                            name="clave_especial" id="clave_especial"
                                            placeholder="Compañia a la perteneces ">
                                        <span class="errorClave" style="color:red"></span>
                                    </div>
                                </div>

                            </div>
                        
                                                        <div class="modal-footer">

                                                            <!--ESTE BOTON ENVIA TODO!--->
                                                            <div class="modal-footer">
                                                                <button class=" btn btn-secondary" type="button"
                                                                    data-dismiss="modal">Cancelar</button>
                                                                <a class="EnviarUsuariosRegistrar btn btn-primary"
                                                                    href="#">Agregar</a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- MODAL DE CONSULTAR-->

    <div class="modal fade" id="ConsultarUsuarioModal" tabindex="-1" role="dialog" aria-hidden="true" value="<? const id = $usuario->id;  ?>
" style="padding:0;">
        <form id="consultarUsuario" method="POST">
            <input type="hidden" id="id_usuario" name="id_usuario">
            <div class="container">
                <div class="modal-dialog">
                    <div class="" role="document">
                        <div class="modal-content">
                            <div class="modal-header bg-primary" style="color:#FFF">
                                <h5 class="modal-title">
                                    <center>Consultar Usuario</center>
                                </h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <div class="col-sm-7" style='text-align:right;'>
                                <span href="#" data-toggle="modal" data-target="ModificarUsuarioModal">

                                </span>
                            </div>

                            <div class="modal-body">
                                <div class="table-responsive">
                                    <div class="card-body">
                                        <div class="row" style='font-size:0.9em;'>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="form-group col-sm-12 col-md-6">

                                                        <label for="nombre"><b>Nombre</b></label>
                                                        <input type="text" class="form-control-plaintext" disabled
                                                            name="nombre" id="nombre">

                                                    </div>
                                                    <div class="form-group col-sm-12 col-md-6">
                                                        <label for="apellido"><b>Apellido</b></label>
                                                        <input type="text" class="form-control-plaintext" disabled
                                                            name="apellido" id="apellido">

                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-sm-12 col-md-6">
                                                        <label for="cedula"><b>Identificación</b></label>
                                                        <input type="text" class="form-control-plaintext" disabled
                                                            name="cedula" id="cedula">

                                                    </div>
                                                    <div class="form-group col-sm-12 col-md-6">
                                                        <label for="username"><b>Usuario</b></label>
                                                        <input type="text" class="form-control-plaintext" disabled
                                                            name="username" id="username">

                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-sm-12 col-md-12">
                                                        <label for="rol"><b>Rol</b></label>
                                                        <select style="width: 100%;"
                                                            class="form-control-plaintext select2" disabled name="rol"
                                                            id="rol">
                                                            <option></option>
                                                            <?php foreach ($roles as $rols) : ?>
                                                            <?php if (!empty($rols['id_rol'])) : ?>
                                                            <option value="<?= $rols['id_rol'] ?>">
                                                                <?= $rols['nombre_rol'] ?></option>
                                                            <?php endif ?>
                                                            <?php endforeach ?>
                                                        </select>

                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="form-group col-sm-12 col-md-12">
                                                        <label for="correo"><b>Correo</b></label>
                                                        <input style="width: 100%;" type="email" class="form-control"
                                                            name="correo" id="correo" class="form-control-plaintext"
                                                            disabled placeholder="example@gmail.com">

                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                    <button class=" btn btn-secondary" type="button"
                                                        data-dismiss="modal">Cerrar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </div>
    <!-- MODULo de AYUDA -->

    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
    <style type="text/css">
    .modal {
        font-size: 0.9em;
    }
    </style>
    <div class="modal fade" id="AyudaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true" style="padding:0;">
        <div class="container">
            <div class="modal-dialog">
                <div class="" role="document">
                    <div class="modal-content">

                        <div class="modal-content">
                            <div class="modal-header bg-primary" style="color:#FFF">
                                <h5 class="modal-title" id="exampleModalLabel">
                                    <center>Módulo de ayuda</center>
                                </h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <div class="col-sm-7" style='text-align:right;'>
                                <span href="#" data-toggle="modal" data-target="#AyudaModal">

                                </span>
                            </div>

                            <div class="modal-body">
                                <p>
                                    En este modulo podrá visualizar los usuarios que están registrados en el sistema
                                    a su vez registrar, eliminar y modificar
                                    <br><br>
                                    1. Para eliminar un usuario seleccione "eliminar" situada a la derecha del
                                    usuario
                                    <br> <br>
                                    2. Para modificar un usuario seleccione "modificar" situada a izquierda del
                                    usuario
                                    <br><br>
                                    3. Para registrar un usuario seleccione "registrar" que se muestra en el lado
                                    inferior derecho de la tabla
                                    <br><br>
                                    4. Para volver al menu principal presione "volver" situado en la parte inferior
                                    derecha
                                    <br><br>
                                    5. Para cerrar esta ventana emergente y seguir con el sistema presione e
                                    "cerrar"
                                    <br><br>
                                    6. Para hacer una busqueda dentro del modulo debe ingresar el nombre completo
                                    del dato que desea Buscar.
                                </p>
                            </div>
                            <div class="modal-footer">
                                <button class=" btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- MODAL DE MODIFICAR-->
    <div class="modal fade" id="ModificarUsuarioModal" tabindex="-1" role="dialog" aria-hidden="true" value="<? const id = $usuario->id;  ?>
" style="padding:0;">
        <form id="modificarUsuario" method="POST">
            <input type="hidden" id="id_usuario" name="id_usuario">
            <div class="container">
                <div class="modal-dialog">
                    <div class="" role="document">
                        <div class="modal-content">
                            <div class="modal-header bg-primary" style="color:#FFF">
                                <h5 class="modal-title">
                                    <center>Modificar Usuario</center>
                                </h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <div class="col-sm-7" style='text-align:right;'>
                                <span href="#" data-toggle="modal" data-target="ModificarUsuarioModal">

                                </span>
                            </div>

                            <div class="modal-body">
                                <div class="table-responsive">
                                    <div class="card-body">
                                        <div class="row" style='font-size:0.9em;'>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="form-group col-sm-12 col-md-6">

                                                        <label for="nombre"><b>Nombre</b></label>
                                                        <input type="text" class="form-control" name="nombre"
                                                            id="nombre">
                                                        <span class="errorNombreM" style="color:red"></span>
                                                    </div>
                                                    <div class="form-group col-sm-12 col-md-6">
                                                        <label for="apellido"><b>Apellido</b></label>
                                                        <input type="text" class="form-control" name="apellido"
                                                            id="apellido">
                                                        <span class="errorApellidoM" style="color:red"></span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-sm-12 col-md-6">
                                                        <label for="cedula"><b>Identificación</b></label>
                                                        <input type="text" class="form-control" name="cedula"
                                                            id="cedula">
                                                        <span class="errorCedulaM" style="color:red"></span>
                                                    </div>
                                                    <div class="form-group col-sm-12 col-md-6">
                                                        <label for="username"><b>Usuario</b></label>
                                                        <input type="text" class="form-control" name="username"
                                                            id="username">
                                                        <span class="errorUsernameM" style="color:red"></span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-sm-12 col-md-12">
                                                        <label for="rol"><b>Rol</b></label>
                                                        <select style="width: 100%;" class="form-control select2"
                                                            disabled name="rol" id="rol">
                                                            <option></option>
                                                            <?php foreach ($roles as $rols) : ?>
                                                            <?php if (!empty($rols['id_rol'])) : ?>
                                                            <option value="<?= $rols['id_rol'] ?>">
                                                                <?= $rols['nombre_rol'] ?></option>
                                                            <?php endif ?>
                                                            <?php endforeach ?>
                                                        </select>
                                                     
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-sm-12 col-md-6">
                                                        <label for="Contraseña<"><b>Contraseña</b></label>
                                                        <input type="password" class="form-control" name="pass1"
                                                            id="pass1" value="<?= $value['pass1'] ?>"
                                                            placeholder="Ingrese su contraseña" required>
                                                        <span class="errorPassM" style="color:red"></span>
                                                    </div>
                                                    <br> <br>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-sm-12 col-md-12">
                                                        <label for="correo"><b>Correo</b></label>
                                                        <input style="width: 100%;" type="email" class="form-control"
                                                            name="correo" id="correo" value="<?= $value['correo'] ?>"
                                                            placeholder="example@gmail.com">
                                                        <span class="errorCorreoM" style="color:red"></span>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="form-group col-sm-12 col-md-12">
                                                        <label for="clave_especial"><b>Empresa</b></label>
                                                        <input style="width: 50%;" type="tex" class="form-control"
                                                            name="clave_especial" id="clave_especial"
                                                            placeholder="Introduce tu compañia"
                                                            value="<?= $value['clave_especial'] ?>">
                                                        <span class="errorClaveEM" style="color:red"></span>
                                                    </div>
                                                </div>
                                               
                                                                                <div class="modal-footer">

                                                                                    <!--ESTE BOTON ENVIA TODO!--->
                                                                                    <div class="modal-footer">
                                                                                        <button
                                                                                            class=" btn btn-secondary"
                                                                                            type="button"
                                                                                            data-dismiss="modal">Cancelar</button>
                                                                                        <a class="ModificarUsuarios btn btn-primary"
                                                                                            href="#">Agregar</a>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
        </form>

        <script type="text/javascript" src="'../../assets/js/select2.min.js"></script>
        
</body>
<script type="text/javascript">
function mostrarPassword() {
    var cambio = document.getElementById("pass1");

    if (cambio.type == "password") {
        cambio.type = "text";
        $('.password').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.password').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}

function mostrarPassword2() {
    var cambio2 = document.getElementById("pass2");
    if (cambio2.type == "password") {
        cambio2.type = "text";
        $('.password').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.password').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
}
</script>


</html>