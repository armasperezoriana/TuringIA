$(".ConsultarSeguridad").click(function() {
    var seguridadImg = "", seguridadImgActu = "", seguridadPreguntaActu = "";
       var preguntauno= $("#modalForm").find("#preguntauno").val();
        var respuestauno= $("#modalForm").find("#respuestauno").val();
        var img = $("#modalForm").find("#QVZqY3ZuempkRjNka1Bjc0NrcDVNdz09.png").val();
         var img = $("#modalForm").attr('data-img');
    
        var pregunta = preguntasSeguridad();
        if(pregunta == true){
                    if(seguridadImg == ""){
                        swal.fire({
                            type: 'warning',
                            title: 'Seleccione una imagen de seguridad',
                            text: 'Imagen obligatoria para continuar',
                        });
                        return 0;
                    }
         swal.fire({
            title: "¿Esta seguro de sus respuestas?",
            text: "Estos datos serán verificados.",
            type: "question",
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
        }).then((isConfirm) => {
            if (isConfirm.value) {
                $.ajax({
                    url: './Usuarios/ConsultarImagen',
                    type: 'POST',
                    data: {
                       
                        preguntauno: preguntauno,
                        img : seguridadImg,
                        respuestauno: respuestauno,
                   
                    },
                    success: function(respuesta) {
                       // console.log($img);
                       console.log(respuesta);
                        if (respuesta == "1") {
                         swal.fire({
                                type: 'success',
                                title: 'Acceso correcto',
                            }).then((isConfirm) => {
                                location.href = './Usuarios';
                            });
                        }
                        if (respuesta == "2") {
                            swal.fire({
                                type: 'error',
                                title: 'Error al verificar los datos',
                                text: 'Los datos no coinciden con los registrados',
                            });
                        }
                        if (respuesta == "3") {
                            swal.fire({
                                type: 'warning',
                                title: 'Ha ocurrido un error',
                                text: 'Contacta con el soporte',
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

 //Selección de imagen de seguridad Consultar
 $('.card-seguridad-img').on('click', function (e) {
    if ($(this).attr('data-action') == "consultar") {
        seguridadImg = $(this).attr('data-img');
    }
    else {
        seguridadImgActu = $(this).attr('data-img');
    }
   console.log($(this).attr('data-img'));
    $('.card-seguridad-img').removeClass('bg-primary');
    $(this).addClass('bg-primary');
})


 //ESTEGANOGRAFIA
 function preguntasSeguridad(){
    var respuesta = $("#modalForm").find("#respuestauno").val();
    var rrespuesta = false;
    var pregunta = $("#modalForm").find("#pregunta").val();
    var img = $("#modalForm").find("#img").val();
    var rimg = false;

     var expRespuesta = /^[a-zA-ZÀ-ÿ\s]{3,40}$/; // Letras, mayusculas minisculas y acentos
   
    if(respuesta==""|pregunta==""){
      
       swal.fire({
                                        type: 'info',
                                        title: 'Opss! falta responder las preguntas de seguridad',
                                        text: 'Es necesario completar todos los campos',
                                    });
        $(".errorRespuestaI").html("Debe responder la pregunta");
        $(".errorPreguntaunoI").html("Debe seleccionar una pregunta");
             return false;
    }else{
         if(!expRespuesta.test(respuesta)){
                $(".errorRespuestaI").html("Este campo solo acepta caracteres, minimo 3");
                
                           return false;
                }else{
                        $(".errorRespuestaI").html("Campo validado");
                        $(".errorRespuestaI").attr("style", "color:green");
            }
            if(pregunta !=""){
                $(".errorPreguntaunoI").html("Campo validado");
                $(".errorPreguntaunoI").attr("style", "color:green");
                return true;
            }
        return true;     
    }
  }
