$(document).ready(function() {
    $("#recuperar").on("submit", function (e) {
        e.preventDefault();
    
             var correo = $("#recuperar").find("#correo").val();
                    $.ajax({
                        url: './Login/emailValidation',
                        type: 'POST',
                        data: {
                    
                            correo: correo,

                        },
                        success: function(response) {
                            swal.fire({
                                type: 'success',
                               title: 'Correo Verificado',
                            }).then((isConfirm) => {
                               location.href = './Login/mailReset?correo='+correo;
                               let res = JSON.parse(response);
                               if (res.tipo == 'success') {
                                window.location.reload();
                                location.href = './Login/modificarClaveUsuario';
                               
                              }
                            });
                        },
                        error: (response) => {
                            console.log(response);
                            Swal.fire("¡Error!",  "El correo ingresado  no esta registrado en el sistema", "error");
                          }
                    });
                } )
                    });
                    //RESETEAR CONTRASENA
                    $(document).ready(function() {
                        $("#recuperarClave").on("submit", function (e) {
                            e.preventDefault();
                        
                                 var pass = $("#recuperarClave").find("#pass").val();
                                 console.log(pass);
                                        $.ajax({
                                            url: './Login/modificarClaveUsuario',
                                            type: 'POST',
                                            data: {
                                                pass: pass,
                      
                                            },
                                            success: function(response) {
                                                swal.fire({
                                                    type: 'success',
                                                   title: 'Clave modificada, puedes entrar',
                                                }).then((isConfirm) => {
                                                   location.href = './Home';
                                                });
                                            },
                                            error: (response) => {
                                                console.log(response);
                                                Swal.fire("¡Error!",  "Verifique el codigo porfavor", "error");
                                              }
                                        });
                                    } )
                                        });
                      //}
//}
     