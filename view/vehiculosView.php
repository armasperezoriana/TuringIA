<!DOCTYPE html>
<html lang="en">

<head>
    <title><?php echo _NAMESYSTEM_; ?> | <?php if(!empty($action)){echo $action; } ?> <?php if(!empty($url)){echo $url;} ?></title>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

</head>

<body id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <?php require_once'view/assets/menu.php'; ?>
        <!-- End of Sidebar -->
        

        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

            <!-- Main Content -->
            <div id="content">

                <!-- Topbar -->
                <?php require_once'view/assets/top_menu.php'; ?>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                   
                        <!-- <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generar Reportes</a> -->
                    </div>

                    <div class="container-fluid">

                    <!-- LEYENDA DEL MODULO -->
                  

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                         <center>   <h6 class="m-0 font-weight-bold text-primary">Módulo de Vehiculos</h6></center> 
                        </div>
                        <center> <img src="assets/img/bus.jpg" class="img-profile" width="40%"  right="500%" > </center> 
                      
                         <?php
              
                  if (in_array('registrar vehiculo', $_SESSION['ut_permisos']))
            {
                 ?>  
    
                        <div class="col-sm-2" style='text-align:right;'>
                               <span class="icon text-white-50">
                                            <i class="fas fa-check"></i>
                                        </span>
                                   <a href="#" class="btn btn-success btn-icon-split" data-target="#AgregarVehiculosModal" data-toggle="modal" data-target="#AgregarVehiculosModal">
                                        <span class="icon text-white-50">
                                            <i class="fas fa-plus"></i>
                                        </span>
                                        <span class="text">Vehiculo</span>

                                    </a>
                        </div>
                          <?php } ?>
                        <br>
                        <div class="table-responsive">
                        <div class="card-body" style='background:;'>
                            <div class="row" style='font-size:0.9em;'>
                                <table class="table table-striped datatable col-sm-12" id="" >
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Vehiculo</th>
                                            <th>Modelo</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                             <th><center>Acción</center></th>
                                              <th></th>
                                               <th></th>
                                        </tr>
                                    </thead>
                          
                                    <tbody>
                                        <?php foreach ($vehiculo as $value): ?>
                                            <?php if (!empty($value['id_vehiculo'])): ?>
                                        <tr>
                                            <td><?=$value['id_vehiculo']?></td>
                                            <td><?=$value['placa']?></td>
                                            <td><?=$value['modelo']?></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td> 

                    <div class="col-sm-7" style='text-align:right;'>

                    <a  data-id="<?= $value['id_vehiculo'] ?>" class="btn btn-info btn-icon-split consultar" name="consultar">

                        <span class="icon text-white-50">
                            <i class="fas fa-search"></i>
                        </span>
                        <span class="text"></span>
                    </a>
                </div>


                                                    </td>
                                                     <td>
    <?php
              
                  if (in_array('editar vehiculo', $_SESSION['ut_permisos']))
            {
                 ?>  
    
                                                        <div class="col-sm-7" style='text-align:right;'>

                                                              <a  data-id="<?= $value['id_vehiculo'] ?>" class="btn btn-warning btn-icon-split editar" name="editar">
                                                              <span class="icon text-white-50">
                                                                    <i class="fas fa-edit"></i>
                                                                </span>
                                                                <span class="text"></span>
                                                            </a>
                                                        </div>


                                                            </a>
                                                        </div>
 <?php } ?>

                                                    </td>
                                                    <td>
                                                        <?php
              
                  if (in_array('eliminar vehiculo', $_SESSION['ut_permisos']))
            {
                 ?>  
                                                        <div class="col-sm-7" style='text-align:right;'>
                                                            <?php if ($value['status'] == 1) { ?>
                                                                <a href="#" data-id="<?= $value['id_vehiculo'] ?>" class="btn btn-danger btn-icon-split inhabilitar" data-toggle="modal" data-target="">
                                                                    <span class="icon text-white-50">
                                                                        <i class="fas fa-trash"></i>
                                                                    </span>
                                                                    <span class="text"></span>
                                                                </a>
                                                            <?php } else { ?>
                                                                <a href="#" data-id="<?= $value['id_vehiculo']?>" class="btn btn-outline-info btn-icon-split habilitar" data-toggle="modal" data-target="">
                                                                    <span class="icon text-info-50">
                                                                        <i class="fas fa-trash-alt"></i>
                                                                    </span>
                                                                    <span class="text"></span>
                                                                </a>
                                                            <?php } ?>
                                                      
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

            </div> <!-- MODAL DE ayuda-->

            <div class="col-sm-7" style='text-align:right;'>
                <span class="btn btn-primary" href="#" data-toggle="modal" data-target="#AyudaModal">
                    Ayuda
                </span>

            </div>


            <?php require_once 'view/assets/footer.php'; ?>
            <!-- End of Content Wrapper -->
        </div>
        <!-- End of Page Wrapper -->

        <!-- MODAL DE REGISTRARSE-->
             <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>
    <style type="text/css">
        .modal{
            font-size:0.8em;
        }
    </style>
    <div class="modal fade" id="AgregarVehiculosModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="padding:0;">

        <div class="container">
                <div class="modal-dialog">
                    <div class="" role="document">
                        <div class="modal-content">
                            <div class="modal-header bg-primary" style="color:#FFF">
                                <h5 class="modal-title" id="exampleModalLabel">Registrar vehiculo</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                            <div class="modal-body">
                                <div class="row">
                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="placa"><b>Placa</b></label>
                                        <input type="text" class="form-control" name="placa" id="placa">
                                        <span class="errorPlaca" style="color:red"></span>
                                    </div>
                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="modelo"><b>Modelo</b></label>
                                        <select class="form-control select2" name="modelo" id="modelo">
                                                  <option value="">...</option>
                                                <option value="Encava">Encava</option>
                                                <option value="BEDFORD">BEDFORD</option>
                                                <option value="Caio">Caio</option>
                                                <option value="Dodge">Dodge</option>
                                                <option value="Envasa">Envasa</option>
                                                <option value="Kia">Kia</option>
                                                <option value="Iveco">Iveco</option>
                                                <option value="Yutong">Yutong</option>
                                                   <option value="Autopago">Autopago</option>
                                                     <option value="Otro">Otro</option>
                                            </select>
                                         <span class="errorModelo" style="color:red"></span>
                                    </div>
                               
                               <div class="form-group col-sm-12 col-md-6">
                                        <label for="funcionamiento"><b>Funcionamiento</b></label>
                                        <select class="form-control select2" name="funcionamiento" id="funcionamiento">
                        
                                                  <option value="">...</option>
                                                <option value="Operativo">Operativo</option>
                                                <option value="Inoperativo">Inoperativo</option>
                                            </select>
                                         <span class="errorFuncionamiento" style="color:red"></span>
                                    </div>
       

                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="tipo"><b>Kilometraje</b></label>
                                     <input type="text" class="form-control" name="kilometraje" id="kilometraje">
                                        <span class="errorKilometraje" style="color:red"></span>
                                    </div>
                                  
                            <div class="modal-footer">
                                <button class=" btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                                <a class="EnviarVehiculoRegistrar btn btn-primary" href="#">Agregar</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       </div>
        </div>
         </div>  


     </div>


<!-- MODAL DE MODIFICAR-->
   <div class="modal fade" id="ModificarVehiculoModal" tabindex="-1" role="dialog" aria-hidden="true" style="padding:0;" data-id="<?= $value['id_vehiculo'] ?>">


        <form id="modificarVehiculo" method="POST">

                <input type="hidden" id="id_vehiculo" name="id_vehiculo">
        <div class="container">
                <div class="modal-dialog">
                    <div class="" role="document">
                        <div class="modal-content">
                            <div class="modal-header bg-primary" style="color:#FFF">
                                <h5 class="modal-title">Modificar Vehiculo</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                        <div class="col-sm-7" style='text-align:right;'>
                                    <span href="#" data-toggle="modal" data-target="ModificarVehiculoModal">

                                    </span>
                                </div>

                           <div class="modal-body">
                            <div class="table-responsive">
                                <div class="row">
                                    <div class="form-group col-sm-12 col-md-6">
                                        
                                        <label for="placa"><b>Placa</b></label>
                                        <input type="text" class="form-control" name="placaM" id="placaM">
                                        <span class="errorPlacaM" style="color:red"></span>
                                    </div>
                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="Modelo"><b>Modelo</b></label>
                                        <select class="form-control select2" name="modeloM" id="modeloM" >
                                                  <option value="">...</option>
                                                <option value="Otro">Otro</option>
                                                <option value="Encava">Encava</option>
                                                <option value="BEDFORD">BEDFORD</option>
                                                <option value="Caio">Caio</option>
                                                <option value="Dodge">Dodge</option>
                                                <option value="Envasa">Envasa</option>
                                                <option value="Kia">Kia</option>
                                                <option value="Iveco">Iveco</option>
                                                <option value="Yutong">Yutong</option>
                                                    <option value="Microbús">Microbús</option>
                                                     <option value="Freightliner">Freightliner</option>
                                                      <option value="Kenworth">Kenworth</option>
                                            </select>
                                         <span class="errorModeloM" style="color:red"></span>
                                    </div>
                               
                               <div class="form-group col-sm-12 col-md-6">
                                        <label for="funcionamiento"><b>Funcionamiento</b></label>
                                        <select class="form-control select2" name="funcionamientoM" id="funcionamientoM">
                                                  <option value="">...</option>
                                                <option value="Operativo">Operativo</option>
                                                <option value="Inoperativo">Inoperativo</option>
                                            </select>
                                         <span class="errorFuncionamientoM" style="color:red"></span>
                                           </div>

                                          <div class="form-group col-sm-12 col-md-6">
                                        
                                        <label for="kilometraje"><b>Kilometraje</b></label>
                                        <input type="text" class="form-control" name="kilometrajeM
                                        " id="kilometrajeM">
                                        <span class="errorKilometrajeM" style="color:red"></span>
                                    </div>
                                    </div>
                       
                            <div class="modal-footer">
                                <button class=" btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                                <a class="ModificarVehiculos btn btn-primary" href="#">Guardar cambios</a>
                            </div>
                             </form> 
                        </div>
                    </div>
                </div>
        </div>
       </div>
        </div>
         </div>  


     </div>


  <!-- MODAL DE CONSULTAR-->
        

   <div class="modal fade" id="ConsultarVehiculoModal" tabindex="-1" role="dialog" aria-hidden="true" style="padding:0;" data-id="<?= $value['id_vehiculo'] ?>" >


              <form id="consultarVehiculo" method="POST">

                <input type="hidden" id="id_vehiculo" name="id_vehiculo">
        <div class="container">
                <div class="modal-dialog">
                    <div class="" role="document">
                        <div class="modal-content">
                            <div class="modal-header bg-primary" style="color:#FFF">
                                <h5 class="modal-title">Consultar Vehiculo</h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>

                        <div class="col-sm-7" style='text-align:right;'>
                                    <span href="#" data-toggle="modal" data-target="ConsultarVehiculoModal">

                                    </span>
                                </div>

                           <div class="modal-body">
                            <div class="table">
                                <div class="row">
                                    <div class="form-group col-sm-12 col-md-6">
                                        
                                        <label for="placa"><b>Placa</b></label>
                                        <input type="text" class="form-control-plaintext" disabled name="placaM" id="placaM">
                                        
                                    </div>
                                    <div class="form-group col-sm-12 col-md-6">
                                        <label for="Modelo"><b>Modelo</b></label>
                                        <select class="form-control-plaintext select2" disabled name="modeloM" id="modeloM" >
                                                  <option value="">...</option>
                                                <option value="Otro">Otro</option>
                                                <option value="Encava">Encava</option>
                                                <option value="BEDFORD">BEDFORD</option>
                                                <option value="Caio">Caio</option>
                                                <option value="Dodge">Dodge</option>
                                                <option value="Envasa">Envasa</option>
                                                <option value="Kia">Kia</option>
                                                <option value="Iveco">Iveco</option>
                                                <option value="Yutong">Yutong</option>
                                            </select>
                                    
                                    </div>
                               
                               <div class="form-group col-sm-12 col-md-6">
                                        <label for="funcionamiento"><b>Funcionamiento</b></label>
                                        <select class="form-control-plaintext select2" disabled name="funcionamientoM" id="funcionamientoM">
                                                  <option value="">...</option>
                                                <option value="Operativo">Operativo</option>
                                                <option value="Inoperativo">Inoperativo</option>
                                            </select>                                      
                                    </div>
                                        <div class="form-group col-sm-12 col-md-6">
                                        
                                        <label for="placa"><b>Kilometraje</b></label>
                                        <input type="text" class="form-control-plaintext" disabled name="kilometrajeM" id="kilometrajeM">kilometros
                                    </div>
                                    
                            <div class="modal-footer">
                                <button class=" btn btn-secondary" type="button" data-dismiss="modal">Cerrar</button>
                            
                            </div>
                             </form> 
                        </div>
                    </div>
                </div>
        </div>
       </div>
        </div>
         </div>  


     </div>


    <!-- MODULo de AYUDA -->

    <a class="scroll-to-top rounded" href="#page-top">
                            <i class="fas fa-angle-up"></i>
                        </a>
                        <style type="text/css">
                            .modal{
                                font-size:0.8em;
                            }
                        </style>
                        <div class="modal fade" id="AyudaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="padding:0;">
                            <div class="container">
                                    <div class="modal-dialog">
                                        <div class="" role="document">
                                            <div class="modal-content">

                        <div class="modal-content">
                            <div class="modal-header bg-primary" style="color:#FFF">
                                <h5 class="modal-title" id="exampleModalLabel"><center>Módulo de ayuda</center></h5>
                                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
  
   <div class="col-sm-7" style='text-align:right;'>
                            <span href="#" data-toggle="modal" data-target="#AyudaModal">
                            
                            </span>
                        </div>

                            <div class="modal-body">
                   En este modulo podrá visualizar los vehiculos que están registrados en el sistema a su vez registrar, eliminar y modificar
                  <br><br>
                  1. Para eliminar un vehiculo seleccione "eliminar" situada a la derecha del vehiculo
                  <br> <br>
                  2. Para modificar un vehiculo seleccione "modificar" situada a izquierda del vehiculo
                  <br><br>
                  3. Para registrar un vehiculo seleccione "registrar" que se muestra en el lado inferior derecho de la tabla
                  <br><br>
                  4. Para volver al menu principal presione "volver" situado en la parte inferior derecha
                  <br><br>
                  5. Para cerrar esta ventana emergente y seguir con el sistema presione e "cerrar" 
                  <br><br>
                  6. Para hacer una busqueda dentro del modulo debe ingresar el nombre completo del dato que desea buscar

            
                </p>
              </div> 
                 <div class="modal-footer">
                                <button class=" btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>

                            </div>
                              </div>
                                </div>  
                            </div>
                              </div>

 <!-- MODULo de ELIMINAR

    ype="text/javascript" src="'../../assets/js/vehiculo/validacionV.js -->

     
</body>

<script type="text/javascript" src="'../../assets/js/vehiculo/validacionV.js"></script>

</html>