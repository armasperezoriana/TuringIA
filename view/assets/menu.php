<script type="text/javascript" src="'../../assets/js/seguridad/seguridadgeneral.js"></script>
<ul class="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="<?=_ROUTE_ ?>">
            
                <div class="sidebar-brand-icon">
                    <img src="assets/img/logo-turing.png" style="width:50px;">
                </div>
                <div class="sidebar-brand-text mx-3">TURING IA- <?php 

                    echo ucwords($_SESSION['ut_usuario'])." ".ucwords($_SESSION['ut_nombre']);


                    ?>
                   
                    
                </div>
            </a>    
                
            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" href="<?=_ROUTE_ ?>Home">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Panel de Control </span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                MENÚ
            </div>

            <!-- Nav Item - USUARIOS Menu  href="<?=_ROUTE_ ?>Usuarios"-->
            <?php
         
                  if (in_array('usuarios', $_SESSION['ut_permisos']))
            {
                 ?>
                    <li class="nav-item">
                <a class="nav-link collapsed" href="<?=_ROUTE_ ?>Usuarios">

                
                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    <span>Usuarios</span>
                </a>
            
            </li>
            
             

                
            <!-- MODAL IMAGEN DE SEGURIDAD MANTENIMIENTOS -->
<div class="modal fade" id="modalSeguridadMantenimientos" role="dialog" data-controls-modal="your_div_id"
    data-backdrop="static" data-keyboard="false">>
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Body -->
            <div class="modal-body">
                <p class="statusMsg"></p>
                <form id="modalSeguridadMantenimientos">
                    <input type="hidden" id="id_usuario" name="id_usuario">
                    <div class="form-group">
                        <div class="modal-header bg-primary" style="color:#FFF">
                            <center>
                                <p>
                                <h4><b>Seleccione su imagen de seguridad</b></h4>
                                </p>
                            </center>
                        </div>
                    </div>
                    <div class="container">
                        <div>
                            <div class="" role="document"  id="modalSeguridadMantenimientos">
                                <TABLE>
                                    <TR>
                                        <TH>
                                            <center> </center>
                                        </TH>
                                        <TH>
                                            <center> </center>
                                        </TH>
                                        <TH>
                                            <center> </center>
                                        </TH>
                                        <TH>
                                            
                                        </TH>
                                    </TR>
                                    <TR >

                                        <TD><img src="assets/img/seguridad/QVZqY3ZuempkRjNka1Bjc0NrcDVNdz09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img='QVZqY3ZuempkRjNka1Bjc0NrcDVNdz09.png' id="img"
                                                style="width:100%; height:100%;">
                                        </td>
                                        </TD>
                                        <TD> <img
                                                src="assets/img/seguridad/ZHRlVlJGQloyZEZWVS9BY05LL0U5UT09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img='ZHRlVlJGQloyZEZWVS9BY05LL0U5UT09.png' id="img"
                                                style="width:100%; height:100%;">
                                        </TD>
                                        <TD> <img
                                                src="assets/img/seguridad/YXo0ZDdOM0lZZWhCaE8yczcvZDdFZz09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img='YXo0ZDdOM0lZZWhCaE8yczcvZDdFZz09.png' id="img"
                                                style="width:100%; height:100%;">
                                        </TD>
                                        <TD><img src="assets/img/seguridad/eXgxR2trVEtzeXVueU9zdXBSRjNKZz09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img="eXgxR2trVEtzeXVueU9zdXBSRjNKZz09.png" id="img"
                                                style="width:75%; height:100%;">

                                        </TD>
                                    </TR>
                                    <br><br>
                            </div>
                            </table>
                            <!--- PREGUNTA 1 --->
                            <label for="pregunta"><b>Pregunta
                                    1:</b></label>
                            <div class="form-group col-sm-12 col-md-12">
                                <select class="form-control select2" name="pregunta" id="preguntauno" style="width:100%;" required>

                                    <option value="">

                                    </option>
                                    <option value="¿Cuál era el nombre de tu mejor amigo?">
                                        ¿Cuál
                                        era el
                                        nombre
                                        de tu
                                        mejor
                                        amigo?
                                    </option>
                                    <option value="¿Cuál es tu color favorito?">
                                        ¿Cuál es
                                        tu
                                        color
                                        favorito?
                                    </option>
                                    <option value="¿Cómo se llama tu perro?">
                                        ¿Cómo se
                                        llama tu
                                        perro?
                                    </option>
                                    <option value="¿Donde estudiaste?">
                                        ¿Donde
                                        estudiaste?
                                    </option>
                                    <option value="¿Donde naciste?">
                                        ¿Donde
                                        naciste?
                                    </option>
                                    <option value="¿Cuál es tu apodo?">
                                        ¿Cuál es
                                        tu
                                        apodo?
                                    </option>
                                    <option value="¿Segundo nombre de tu padre?">
                                        ¿Segundo
                                        nombre
                                        de tu
                                        padre?
                                    </option>
                                    <option value="¿Dulce favorito?">
                                        ¿Dulce
                                        Favorito?
                                    </option>
                                    <option value="¿Donde estudiaste?">
                                        ¿Donde
                                        estudiaste?
                                    </option>
                                    <option value="¿Gatos o perros?">
                                        ¿Gatos o
                                        perros?
                                    </option>
                                </select>
                                <span style="color:red"></span>


                                <span class="errorPreguntaunoI" style="color:red"></span>
                            </div>

                            <label for="respuesta"><b>Respuesta</b></label>
                            <input type="text" class="form-control" name="respuestauno" id="respuestauno" required>
                            <span class="errorrespuestaI" style="color:red"></span>
                        </div>
                        <br>
                                                <font size="2"> <b>Nota:</b>El sistema distingue entre mayúsculas y minúsculas, tome en cuenta como ingreso la información al registrarse</font></p>
                                </div>

                            </form>
                        </div>

                        <!-- Modal Footer -->
                        <div class="modal-footer">

                            <button class=" btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                            <a class="ConsultarSeguridadMantenimientos btn btn-primary" href="#">Verificar</a>
                          
                        </div>
                    </div>
                </div>
            </div> 

   </li>
        <?php } ?>
     <!-- Nav Item - SEGURIDAD Menu -->

   <?php
                
                  if (in_array('seguridad', $_SESSION['ut_permisos']))
            {
                 ?>
         
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseSeguridad"
                    aria-expanded="true" aria-controls="collapseSeguridad">
                    <i class="fas fa-fw fa-cog"></i>
                    <span>Seguridad</span>
                </a>
                <div id="collapseSeguridad" class="collapse" aria-labelledby="headingSeguridad" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Seguridad del sistema</h6>
                       <!--  <a class="collapse-item" href="<?=_ROUTE_ ?>Esteganografia">Gestión de Esteganografia</a>
                        <a class="collapse-item" href="cards.php">Respaldo de la BD</a>-->
                           <a class="collapse-item" data-toggle="modal" data-target="#modalSeguridadRoles"> Roles</a>
                        <a class="collapse-item" href="<?=_ROUTE_ ?>Bitacora">Bitacora</a>
                    </div>
                </div>

                
                
            <!-- MODAL IMAGEN DE SEGURIDAD ROLES -->
<div class="modal fade" id="modalSeguridadRoles" role="dialog" data-controls-modal="your_div_id"
    data-backdrop="static" data-keyboard="false">>
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Body -->
            <div class="modal-body">
                <p class="statusMsg"></p>
                <form id="modalSeguridadRoles">
                    <input type="hidden" id="id_usuario" name="id_usuario">
                    <div class="form-group">
                        <div class="modal-header bg-primary" style="color:#FFF">
                            <center>
                                <p>
                                <h4><b>Seleccione su imagen de seguridad</b></h4>
                                </p>
                            </center>
                        </div>
                    </div>
                    <div class="container">
                        <div>
                            <div class="" role="document"  id="modalSeguridadRoles">
                                <TABLE>
                                    <TR>
                                        <TH>
                                            <center>  </center>
                                        </TH>
                                        <TH>
                                            <center>  </center>
                                        </TH>
                                        <TH>
                                            <center>  </center>
                                        </TH>
                                        <TH>
                                             
                                        </TH>
                                    </TR>
                                    <TR >

                                        <TD><img src="assets/img/seguridad/QVZqY3ZuempkRjNka1Bjc0NrcDVNdz09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img='QVZqY3ZuempkRjNka1Bjc0NrcDVNdz09.png' id="img"
                                                style="width:100%; height:100%;">
                                        </td>
                                        </TD>
                                        <TD> <img
                                                src="assets/img/seguridad/ZHRlVlJGQloyZEZWVS9BY05LL0U5UT09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img='ZHRlVlJGQloyZEZWVS9BY05LL0U5UT09.png' id="img"
                                                style="width:100%; height:100%;">
                                        </TD>
                                        <TD> <img
                                                src="assets/img/seguridad/YXo0ZDdOM0lZZWhCaE8yczcvZDdFZz09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img='YXo0ZDdOM0lZZWhCaE8yczcvZDdFZz09.png' id="img"
                                                style="width:100%; height:100%;">
                                        </TD>
                                        <TD><img src="assets/img/seguridad/eXgxR2trVEtzeXVueU9zdXBSRjNKZz09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img="eXgxR2trVEtzeXVueU9zdXBSRjNKZz09.png" id="img"
                                                style="width:75%; height:100%;">

                                        </TD>
                                    </TR>
                                    <br><br>
                            </div>
                            </table>
                            <!--- PREGUNTA 1 --->
                            <label for="pregunta"><b>Pregunta
                                    1:</b></label>
                            <div class="form-group col-sm-12 col-md-12">
                                <select class="form-control select2" name="pregunta" id="preguntauno" style="width:100%;" required>

                                    <option value="">

                                    </option>
                                    <option value="¿Cuál era el nombre de tu mejor amigo?">
                                        ¿Cuál
                                        era el
                                        nombre
                                        de tu
                                        mejor
                                        amigo?
                                    </option>
                                    <option value="¿Cuál es tu color favorito?">
                                        ¿Cuál es
                                        tu
                                        color
                                        favorito?
                                    </option>
                                    <option value="¿Cómo se llama tu perro?">
                                        ¿Cómo se
                                        llama tu
                                        perro?
                                    </option>
                                    <option value="¿Donde estudiaste?">
                                        ¿Donde
                                        estudiaste?
                                    </option>
                                    <option value="¿Donde naciste?">
                                        ¿Donde
                                        naciste?
                                    </option>
                                    <option value="¿Cuál es tu apodo?">
                                        ¿Cuál es
                                        tu
                                        apodo?
                                    </option>
                                    <option value="¿Segundo nombre de tu padre?">
                                        ¿Segundo
                                        nombre
                                        de tu
                                        padre?
                                    </option>
                                    <option value="¿Dulce favorito?">
                                        ¿Dulce
                                        Favorito?
                                    </option>
                                    <option value="¿Donde estudiaste?">
                                        ¿Donde
                                        estudiaste?
                                    </option>
                                    <option value="¿Gatos o perros?">
                                        ¿Gatos o
                                        perros?
                                    </option>
                                </select>
                                <span style="color:red"></span>


                                <span class="errorPreguntaunoI" style="color:red"></span>
                            </div>

                            <label for="respuesta"><b>Respuesta</b></label>
                            <input type="text" class="form-control" name="respuestauno" id="respuestauno" required>
                            <span class="errorrespuestaI" style="color:red"></span>
                        </div>
                        <br>
                        <font size="2"> <b>Nota:</b>El sistema distingue entre mayúsculas y minúsculas, tome en cuenta como ingreso la información al registrarse</font></p>
                            </form>
                        </div>

                        <!-- Modal Footer -->
                        <div class="modal-footer">

                            <button class=" btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                            <a class="ConsultarSeguridadRoles btn btn-primary" href="#">Verificar</a>
                          
                        </div>
                    </div>
                </div>
            </div> 
            </li>
       <?php } ?>

            <!-- Nav Item - Charts -->
             <?php
                
                  if (in_array('reportes', $_SESSION['ut_permisos']))
            {
                 ?>
            <li class="nav-item">
                <a class="nav-link" href="<?=_ROUTE_ ?>Reportes">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Reportes</span></a>

                    <!-- MODAL IMAGEN DE SEGURIDAD -->
<div class="modal fade" id="modalSeguridad" role="dialog" data-controls-modal="your_div_id"
    data-backdrop="static" data-keyboard="false">>
    <div class="modal-dialog">
        <div class="modal-content">
            <!-- Modal Body -->
            <div class="modal-body">
                <p class="statusMsg"></p>
                <form id="modalSeguridad">
                    <input type="hidden" id="id_usuario" name="id_usuario">
                    <div class="form-group">
                        <div class="modal-header bg-primary" style="color:#FFF">
                            <center>
                                <p>
                                <h4><b>Seleccione su imagen de seguridad</b></h4>
                                </p>
                            </center>
                        </div>
                    </div>
                    <div class="container">
                        <div>
                            <div class="" role="document"  id="modalSeguridad">
                                <TABLE>
                                    <TR>
                                        <TH>
                                            <center> </center>
                                        </TH>
                                        <TH>
                                            <center> </center>
                                        </TH>
                                        <TH>
                                            <center> </center>
                                        </TH>
                                        <TH>
                                            
                                        </TH>
                                    </TR>
                                    <TR >

                                        <TD><img src="assets/img/seguridad/QVZqY3ZuempkRjNka1Bjc0NrcDVNdz09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img='QVZqY3ZuempkRjNka1Bjc0NrcDVNdz09.png' id="img"
                                                style="width:100%; height:100%;">
                                        </td>
                                        </TD>
                                        <TD> <img
                                                src="assets/img/seguridad/ZHRlVlJGQloyZEZWVS9BY05LL0U5UT09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img='ZHRlVlJGQloyZEZWVS9BY05LL0U5UT09.png' id="img"
                                                style="width:100%; height:100%;">
                                        </TD>
                                        <TD> <img
                                                src="assets/img/seguridad/YXo0ZDdOM0lZZWhCaE8yczcvZDdFZz09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img='YXo0ZDdOM0lZZWhCaE8yczcvZDdFZz09.png' id="img"
                                                style="width:100%; height:100%;">
                                        </TD>
                                        <TD><img src="assets/img/seguridad/eXgxR2trVEtzeXVueU9zdXBSRjNKZz09.png"
                                                class="card p-2 card-seguridad-img" data-action="consultar"
                                                data-img="eXgxR2trVEtzeXVueU9zdXBSRjNKZz09.png" id="img"
                                                style="width:75%; height:100%;">

                                        </TD>
                                    </TR>
                                    <br><br>
                            </div>
                            </table>
                            <!--- PREGUNTA 1 --->
                            <label for="pregunta"><b>Pregunta
                                    1:</b></label>
                            <div class="form-group col-sm-12 col-md-12">
                                <select class="form-control select2" name="pregunta" id="preguntauno" style="width:100%;" required>

                                    <option value="">

                                    </option>
                                    <option value="¿Cuál era el nombre de tu mejor amigo?">
                                        ¿Cuál
                                        era el
                                        nombre
                                        de tu
                                        mejor
                                        amigo?
                                    </option>
                                    <option value="¿Cuál es tu color favorito?">
                                        ¿Cuál es
                                        tu
                                        color
                                        favorito?
                                    </option>
                                    <option value="¿Cómo se llama tu perro?">
                                        ¿Cómo se
                                        llama tu
                                        perro?
                                    </option>
                                    <option value="¿Donde estudiaste?">
                                        ¿Donde
                                        estudiaste?
                                    </option>
                                    <option value="¿Donde naciste?">
                                        ¿Donde
                                        naciste?
                                    </option>
                                    <option value="¿Cuál es tu apodo?">
                                        ¿Cuál es
                                        tu
                                        apodo?
                                    </option>
                                    <option value="¿Segundo nombre de tu padre?">
                                        ¿Segundo
                                        nombre
                                        de tu
                                        padre?
                                    </option>
                                    <option value="¿Dulce favorito?">
                                        ¿Dulce
                                        Favorito?
                                    </option>
                                    <option value="¿Donde estudiaste?">
                                        ¿Donde
                                        estudiaste?
                                    </option>
                                    <option value="¿Gatos o perros?">
                                        ¿Gatos o
                                        perros?
                                    </option>
                                </select>
                                <span style="color:red"></span>


                                <span class="errorPreguntaunoI" style="color:red"></span>
                            </div>

                            <label for="respuesta"><b>Respuesta</b></label>
                            <input type="text" class="form-control" name="respuestauno" id="respuestauno" required>
                            <span class="errorrespuestaI" style="color:red"></span>
                        </div>
                        <br>
                        <font size="2"> <b>Nota:</b>El sistema distingue entre mayúsculas y minúsculas, tome en cuenta como ingreso la información al registrarse</font></p>
                                </div>

                            </form>
                        </div>

                        <!-- Modal Footer -->
                        <div class="modal-footer">

                            <button class=" btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                            <a class="ConsultarSeguridad btn btn-primary" href="#">Verificar</a>
                          
                        </div>
                    </div>
                </div>
            </div> 

            </li>
   <?php } ?>


           
            <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

            <!-- Sidebar Message no boorar esto-->
            <div class="sidebar-card d-none d-lg-flex">
                <img class="sidebar-card-illustration mb-2" src="assets/img/undraw_rocket.svg" alt="...">
            
            </div>

        </ul>
