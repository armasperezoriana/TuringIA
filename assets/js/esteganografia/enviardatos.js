$(document).ready(function() {
    var seguridadImg = "", seguridadImgActu = "", seguridadPreguntaActu = "";
    $(".EnviarPreguntasRegistrar").click(function() {
        var valido = validarSeguridad();
        if (valido) {
            console.log(typeof seguridadImg)
        // if (valido == true) {
            if(seguridadImg == ""){
                swal.fire({
                    type: 'warning',
                    title: 'Seleccione una imagen de seguridad',
                    text: 'Imagen obligatoria',
                });
                return 0;
            }
            var preguntauno = $("#AgregarUsuarioModal").find("#preguntauno").val();  

            var respuestauno = $("#AgregarUsuarioModal").find("#respuestauno").val();                
            
            swal.fire({
                title: "¿Desea guardar la pregunta y respuesta de seguridad?",
                text: "Estos datos serán guardados como seguridad del usuario.",
                type: "question",
                showCancelButton: true,
                // confirmButtonColor: "#DD6B55",
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
            }).then((isConfirm) => {
                if (isConfirm.value) {
                    $.ajax({
                        url: './Esteganografia/RegistrarPregunta',
                        type: 'POST',
                        data: {
                            preguntauno: preguntauno,
                            img: seguridadImg,
                            respuestauno: respuestauno,
                            //respuestados: respuestados,
                            //respuestatres: respuestatres,
                        },
                        success: function(respuesta) {
                            console.log(respuesta);
                            if (respuesta == "1") {
                                swal.fire({
                                    type: 'success',
                                    title: 'Pregunta de seguridad guardada',
                                }).then((isConfirm) => {
                                    location.href = './Usuarios';
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
    
   
});

$(document).ready(function() {
    var seguridadImg = "", seguridadImgActu = "", seguridadPreguntaActu = "";
    $(".EnviarPreguntasRegistrar").click(function() {
        var valido = validarSeguridad();
        if (valido) {
            console.log(typeof seguridadImg)
        // if (valido == true) {
            if(seguridadImg == ""){
                swal.fire({
                    type: 'warning',
                    title: 'Seleccione una imagen de seguridad',
                    text: 'Imagen obligatoria',
                });
                return 0;
            }
            var preguntauno = $("#AgregarUsuarioModal").find("#preguntauno").val();  

            var respuestauno = $("#AgregarUsuarioModal").find("#respuestauno").val();                
            console.log(preguntauno+ - +respuestauno+ - +seguridadImg)
            swal.fire({
                title: "¿Desea guardar la pregunta y respuesta de seguridad?",
                text: "Estos datos serán guardados como seguridad del usuario.",
                type: "question",
                showCancelButton: true,
                // confirmButtonColor: "#DD6B55",
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
            }).then((isConfirm) => {
                if (isConfirm.value) {
                    $.ajax({
                        url: './Esteganografia/RegistrarPregunta',
                        type: 'POST',
                        data: {
                            preguntauno: preguntauno,
                            img: seguridadImg,
                            respuestauno: respuestauno,
                            //respuestados: respuestados,
                            //respuestatres: respuestatres,
                        },
                        success: function(respuesta) {
                            console.log(respuesta);
                            if (respuesta == "1") {
                                swal.fire({
                                    type: 'success',
                                    title: 'Pregunta de seguridad guardada',
                                }).then((isConfirm) => {
                                    location.href = './Usuarios';
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
    
   
});

$(document).ready(function() {
    var seguridadImg = "", seguridadImgActu = "", seguridadPreguntaActu = "";
    $(".ModificarUsuarios").click(function() {
        var valido = validarSeguridad();
        if (valido) {
            console.log(typeof seguridadImg)
        // if (valido == true) {
            if(seguridadImg == ""){
                swal.fire({
                    type: 'warning',
                    title: 'Seleccione una imagen de seguridad',
                    text: 'Imagen obligatoria',
                });
                return 0;
            }
            var preguntauno = $("#modificarUsuario").find("#preguntauno").val();  

            var respuestauno = $("#modificarUsuario").find("#respuestauno").val();                
            console.log(preguntauno+ - +respuestauno+ - +seguridadImg)
            swal.fire({
                title: "¿Desea guardar la pregunta y respuesta de seguridad?",
                text: "Estos datos serán guardados como seguridad del usuario.",
                type: "question",
                showCancelButton: true,
                // confirmButtonColor: "#DD6B55",
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
            }).then((isConfirm) => {
                if (isConfirm.value) {
                    $.ajax({
                        url: './Esteganografia/ModificarSeguridad',
                        type: 'POST',
                        data: {
                            preguntauno: preguntauno,
                            img: seguridadImg,
                            respuestauno: respuestauno,
                        },
                        success: function(respuesta) {
                            console.log(respuesta);
                            if (respuesta == "1") {
                                swal.fire({
                                    type: 'success',
                                    title: 'Pregunta de seguridad modificada',
                                }).then((isConfirm) => {
                                    location.href = './Usuarios';
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
    
   
});
function validarSeguridad(modificar = false){
    var form = "";
    if(!modificar){
        form = "#AgregarUsuarioModal";
    }
    else{
        form = "#modificarUsuario";
    }
    var respuesta = $(form).find("#respuestauno").val();
    var rrespuesta = false;
    var pregunta = $(form).find("#pregunta").val();
    var img = $(form).find("#img").val();
    var rimg = false;

     var expRespuesta = /^[a-zA-ZÀ-ÿ\s]{3,40}$/; // Letras, mayusculas minisculas y acentos
   

    if(respuesta==""|pregunta==""){
      
       swal.fire({
                                        type: 'warning',
                                        title: 'Campos obligatorios',
                                        text: 'Asegurate de llenar todos los campos',
                                    });
        $(".errorRespuesta").html("Debe responder la pregunta");
        $(".errorPreguntauno").html("Debe seleccionar una pregunta");
             return false;
    }else{
         if(!expRespuesta.test(respuesta)){
                $(".errorRespuesta").html("Este campo solo acepta caracteres, minimo 3");
                
                           return false;
                }else{
                        $(".errorRespuesta").html("Campo validado");
                        $(".errorRespuesta").attr("style", "color:green");
            }
            if(pregunta !=""){
                $(".errorPreguntauno").html("Campo validado");
                $(".errorPreguntauno").attr("style", "color:green");
                return true;
            }
        return true;     
    }
  }

