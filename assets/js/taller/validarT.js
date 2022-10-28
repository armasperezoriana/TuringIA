$(document).ready(function(){
    
    $(".EnviarTallerRegistrar").click(function(){
        var valido = validar();
        if(valido==true){

            var nombre = $("#nombre").val();
            var rif = $("#rif").val();
            var direccion = $("#direccion").val();
            var informacion_contacto = $("#informacion_contacto").val();


            swal.fire({
                title: "¿Desea registrar los datos ingresados?",
                text: "Estos datos serán registrados..",
                type: "question",
                showCancelButton: true,
                // confirmButtonColor: "#DD6B55",
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
            }).then((isConfirm) => {
                if (isConfirm.value){            
                    $.ajax({
                        url:'./Taller/Registrar',
                        type:'POST',
                        data: {
                            nombre: nombre,
                            rif: rif,
                            direccion: direccion,
                            informacion_contacto : informacion_contacto ,
                        },
                        success: function(respuesta){
                             //alert(respuesta);
                            if(respuesta=="1"){
                                swal.fire({
                                    type: 'success',
                                    title: 'Registro del taller guardado exitosamente',
                                }).then((isConfirm) => {
                                    location.href='./Taller';
                                });
                            }
                            if(respuesta=="2"){
                                swal.fire({
                                    type: 'error',
                                    title: 'Error al guardar los datos',
                                    text: 'Contacte con el soporte',
                                });   
                            }
                            if(respuesta=="3"){
                                swal.fire({
                                    type: 'warning',
                                    title: 'Datos repetidos',
                                    text: 'Vuelva a intentar',
                                });   
                            }
                        }
                    });
                }else {
                    swal.fire({
                        type: 'error',
                        title: '¡Proceso cancelado!',
                    });
                } 
            });


        }

    });
 $(".ModificarTaller").click(function() {
            var valido = validar(true);
               
            if (valido == true) {

                var id_taller = $("#modificarTaller").find("#id_taller").val();
                console.log($("#modificarTaller"))
                console.log($("#modificarTaller").find("#nombre"));
                var nombre = $("#modificarTaller").find("#nombre").val();
                console.log($("#modificarTaller").find("#nombre").val());
                
                var rif = $("#modificarTaller").find("#rif").val();
                var direccion =$("#modificarTaller").find("#direccion").val();
                var informacion_contacto = $("#modificarTaller").find("#informacion_contacto").val();
               
            // alert(pass);
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
                            url: './Taller/Modificar',
                            type: 'POST',
                            data: {
                            id_taller: id_taller,
                            nombre: nombre,
                            rif: rif,
                            direccion: direccion,
                            informacion_contacto : informacion_contacto ,
                            },
                            success: function(respuesta) {
                      //alert( nombre + ' ' + rif + ' ' + direccion + ' ' + informacion_contacto+' ' );
                                alert(respuesta);
                                if (respuesta == "1") {
                                    swal.fire({
                                        type: 'success',
                                        title: 'Registro modificado exitosamente',
                                    }).then((isConfirm) => {
                                        location.href = './Taller';
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


function validar(modificar = false){
    var form = "";
      if(!modificar){
            form = "#AgregarTallerModal";
        }
        else{
            form = "#modificarTaller";
        }
    var nombre = $(form).find("#nombre").val();
    var rnombre = false;

    var rif = $(form).find("#rif").val();
    var rrif = false;

    var direccion = $(form).find("#direccion").val();
    var rdireccion = false;

    var contacto = $(form).find("#informacion_contacto").val();
    var rcontacto = false;
  
     var expDireccion = /^[a-zA-ZÀ-ÿ\s]{5,40}$/; // Letras, mayusculas minisculas y acentos,
     var expRif = /^[JGVEP][-][0-9]{8}[-][0-9]{1}$/;
     var expContacto = /^\d{11,12}$/; // 04245448669 7 a 14 numeros
     var expNombre = /^[a-zA-ZÀ-ÿ\s]{3,40}$/; // Letras y espacios, pueden llevar 

   

    if(nombre==""|rif==""|direccion==""|contacto==""){
      
       swal.fire({
                                        type: 'warning',
                                        title: 'Campos obligatorios',
                                        text: 'Asegurate de llenar todos los campos',
                                    });
        $(".errorNombre").html("Debe ingresar el nombre del taller");
        $(".errorDireccion").html("Debe ingresar la direccion del taller");
          $(".errorRif").html("Debe ingresar el registro fiscal del taller");
             $(".errorContacto").html("Debe ingresar un numero de contacto");
             return false;
    }
    else{
           if(!expNombre.test(nombre)){
                $(".errorNombre").html("Este campo solo acepta caracteres, minimo 3");
                    rnombre = false;
                           return false;
                }else{
                        $(".errorNombre").html("Campo validado");
                        $(".errorNombre").attr("style", "color:green");
                         rnombre = true;
            }if(!expRif.test(rif)){
                        $(".errorRif").html("El formato aceptado es una letra mayuscula (JGVEP) - 8 digitos - y un nro final");
                            rrif = false;
                            return false;
                        }else{
                                $(".errorRif").html("Campo validado");
                                $(".errorRif").attr("style", "color:green");
                                rrif = true;
                    }if(!expDireccion.test(direccion)){
                        $(".errorDireccion").html("Solo se aceptan caracteres, minimo 5");
                            rdireccion = false;
                            return false;
                            }else{
                                                $(".errorDireccion").html("Campo validado");
                                                $(".errorDireccion").attr("style", "color:green");
                                                rdireccion = true;
                                    }if(!expContacto.test(contacto)){
                                        $(".errorContacto").html("Digite un numero de telefono valido, solo numeros");
                                            rcontacto = false;
                                            return false;
                                        }else{
                                                $(".errorContacto").html("Campo validado");
                                                $(".errorContacto").attr("style", "color:green");
                                                rrif = true;
                                    }
                        
                    }
     return true;  
    
}
  $('.editar').click(function(e){
            e.preventDefault();
            mostrar($(this).attr('data-id'), "#modificarTaller", "#ModificarTallerModal");
        })
        $('.consultar').click(function(e){
            e.preventDefault();
            mostrar($(this).attr('data-id'), "#consultarTaller", "#ConsultarTallerModal");
        })

          $('body').on('click', '.inhabilitar', function(e) {
            e.preventDefault();

            Swal.fire({
                title: '¿Está Seguro?',
                text: "El taller sera eliminado del sistema",
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
    
     const inhabilitar = (id) => {
        $.ajax({
            type: "POST",
            url: "Taller/Inhabilitar/" + id,
            success: function(response) {
                const json = JSON.parse(response);
                Swal.fire(
                    json.titulo,
                    json.mensaje,
                    json.tipo
                )
                if (json.tipo == 'success') {
                    // table.ajax.reload();
                    location.reload();
                }
            },
            error: function(response) {
                console.log(response);
            }
        });
    }
     const habilitar = (id) => {
        $.ajax({
            type: "POST",
            url: "Taller/Habilitar/" + id,
            success: function(response) {
                const json = JSON.parse(response);
                Swal.fire(
                    json.titulo,
                    json.mensaje,
                    json.tipo
                )
                if (json.tipo == 'success') {
                    // table.ajax.reload();
                    location.reload();
                }
            },
            error: function(response) {
                console.log(response);
            }
        });
    }


        // Habilitar Usuario
        $('body').on('click', '.habilitar', function(e) {
            e.preventDefault();

            Swal.fire({
                title: '¿Está Seguro?',
                text: "El taller será habilitado en el sistema",
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

    });


    const mostrar = (id, formulario, modal) => {
        $.ajax({
            type: "POST",
            url: "Taller/Mostrar/"+id,
            success: function (response) {
                let json = JSON.parse(response);
                let taller = json.data;
                $(formulario).find("#id_taller").val(taller.id_taller);
                $(formulario).find("#nombre").val(taller.nombre);
                $(formulario).find("#rif").val(taller.rif);
                $(formulario).find("#direccion").val(taller.direccion);
                $(formulario).find("#informacion_contacto").val(taller.informacion_contacto);
        
                $(modal).modal('show');
            },
            error: function (response) {
                console.log(response.getAllResponseHeaders())
            }
        });
    }
