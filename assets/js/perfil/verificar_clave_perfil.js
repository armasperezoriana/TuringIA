
var currentID='';
function openModal(id){
 currentID=id;
 $('#modalForm').modal('show');
}
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
                     url: './Usuarios/ConsultarClaveEspecial',
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
                             title: 'Clave Especial Valida',
                          }).then((isConfirm) => {
                            //console.log(currentID);
                            $('#modalForm').modal('hide');
                            $("#modificarPerfil").modal('show');
                          });

                         }
                         if (respuesta == "2") {
                             swal.fire({
                                 type: 'error',
                                 title: 'Error al verificar información',
                                 text: 'Los datos no coinciden',
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
   
 $(".GuardarPerfil").click(function() {
        var id_usuario = $("#modificarPerfil").find("#id_usuario").val();
        var nombre = $("#modificarPerfil").find("#nombre").val();
        var apellido = $("#modificarPerfil").find("#apellido").val();
        var cedula =$("#modificarPerfil").find("#cedula").val();;
        var username = $("#modificarPerfil").find("#username").val();
        var pass = $("#modificarPerfil").find("#pass1").val();
        var correo = $("#modificarPerfil").find("#correo").val();

           swal.fire({
            title: "¿Desea guardar los datos ingresados?",
            text: "Estos datos serán guardados.",
            type: "question",
            showCancelButton: true,
           
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
        }).then((isConfirm) => {
            if (isConfirm.value) {
                $.ajax({
                    url: './PerfilUsuario/Modificar',
                    type: 'POST',
                    data: {
                        id_usuario: id_usuario,
                        nombre: nombre,
                        apellido: apellido,
                        cedula: cedula,
                        username: username,
                        correo: correo,
                    },
                    success: function(respuesta) {
                        console.log(respuesta);
                        if (respuesta == "1") {
                            swal.fire({
                                type: 'success',
                                title: 'Perfil modificado exitosamente',
                            }).then((isConfirm) => {
                                location.href = './Home';
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
                                text: 'Cédula, correo y/o nombre de usuario ya existen',
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

});
