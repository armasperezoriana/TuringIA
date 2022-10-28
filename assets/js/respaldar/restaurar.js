
     $(".confirmarClaveEspecial").click(function() {
        var validarClave = validarClaveEspecial();
            if(validarClave==true){
                
            var usuario = $("#modalSeguridad").find("#usuario").val();               
             var clave_especial = $("#modalSeguridad").find("#clave_especial").val();
            swal.fire({
                title: "¿Esta seguro de la clave especial?",
                text: "Estos datos serán verificados.",
                type: "question",
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: true
            }).then((isConfirm) => {
                if (isConfirm.value) {
                    $.ajax({
                        url: './Usuarios/ConsultarClaveEspecialRestaurar',
                        type: 'POST',
                        data: {
                            clave_especial: clave_especial,
                            usuario: usuario,
                        },
                        success: function(respuesta) {
                           //console.log(respuesta + clave_especial+usuario);
                            if (respuesta == "1") {

                            swal.fire({
                                 type: 'success',
                                title: 'Acceso correcto',
                             }).then((isConfirm) => {
                               location.href = './Respaldar/restaurar';
                             });

                            }
                            if (respuesta == "2") {
                                swal.fire({
                                    type: 'error',
                                    title: 'Error al verificar información',
                                    text: 'Este usuario no posee permisos de administrador o ingreso un dato incorrecto',
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

    //});

    function validarClaveEspecial(){

        var usuario = $("#modalForm").find("#usuario").val();               
        var clave_especial = $("#modalForm").find("#clave_especial").val();
    
        var expUsername = /^[a-zA-Z0-9\_\-]{4,16}$/;
       
    
        if(usuario==""|clave_especial==""){
                swal.fire({
                    type: 'info',
                    title: 'Campos obligatorios',
                    text: 'Para modificar debes llenar los datos solicitados',
                });
       
            $(".errorUsername").html("Ingresa tu usuario");
            $(".erroClaveEspecial").html("Ingrese tu clave especial");
                 return false;
        }
            return true;     
    }
      