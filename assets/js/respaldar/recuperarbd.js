
     $(".confirmarClaveEspecial").click(function() {
         var validarClave = validarClaveEspecial();
             if(validarClave==true){
             var usuario = $("#modalForm").find("#usuario").val();               
              var clave_especial = $("#modalForm").find("#clave_especial").val();
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
                         url: './Usuarios/ConsultarClaveEspecialRespaldar',
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
                                location.href = './Respaldar/respaldar';
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

///RESTAURAR 
     $(".confirmarClaveEspecialRestaurar").click(function() {
        var validarClaveE = validarClaveEspecialE();
         if(validarClaveE ==true){
                
            var usuario = $("#exampleModal").find("#usuario").val();               
             var clave_especial = $("#exampleModal").find("#clave_especial").val();
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
                     text: 'Para respaldar la BD debes llenar los datos solicitados',
                 });
        
             $(".errorUsername").html("Ingresa tu usuario");
             $(".erroClaveEspecial").html("Ingrese tu clave especial");
                  return false;
         }
             return true;     
     }
       
     function validarClaveEspecialE(){
 
        var usuario = $("#exampleModal").find("#usuario").val();               
        var clave_especial = $("#exampleModal").find("#clave_especial").val();
    
        var expUsername = /^[a-zA-Z0-9\_\-]{4,16}$/;
       
    
        if(usuario==""|clave_especial==""){
                swal.fire({
                    type: 'info',
                    title: 'Campos obligatorios',
                    text: 'Para restaurar debes llenar los datos solicitados',
                });
       
            $(".errorUsernameE").html("Ingresa tu usuario");
            $(".erroClaveEspecialE").html("Ingrese tu clave especial");
                 return false;
        }
            return true;     
    }