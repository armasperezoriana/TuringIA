$(document).ready(function () {

    $(".EnviarMantenimientoRegistrar").click(function () {

        var valido = validar(modificar = false);
        if (valido == true) {
            var nombre = $("#AgregarMantenimientoModal").find("#nombre").val();
            var intervalo = $("#AgregarMantenimientoModal").find("#intervalo").val();
            var kilometraje = $("#AgregarMantenimientoModal").find("#kilometraje").val();
            var taller = $("#AgregarMantenimientoModal").find("#id_taller").val();
            var placa = $("#AgregarMantenimientoModal").find("#id_vehiculo").val();
            var costo = $("#AgregarMantenimientoModal").find("#costo").val();
            var estado = $("#AgregarMantenimientoModal").find("#estado").val();
            var tiempo = $("#AgregarMantenimientoModal").find("#tiempo").val();
             swal.fire({
                title: "¿Desea guardar los datos del vehiculo ingresados?",
                text: "Estos datos serán guardados.",
                type: "question",
                showCancelButton: true,
                // confirmButtonColor: "#DD6B55",
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
            }).then((isConfirm) => {
              //alert(placa+" "+nombre+" "+intervalo+" "+kilometraje+" "+taller+" "+placa+" "+costo+" "+tiempo+""+estado);
                if (isConfirm.value) {
                    $.ajax({
                        url: './mantenimiento/Registrar',
                        type: 'POST',
                        data: {
                            nombre: nombre,
                            intervalo: intervalo,
                            kilometraje: kilometraje,
                            id_taller: taller,
                            id_vehiculo: placa,
                            costo: costo,
                            estado: estado,
                            tiempo: tiempo,
                        
                        },
                        success: function (respuesta){
                            if (respuesta == "1") {
                                swal.fire({
                                    type: 'success',
                                    title: 'Registro del mantenimiento guardado exitosamente',
                                }).then((isConfirm) => {
                                    location.href = './Mantenimiento';
                                });
                            }
                            if (respuesta == "2") {
                                swal.fire({
                                    type: 'error',
                                    title: 'Error al guardar los datos',
                                    text: 'Contacte con el soporte',
                                });
                            }
                            if (respuesta == "3") {
                                swal.fire({
                                    type: 'warning',
                                    title: 'Datos del vehiculo repetidos',
                                    text: 'Vuelva a intentar',
                                });
                            }
                        }
                    });
                } else {
                    swal.fire({
                        type: 'error',
                        title: '¡Proceso cancelado!',
                    });
                }
            });

        }
    });
    $(".EnviarMantenimientoModificar").click(function() {
    

        var id = $(this).attr("id");
        var valido = validar(true, id);
       // var validarS = validarSeguridad();
       if (valido == true) {

            var nombre = $("#ModificarMantenimientoModal"+id).find("#nombre").val();
            var intervalo = $("#ModificarMantenimientoModal"+id).find("#intervalo").val();
            var kilometraje = $("#ModificarMantenimientoModal"+id).find("#kilometraje").val();
            var taller = $("#ModificarMantenimientoModal"+id).find("#id_taller").val();
            var placa = $("#ModificarMantenimientoModal"+id).find("#id_vehiculo").val();
            var costo = $("#ModificarMantenimientoModal"+id).find("#costo").val();
            var estado = $("#ModificarMantenimientoModal"+id).find("#estado").val();
           console.log(estado);
            swal.fire({
                title: "¿Desea guardar los datos que han sido modificados?",
                text: "Estos datos serán guardados.",
                type: "question",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
            }).then((isConfirm) => {
                if (isConfirm.value) {
                    $.ajax({
                        url: './mantenimiento/Modificar',
                        type: 'POST',
                        data: {
                            id_mantenimiento: id,
                            nombre: nombre,
                            intervalo: intervalo,
                            kilometraje: kilometraje,
                            id_taller: taller,
                            id_vehiculo: placa,
                            costo: costo,
                            estado: estado,
            
                        },
                        success: function(respuesta) {
                            if (respuesta == "1") {
                                swal.fire({
                                    type: 'success',
                                    title: 'Registro modificado exitosamente',
                                }).then((isConfirm) => {
                                    location.href = './mantenimiento';
                                });
                            }
                            if (respuesta == "2") {
                                swal.fire({
                                    type: 'error',
                                    title: 'Error al modificar los datos',
                                    text: 'Contacte con el soporte',
                                });
                            }
                            if (respuesta == "3") {
                                swal.fire({
                                    type: 'warning',
                                    title: 'Datos repetidos',
                                    text: 'Vuelva a intentar',
                                });
                            }
                        }
                    });
                } else {
                    swal.fire({
                        type: 'error',
                        title: '¡Proceso cancelado!',
                    });
                }
            });
        }
    });
    // Inhabilitar Vehiculo
    $('body').on('click', '.inhabilitar', function (e) {
        e.preventDefault();

        Swal.fire({
            title: '¿Está Seguro?',
            text: "El mantenimiento será eliminado del sistema",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.value) {
                inhabilitar($(this).attr('data-id'));
            }
        })
    });
    // Habilitar Vehiculo
    $('body').on('click', '.habilitar', function (e) {
        e.preventDefault();

        Swal.fire({
            title: '¿Está Seguro?',
            text: "El mantenimiento será habilitado en el sistema",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si!'
        }).then((result) => {
            if (result.value) {
                habilitar($(this).attr('data-id'));
            }
        })
    });

    function validar(modificar = false, id="") {
        var form = "";
        if (!modificar) {
            form = "#AgregarMantenimientoModal";
        }
        else {
            form = "#ModificarMantenimientoModal"+id;
        }
        var expKilometraje = /^[1-9]\d*(,\d+)?$/;// Numeros de 0 al 9 seguido de coma
        var expCosto = /^[1-9]\d*(,\d+)?$/;// Numeros de 0 al 9 seguido de coma
        var expNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        var nombre = $(form).find("#nombre").val();
        var rnombre = false;

        var intervalo = $(form).find("#intervalo").val();
        var rintervalo = false;

        var kilometraje = $(form).find("#kilometraje").val();
        var rkilometraje = false;

        var taller = $(form).find("#taller").val();
        var rtaller = false;

        var placa = $(form).find("#placa").val();
        var rplaca = false;
        var patternPlaca = /^[\w]+$/i;

        var costo = $(form).find("#costo").val();
        var rcosto = false;

        var tiempo = $(form).find("#tiempo").val();
        var rtiempo = false;

         var unidad = $(form).find("#id_vehiculo").val();
        var runidad = false;

        var taller = $(form).find("#id_taller").val();
        var rtaller = false;

        var estado = $(form).find("#estado").val();
        var restado = false;

         if (nombre==""|intervalo==""|kilometraje==""|taller==""|placa==""|costo==""|tiempo==""|unidad==""|estado==""){
                swal.fire({
                                        type: 'warning',
                                        title: 'Campos obligatorios',
                                        text: 'Asegurate de llenar todos los campos',
                                    });

            $(".errorNombre").html("Debe seleccionar el nombre del mantenimiento");
             $(".errortipo").html("Debe escribir el kilometraje que tenia el vehiculo al realizar el mantenimiento");
            $(".errorTaller").html("Debe seleccionar el taller del mantenimiento");
            $(".errorPlaca").html("Debe seleccionar la placa del vehiculo");
            $(".errorCosto").html("Debe ingresar el costo del mantenimiento");
            $(" .errorIntervalo").html("Debe escribir la fecha del ultimo mantenimiento");
            $(" .errorEstado").html("Debe seleccionar el estado de la orden de servicio");
            return false;
             
        }else{
            if(!expKilometraje.test(kilometraje)){
                $(".errortipo").html("El campo kilometraje solo acepta numeros");
                    rtipo = false;
                    return false;
            }else{
                $(".errorNombre").html("Campo validado");
                $(".errorNombre").attr("style", "color:green");
                $(".errortipo").html("Campo validado");
                $(".errortipo").attr("style", "color:green");
                        rkilometraje = true;
            }if(!expCosto.test(costo)){
                $(".errorCosto").html("El costo debe ser expresado en bolivares con una , 00");
                    rCosto = false;
                    return false;
            }else{
                        $(".errorCosto").html("Campo validado");
                        $(".errorCosto").attr("style", "color:green");
                        $(" .errorIntervalo").html("Campo validado");
                        $(" .errorIntervalo").attr("style", "color:green");
                        rcosto = true;
                        rintervalo = true;
            }if(!expNombre.test(nombre)){
                $(".errorNombre").html("El campo nombre solo acepta caracteres");
                rnombre = false;
                return false;
            } else {
                $(".errorNombre").html("Campo validado");
                $(".errorNombre").attr("style", "color:green");
                rnombre = true;
            }
            if(taller !=""){
                $(".errorTaller").html("Campo validado");
                $(".errorTaller").attr("style", "color:green");
                rtaller= true;

            }
            if(unidad !=""){
                $(".errorPlaca").html("Campo validado");
                $(".errorPlaca").attr("style", "color:green");
                runidad= true;

            }
            if(estado !=""){
                $(" .errorEstado").html("Campo validado");
                $(".errorEstado").attr("style", "color:green");
            }
            if(rnombre == true && rintervalo == true && rkilometraje == true && rtaller == true && runidad == true && rcosto == true && rtiempo == true && restado== true){
                validado = true;
            }
        // alert(form+": "+validado);
        return true;
      }
    }
    

     $('.editar').click(function(e){
        console.log("1");
                e.preventDefault();
                mostrar($(this).attr('data-id'), "#modificarVehiculo", "#ModificarVehiculoModal");
            })
            $('.consultar').click(function(e){
                 
                e.preventDefault();
                mostrar($(this).attr('data-id'), "#consultarVehiculo", "#ConsultarVehiculoModal");
            })

      const mostrar = (id, formulario, modal) => {
            $.ajax({
                type: "POST",
                url: "Vehiculos/Mostrar/"+id,
                success: function (response) {
                    let json = JSON.parse(response);
                    let mantenimiento = json.data;
                    $(formulario).find("#id_vehiculo").val(mantenimiento.vehiculo);
                    $(formulario).find("#id_taller").val(mantenimiento.taller);
                    $(formulario).find("#modelo").val(mantenimiento.modelo);
                    $(formulario).find("#tipo").val(mantenimiento.tipo);
                     $(formulario).find("#estado").val(mantenimiento.estado);
                    $(formulario).find("#funcionamientoM").val(mantenimiento.funcionamiento);
                    $(modal).modal('show');
                },
                error: function (response) {
                    console.log(response.getAllResponseHeaders())
                }
            });
        }


    const inhabilitar = (id) => {
        $.ajax({
            type: "POST",
            url: "mantenimiento/Inhabilitar/" + id,
            success: function (response) {
                const json = JSON.parse(response);
                Swal.fire(
                    json.titulo,
                    json.mensaje,
                    json.tipo
                ).then((isConfirm) => {
                    if (json.tipo == 'success') {
                        location.reload();
                    }
                });
            },
            error: function (response) {
                console.log(response);
            }
        });
    }
    const habilitar = (id) => {
        $.ajax({
            type: "POST",
            url: "mantenimiento/Habilitar/" + id,
            success: function (response) {
                const json = JSON.parse(response);
                Swal.fire(
                    json.titulo,
                    json.mensaje,
                    json.tipo
                ).then((isConfirm) => {
                    if (json.tipo == 'success') {
                        location.reload();
                    }
                });
            },
            error: function (response) {
                console.log(response);
            }
        });
    }
});
