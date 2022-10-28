
$(document).ready(function() {
    $(".ConsultarSeguridad").click(function() { 
        var seguridadImg = "",seguridadImgActu = "", seguridadPreguntaActu = "";

      //var validarImagen= validarImagenSeguridad();
      var validarS= validarSeguridad();
      if (validarS== true) {
          var id_usuario = $("#modalForm").find("#id_usuario").val();
            var preguntauno = $("#modalForm").find("#preguntauno").val();       
            var respuestauno = $("#modalForm").find("#respuestauno").val(); 
           // var img = $("#modalForm").find("#img").val();
           // var img = $(this).attr('data-img');
     
            swal.fire({
                title: "¿Esta seguro de su datos de seguridad?",
                text: "Estos datos serán verificados",
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
                           //id_usuario: id_usuario,
                            preguntauno: preguntauno,
                            img: seguridadImg,
                            respuestauno: respuestauno,
                        },
                        success: function(respuesta) {
                        //  console.log(seguridadImg);
                           // console.log(clave_especial+ - +id_usuario+"-"+nombre+"-"+apellido+"-"+cedula+"-"+username+""+rol+"-"+pass+""+correo+""+preguntauno+"-"+respuestauno+"-"+seguridadImg+"");
                            if (respuesta == "1") {
                            swal.fire({
                                 type: 'success',
                                title: 'Imagen y palabra de seguridad confirmados',
                             }).then((isConfirm) => {
                                location.href = './Usuarios';
                             });

                            }
                            if (respuesta == "2") {
                                swal.fire({
                                    type: 'error',
                                    title: 'Error al consultar estos datos',
                                    text: 'Contacte con el soporte',
                                });
                            }
                        }
                    });
                } else {
                    swal.fire({
                        type: 'error',
                        title: '¡Proceso cancelado!',
                        text: 'Para continuar debes responder correctamente',
                    });
                }
            });
         }
          })

        });

        function validarSeguridad(modificar = false){
            var form = "#modalForm";
    
        
    
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

          
   //Selección de imagen de seguridad Consultar
 $('.card-seguridad-img').on('click', function (e) {
    console.log($(this).attr('data-img'));
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

         
   // });



