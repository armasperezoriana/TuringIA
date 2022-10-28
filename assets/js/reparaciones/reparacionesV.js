$(document).ready(function () {

    $(".EnviarReparacionRegistrar").click(function () {
        var valido = validar(modificar = false);
        if (valido == true) {
            var nombre = $("#AgregarReparacionModal").find("#nombre").val();
            var intervalo = $("#AgregarReparacionModal").find("#intervalo").val();
            var id_taller = $("#AgregarReparacionModal").find("#id_taller").val();
            var id_vehiculo = $("#AgregarReparacionModal").find("#id_vehiculo").val();
            var costo = $("#AgregarReparacionModal").find("#costo").val();
            var descripcion = $("#AgregarReparacionModal").find("#descripcion").val();

          // alert( nombre + ' ' + intervalo + ' ' + id_taller + ' ' + id_vehiculo + ' ' + costo + ' ' + descripcion + ' ' );
            swal.fire({
                title: "¿Desea guardar los datos del vehiculo ingresados?",
                text: "Estos datos serán guardados.",
                type: "question",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
            }).then((isConfirm) => {
                if (isConfirm.value) {
                    $.ajax({
                        url: './Reparaciones/Registrar',
                        type: 'POST',
                        data: {
                            nombre: nombre,
                            intervalo: intervalo,
                            id_taller: id_taller,
                            id_vehiculo: id_vehiculo,
                            costo: costo,
                            descripcion: descripcion,
                        },
                        success: function (respuesta) {
                          //  alert(respuesta);
                            if (respuesta == "1") {
                                swal.fire({
                                    type: 'success',
                                    title: 'Registro guardado exitosamente',
                                }).then((isConfirm) => {
                                    location.href = './Reparaciones';
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
    // Modificar Vehiculo

    $(".EnviarReparacionesModificar").click(function() {
        var id = $(this).attr("id");
        var valido = validar(true, id);
        if (valido == true) {
            var nombre = $("#ModificarReparacionesModal"+id).find("#nombre").val();
            var intervalo = $("#ModificarReparacionesModal"+id).find("#intervalo").val();
            var id_taller = $("#ModificarReparacionesModal"+id).find("#id_taller").val();
            var id_vehiculo = $("#ModificarReparacionesModal"+id).find("#id_vehiculo").val();
            var costo = $("#ModificarReparacionesModal"+id).find("#costo").val();
            var descripcion = $("#ModificarReparacionesModal"+id).find("#descripcion").val();

            swal.fire({
                title: "¿Desea guardar los datos del vehiculo que han sido modificados?",
                text: "Estos datos serán guardados.",
                type: "question",
                showCancelButton: true,
                // confirmButtonColor: "#DD6B55",
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
            }).then((isConfirm) => {
                if (isConfirm.value) {
                    $.ajax({
                        url: './Reparaciones/Modificar',
                        type: 'POST',
                        data: {
                            id_reparaciones: id,
                            nombre: nombre,
                            intervalo: intervalo,
                            id_taller: id_taller,
                            id_vehiculo: id_vehiculo,
                            costo: costo,
                            descripcion: descripcion,
                        },
                        success: function(respuesta) {
                            //console.log(respuesta);
                            if (respuesta == "1") {
                                swal.fire({
                                    type: 'success',
                                    title: 'Registro modificado exitosamente',
                                }).then((isConfirm) => {
                                    location.href = './Reparaciones';
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
            text: "La reparacion será eliminada del sistema",
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
    // La reparacion
    $('body').on('click', '.habilitar', function (e) {
        e.preventDefault();

        Swal.fire({
            title: '¿Está Seguro?',
            text: "La reparacion será habilitada en el sistema",
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


    function validar(modificar = false, id=""){
        var form = "";
        if (!modificar) {
            form = "#AgregarReparacionModal";
        }
        else {
            form = "#ModificarReparacionesModal"+id;
        }
        var expDescripcion = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
        var expCosto = /^[1-9]\d*(,\d+)?$/;// Numeros de 0 al 9 seguido de coma
       var expNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

        var nombre = $(form).find("#nombre").val();
        var rnombre = false;

        var intervalo = $(form).find("#intervalo").val();
        var rintervalo = false;

        var taller = $(form).find("#id_taller").val();
    
        var rtaller = false;

        var placa = $(form).find("#id_vehiculo").val();
        var rplaca = false;


        var costo = $(form).find("#costo").val();
        var rcosto = false;

        var descripcion = $(form).find("#descripcion").val();
        var rdescripcion = false;
        if (nombre==""|intervalo==""|taller==""|placa==""|costo==""|descripcion==""){
                swal.fire({
                                        type: 'warning',
                                        title: 'Campos obligatorios',
                                        text: 'Asegurate de llenar todos los campos',
                                    });

            $(".errorNombre").html("Debe seleccionar el nombre de la reparacion");
             $(".errorPlaca").html("Debe seleccionar la unidad reparada");
            $(".errorTaller").html("Debe seleccionar el taller del mantenimiento");
            $(".errorDescripcion").html("Agregar una descripcion a la reparacion");
            $(".errorCosto").html("Debe ingresar el costo del mantenimiento");
            $(" .errorIntervalo").html("Debe escribir la fecha del ultimo mantenimiento");
                  return false;
             
        }else{
            if(!expDescripcion.test(descripcion)){
                $(".errorDescripcion").html("El campo descripcion solo acepta caracteres");
                    rdescripcion = false;
                    return false;
                         
                }else{
                        $(".errorDescripcion").html("Campo validado");
                        $(".errorDescripcion").attr("style", "color:green");
                        rdescripcion = true;
            }if(!expCosto.test(costo)){
                $(".errorCosto").html("El costo debe ser expresado en bolivares con una , 00");
                    rcosto = false;
                    return false;
                }else{
                        $(".errorCosto").html("Campo validado");
                        $(".errorCosto").attr("style", "color:green");
                        rcosto = true;
            }if(!expNombre.test(nombre)){
                $(".errorNombre").html("Solo puede ingresar caracteres");
                    rnombre = false;
                    return false;
                }else{
                        $(".errorNombre").html("Campo validado");
                        $(".errorNombre").attr("style", "color:green");
                        rnombre = true;
            }
        
        if(rnombre == true && rintervalo == true && rtaller == true && rplaca == true && rcosto == true && rdescripcion == true){
            validado = true;
        }
        return true;
    }
}

            $('.editar').click(function(e){
            console.log("1");
                e.preventDefault();
                mostrar($(this).attr('data-id'), "#modificareparcion", "#ModificarReparacionesModal");
            })
            $('.consultar').click(function(e){
                 
                e.preventDefault();
                mostrar($(this).attr('data-id'), "#consultarReparacion", "#ConsultarReparacionModal");
            })

      const mostrar = (id, formulario, modal) => {
            $.ajax({
                type: "POST",
                url: "Reparaciones/Mostrar/"+id,
                success: function (response) {
                    console.log(response);
                    let json = JSON.parse(response);
                    let reparaciones = json.data;
                    $(formulario).find("#id_vehiculo").val(reparaciones.id_vehiculo);
                    $(formulario).find("#id_taller").val(reparaciones.id_taller);
                    $(formulario).find("#intervalo").val(reparaciones.intervalo);
                    $(formulario).find("#costo").val(reparaciones.costo);
                    $(formulario).find("#descripcion").val(reparaciones.descripcion);
                    $(formulario).find("#intervalo").val(reparaciones.intervalo);
                    $(modal).modal('show');
                },
                error: function (response) {

                    console.log(response.getAllResponseHeaders())
                    //alert(id_vehiculo+" "+nombre+" "+intervalo+" "+id_taller+" "+costo+" "+descripcion);
                }
            });
        }


    const inhabilitar = (id) => {
        $.ajax({
            type: "POST",
            url: "reparaciones/Inhabilitar/" + id,
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
            url: "reparaciones/Habilitar/" + id,
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
