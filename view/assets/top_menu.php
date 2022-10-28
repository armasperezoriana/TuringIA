
<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">


    </button>


    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">



        <!-- Nav Item - User Information -->
        <li class="nav-item dropdown no-arrow">
            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small"><?php

                                                                            echo ucwords($_SESSION['ut_nombre']) . " " . ucwords($_SESSION['ut_apellido']);

                                                                            ?></span>
                <img class="img-profile rounded-circle" src="assets/img/undraw_profile.svg">
            </a>
            <!-- Dropdown - User Information -->
            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <?php

                if (in_array('seguridad', $_SESSION['ut_permisos'])) {
                ?>
                    <a class="dropdown-item" href="<?= _ROUTE_ ?>Home">
                        <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Inicio
                    </a>

                <?php } ?>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Cerrar Sesión
                </a>
            </div>

    </ul>

    <script src="assets/js/notificaciones/verificar-notificaciones.js"></script>
    <script type="text/javascript" src="assets/js/notificaciones/notificacion_individual.js"></script>


</nav>