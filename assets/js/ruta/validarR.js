 $(document).ready(function() {

        $(".EnviarRutaRegistrar").click(function() {
            // var namemodal = $(this).attr("id");
            var valido = validar();
            if (valido == true) {

                var placa = $(".AgregarRutaModal").find(".placa").val();                
                var direccion_ruta = $(".AgregarRutaModal").find(".direccion_ruta").val();
                var nombre_ruta =$(".AgregarRutaModal").find(".nombre_ruta").val();
                var hora_salida = $(".AgregarRutaModal").find(".hora_salida").val();
                var kilometraje = $(".AgregarRutaModal").find(".kilometraje").val();
                var cantidad = $(".AgregarRutaModal").find(".cantidad").val();
                var fecha_inicio = $(".AgregarRutaModal").find(".fecha_inicio").val();
                var fecha_fin = $(".AgregarRutaModal").find(".fecha_fin").val();

                 // console.log("hay datos enviados");
                swal.fire({
                    title: "¿Desea guardar los datos ingresados?",
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
                            url: './Ruta/Registrar',
                            type: 'POST',
                            data: {
                                placa: placa,
                                direccion_ruta: direccion_ruta,
                                nombre_ruta: nombre_ruta,
                                hora_salida: hora_salida,
                                kilometraje: kilometraje,
                                cantidad: cantidad,
                                fecha_fin: fecha_fin,
                                fecha_inicio: fecha_inicio,
                            },
                            success: function(respuesta) {
                                 //alert(respuesta);
                                if (respuesta == "1") {
                                    swal.fire({
                                        type: 'success',
                                        title: 'Registro guardado exitosamente',
                                    }).then((isConfirm) => {
                                        location.href = './ruta';
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

        $(".EnviarRutaEditar").click(function() {
            var id = $(this).attr("id");
            var valido = validar(true, id);
            if (valido == true) {
                var placa = $(".EditarRutaModal").find(".placa"+id).val();                
                var direccion_ruta = $(".EditarRutaModal").find(".direccion_ruta"+id).val();
                var nombre_ruta = $(".EditarRutaModal").find(".nombre_ruta"+id).val();;
                var hora_salida = $(".EditarRutaModal").find(".hora_salida"+id).val();
                var kilometraje = $(".EditarRutaModal").find(".kilometraje"+id).val();
                var cantidad = $(".EditarRutaModal").find(".cantidad"+id).val();
                var fecha_fin = $(".EditarRutaModal").find(".fecha_fin"+id).val();
                var fecha_inicio = $(".EditarRutaModal").find(".fecha_inicio"+id).val();
               //  alert( nombre_ruta + ' ' + placa+ ' ' + kilometraje + ' ' + direccion_ruta + ' ' + cantidad + ' ' + fecha_fin + ' '+ fecha_inicio + ' ' );
               // console.log("hay datos enviados");
                //alert(cantidad);
                swal.fire({
                    title: "¿Desea guardar los datos ingresados?",
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
                            url: './ruta/Modificar',
                            type: 'POST',
                            data: {
                                id_ruta: id,
                                placa: placa,
                                direccion_ruta: direccion_ruta,
                                nombre_ruta: nombre_ruta,
                                hora_salida: hora_salida,
                                kilometraje: kilometraje,
                                cantidad: cantidad,
                                fecha_fin: fecha_fin,
                                fecha_inicio: fecha_inicio,
                            },
                            success: function(respuesta) {
                                //alert(respuesta);
                                    if (respuesta == "1") {
                                    swal.fire({
                                        type: 'success',
                                        title: 'Registro modificado exitosamente',
                                    }).then((isConfirm) => {
                                        location.href = './ruta';
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

        function validar(modificar = false, id = ""){
            // alert(namemodal);
            var namemodal = "";
             var expKilometraje = /^[1-9]\d*(,\d+)?$/;
             var expDireccion = /^[a-zA-ZÀ-ÿ\s]{5,40}$/; // Letras, mayusculas minisculas y acentos,
             var expNombreR = /^[a-zA-ZÀ-ÿ\s]{4,40}$/;

            if(!modificar){
                namemodal = ".AgregarRutaModal";
            }
            else{
                namemodal = ".EditarRutaModal";
            }
            var nombre_ruta = $(namemodal+" .nombre_ruta"+id).val();
            var rnombre_ruta = false;

            var direccion_ruta = $(namemodal+" .direccion_ruta"+id).val();
            var rdireccion_ruta = false;

            var hora_salida = $(namemodal+" .hora_salida"+id).val();
            var rhora_salida = false;

            var placa = $(namemodal+" .placa"+id).val();
            var rplaca = false;

            var kilometraje= $(namemodal+" .kilometraje"+id).val();
            var rkilometraje = false;

            var cantidad= $(namemodal+" .cantidad"+id).val();
            var rcantidad = false;

            var fecha_inicio= $(namemodal+" .fecha_inicio"+id).val();
            var rfecha_inicio= false;

            var fecha_fin= $(namemodal+" .fecha_fin"+id).val();
            var rfecha_inicio= false;

            if (placa == ""|direccion_ruta == ""|hora_salida == ""|nombre_ruta== ""|kilometraje== ""|cantidad== ""|fecha_inicio== ""|fecha_fin== ""){
                  swal.fire({
                                        type: 'warning',
                                        title: 'Campos obligatorios',
                                        text: 'Asegurate de llenar todos los campos',
                                    });
                $(namemodal+" .errorPlaca").html("Debe elegir el vehiculo asignado a esta ruta");
                $(namemodal+" .errorDireccion").html("Ingrese la direccion de la ruta");
                  $(namemodal+" .errorNombre").html("Ingrese el nombre de la ruta");
                 $(namemodal+" .errorHora").html("Elige la hora de salida asignada");
                $(namemodal+" .errorKilometraje").html("Debe ingresar el kilometraje de esta ruta");
                $(namemodal+" .errorCantidad").html("Debe ingresar la cantidad de veces que recorre esta ruta");
                $(namemodal+" .errorDate").html("Debe ingresar una fecha");
                  
                return false;
                
            }       
            else{
                if(!expKilometraje.test(kilometraje)){
                $(".errorKilometraje").html("El campo kilometraje solo acepta numeros");
                    rkilometraje = false;
                    return false;
                }else{
                        $(".errorKilometraje").html("Campo validado");
                        $(".errorKilometraje").attr("style", "color:green");
                        rkilometraje = true;
            }if(!expDireccion.test(direccion_ruta)){
                $(".errorDireccion").html("Solo se aceptan caracteres, minimo 5");
                    rdireccion = false;
                            return false;
                }else{
                        $(".errorDireccion").html("Campo validado");
                        $(".errorDireccion").attr("style", "color:green");
                        rdireccion = true;
            }if(!expNombreR.test(nombre_ruta)){
                $(".errorNombre").html("Solo puede agregar caracteres en este campo, minimo 4");
                    rnombre = false;
                    return false;
                }else{
                        $(".errorNombre").html("Campo validado");
                        $(".errorNombre").attr("style", "color:green");
                        rnombre = true;
            } 

            if(placa =! ""){
                $(".errorPlaca").html("Campo placa validado");
                 $(".errorPlaca").attr("style", "color:green");
                 return true;

            }
            if(hora_salida =! ""){
                
                $(".errorHora").html("Campo hora validado");
                $(".errorHora").attr("style", "color:green");
                return true;
            }
            if(cantidad=! ""){
                
                $(".errorCantidad").html("Campo validado");
                $(".errorCantidad").attr("style", "color:green");
                return true;
            }
            if(fecha_inicio=! ""){
                
                $(".errorDate").html("Campo fecha de inicio validado");
                $(".errorDate").attr("style", "color:green");
                return true;
            }
            if(fecha_fin=! ""){
                
                $(".errorDate").html("Campo fecha de fin validado");
                $(".errorDate").attr("style", "color:green");
                return true;
            }
 
              return true;
     }
}

                // Inhabilitar Chofer
        $('body').on('click', '.inhabilitar', function(e) {
            e.preventDefault();

            Swal.fire({
                title: '¿Está Seguro?',
                text: "La ruta sera eliminada del sistema",
                type: 'question',
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
        // Habilitar Chofer
        $('body').on('click', '.habilitar', function(e) {
            e.preventDefault();

            Swal.fire({
                title: '¿Está Seguro?',
                text: "La ruta será habilitada en el sistema",
                type: 'question',
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

    const inhabilitar = (id) => {
        $.ajax({
            type: "POST",
            url: "ruta/Inhabilitar/" + id,
            success: function(response) {
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
            error: function(response) {
                console.log(response);
            }
        });
    }
    const habilitar = (id) => {
        $.ajax({
            type: "POST",
            url: "ruta/Habilitar/" + id,
            success: function(response) {
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
            error: function(response) {
                console.log(response);
            }
        });
    }
 });

    
