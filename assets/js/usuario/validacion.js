var currentID='';
    function openModal(id){
     currentID=id;
     $('#modalForm').modal('show');
    }

$(document).ready(function() {
    var seguridadImg = "", seguridadImgActu = "", seguridadPreguntaActu = "";
    $(".EnviarUsuariosRegistrar").click(function() {
        var valido = validar();
        var validarS= validarSeguridad();
       if (valido == true && validarS== true) {

            var nombre = $("#AgregarUsuarioModal").find("#nombre").val();                
            var apellido = $("#AgregarUsuarioModal").find("#apellido").val();
            var cedula =$("#AgregarUsuarioModal").find("#cedula").val();
            var username = $("#AgregarUsuarioModal").find("#username").val();
            var rol = $("#AgregarUsuarioModal").find("#rol").val();
            var pass = $("#AgregarUsuarioModal").find("#pass2").val();
             var correo = $("#AgregarUsuarioModal").find("#correo").val();
             var clave_especial = $("#AgregarUsuarioModal").find("#clave_especial").val();
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
                        url: './Usuarios/Registrar',
                        type: 'POST',
                        data: {
                            nombre: nombre,
                            apellido: apellido,
                            cedula: cedula,
                            username: username,
                            rol: rol,
                            pass: pass,
                            correo: correo,
                            preguntauno: preguntauno,
                            img: seguridadImg,
                            respuestauno: respuestauno,
                            clave_especial: clave_especial,
                        },
                        success: function(respuesta) {
                          if (respuesta == "1") {

                            swal.fire({
                                 type: 'success',
                                title: 'Registro guardado exitosamente',
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
                                    text: 'Cédula y/o correo ya existen',
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

    $(".ModificarUsuarios").click(function() {
        var valido = validarM();
        if (validarS == true && valido == true) {
            var id_usuario = $("#modificarUsuario").find("#id_usuario").val();
            var nombre = $("#modificarUsuario").find("#nombre").val();
            var apellido = $("#modificarUsuario").find("#apellido").val();
            var cedula =$("#modificarUsuario").find("#cedula").val();;
            var username = $("#modificarUsuario").find("#username").val();
            var rol = $("#modificarUsuario").find("#rol").val();
            var pass = $("#modificarUsuario").find("#pass1").val();
            var correo = $("#modificarUsuario").find("#correo").val();
            var clave_especial = $("#modificarUsuario").find("#clave_especial").val();
       
           var preguntauno= $("#modificarUsuario").find("#preguntauno").val();
            var respuestauno= $("#modificarUsuario").find("#respuestauno").val();
            
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
                        url: './Usuarios/Modificar',
                        type: 'POST',
                        data: {
                            id_usuario: id_usuario,
                            nombre: nombre,
                            apellido: apellido,
                            cedula: cedula,
                            username: username,
                            rol: rol,
                            pass: pass,
                            correo: correo,
                            preguntauno: preguntauno,
                            img: seguridadImg,
                            respuestauno: respuestauno,
                            clave_especial: clave_especial,
                       
                        },
                        success: function(respuesta) {
                            if (respuesta == "1") {
                               swal.fire({
                                    type: 'success',
                                    title: 'Registro modificado exitosamente',
                                }).then((isConfirm) => {
                                    location.href = './Usuarios';
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
         }

    });
  
    $('.editar').click(function(e){
        e.preventDefault();
        mostrar($(this).attr('data-id'), "#modificarUsuario", "#ModificarUsuarioModal");
    })
    $('.consultar').click(function(e){
        e.preventDefault();
        mostrar($(this).attr('data-id'), "#consultarUsuario", "#ConsultarUsuarioModal");
    })

    $('.consultarImagen').click(function(e){
        e.preventDefault();
        mostrar($(this).attr('data-id'), "#modalForm", "#modalForm");
    })
    const inhabilitar = (id) => {
        $.ajax({
            type: "POST",
            url: "Usuarios/Inhabilitar/" + id,
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
            url: "Usuarios/Habilitar/" + id,
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
    const mostrar = (id, formulario, modal) => {
        $.ajax({
            type: "POST",
            url: "Usuarios/Mostrar/"+id,
            success: function (response) {
               // console.log(response);
                let json = JSON.parse(response);
                let usuario = json.data;
                $(formulario).find("#id_usuario").val(usuario.id_usuario);
                $(formulario).find("#nombre").val(usuario.nombre);
                $(formulario).find("#apellido").val(usuario.apellido);
                $(formulario).find("#username").val(usuario.usuario);
                $(formulario).find("#cedula").val(usuario.cedula);
                $(formulario).find("#rol").val(usuario.rol);
                $(formulario).find("#pass1").val(usuario.pass);
                $(formulario).find("#correo").val(usuario.correo);
                $(formulario).find("#clave_especial").val(usuario.clave_especial);
                $(modal).modal('show');
            },
            error: function (response) {
                console.log(response.getAllResponseHeaders())
            }
        });
    }

    // Inhabilitar Usuario
    $('body').on('click', '.inhabilitar', function(e) {
        e.preventDefault();

        Swal.fire({
            title: '¿Está Seguro?',
            text: "El usuario sera eliminado del sistema",
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
    // Habilitar Usuario
    $('body').on('click', '.habilitar', function(e) {
        e.preventDefault();

        Swal.fire({
            title: '¿Está Seguro?',
            text: "El usuario será habilitado en el sistema",
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

function validar(modificar = false) {
    form = "#AgregarUsuarioModal";

var expNombre = /^[a-zA-ZÀ-ÿ\s]{3,20}$/;
var expApellido = /^[a-zA-ZÀ-ÿ\s]{3,20}$/;
var expCedula =/^\d{7,14}$/;
var expCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
var expPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
var expUsername = /^[a-zA-Z0-9\_\-]{4,16}$/;
var expClaveEspecial =/^[a-zA-ZÀ-ÿ\s]{20}$/;

    form = "#AgregarUsuarioModal";

var nombre = $(form).find("#nombre").val();
var rnombre = false;

var apellido = $(form).find("#apellido").val();
var rapellido = false;

var cedula = $(form).find("#cedula").val();
var rcedula = false;

var username = $(form).find("#username").val();
var rusername = false;

var rol = $(form).find("#rol").val();
var rrol = false;

var pass1 = $(form).find("#pass1").val();
var rpass1 = false;

var pass2 = $(form).find("#pass2").val();
var rpass2 = false;


var correo = $(form).find("#correo").val();
var rcorreo = false;

var clave_especial = $(form).find("#clave_especial").val();
var rclave_especial = false;

if(nombre==""|apellido==""|cedula==""|username==""|rol==""|pass1==""|pass2==""|correo==""|clave_especial==""){

 swal.fire({
                                type: 'warning',
                                title: 'Campos obligatorios',
                                text: 'Asegurate de llenar todos los campos',
                            });
 $(".errorNombre").html("Debe ingresar su nombre");
   $(".errorApellido").html("Debe ingresar su apellido");
    $(".errorCedula").html("Debe ingresar su cedula");
     $(".errorUsername").html("Debe ingresar su nombre de usuario");
      $(".errorRol").html("Debe seleccionar su rol");
         $(".errorPass1").html("La contraseña debe tener:<ul> <br> <li> Entre 8 y 16 caracteres. <li> Al menos un dígito.<br> <li> Al menos una minúscula y una mayúscula <br><li>NO puede tener otros símbolos.</ul>");
           $(".errorPass2").html("Confirmar Contraseña");
              $(".errorCorreo").html("Debe ingresar un correo electronico valido");
              $(".errorClave").html("Debe ingresar el nombre de su compañia");
           
}

else{
if(!expCedula.test(cedula)){
$(".errorCedula").html("El campo cedula no coincide con el formato esperado 7 a 10 numeros");
   rcedula = false;
   return false;
} else {
$(".errorCedula").html("");
rcedula = true;
         $(".errorCedula").html("Cédula valida");
       $(".errorCedula").attr("style", "color:green");

}if(!expNombre.test(nombre)){
        $(".errorNombre").html("El campo nombre solo acepta caracteres, minimo 4");
            rnombre = false;
            return false;
} else {
        $(".errorNombre").html("Campo validado");
        $(".errorNombre").attr("style", "color:green");
        rnombre = true;
    }
     if(!expApellido.test(apellido)){
        $(".errorApellido").html("El campo apellido solo acepta caracteres,  minimo 4");
            rapellido = false;
            return false;
} else {
        $(".errorApellido").html("Campo validado");
        $(".errorApellido").attr("style", "color:green");
        rapellido = true;
    }if(!expUsername.test(username)){
        $(".errorUsername").html("Error el campo usuario acepta letras, numeros, guion y guion bajo, minimo 4 caracteres");
           rusername = false;
           return false;
} else {
        $(".errorUsername").html("Usuario valido");
         $(".errorUsername").attr("style", "color:green");
       rusername = true;
    }if(!expPass.test(pass1)){
        $(".errorPass1").html("Verifica no cumple con los parámetros. La contraseña debe tener:<ul> <br> <li> Al entre 8 y 16 caracteres. <li> Al menos un dígito.<br> <li> Al menos una minúscula y una mayúscula <br><li>NO puede tener otros símbolos.</ul>");
           rpass = false;
           return false;
} else {
        $(".errorPass1").html("Contraseña valida");
         $(".errorPass1").attr("style", "color:green");
       rpass = true;
    }if(!expPass.test(pass2)){
        $(".errorPass2").html("Verifica no cumple con los parámetros. La contraseña debe tener:<ul> <br> <li> Al entre 8 y 16 caracteres. <li> Al menos un dígito.<br> <li> Al menos una minúscula y una mayúscula <br><li>NO puede tener otros símbolos.</ul>");
           rpass2 = false;
           return false;
} else {
        $(".errorPass2").html("Contraseña de confirmación valida");
         $(".errorPass2").attr("style", "color:green");
       rpass2 = true;
    }if(!expCorreo.test(correo)){
        $(".errorCorreo").html("El formato del correo no es valida");
           rcorreo = false;
           return false;
} else {
        $(".errorCorreo").html("Correo valido");
        $(".errorCorreo").attr("style", "color:green");
       rcorreo = true;
    }if(!expClaveEspecial.test(clave_especial)){
        $(".errorClave").html("Este campo solo acepta caracteres minimo 5, maximo 7");
           rclave_especial = false;
           return false;
} else {
        $(".errorClave").html("Clave especial valida");
        $(".errorClave").attr("style", "color:green");
       rclave_especial = true;
    }

}

 
    if (rpass1 == true && rpass2 == true) {
        rpassAp = true;
    }

    var retorno = false;
    if (rnombre == true && rapellido == true) {
        retorno = true;
    }
    return retorno;
}

function validarM(modificar = true) {
        form = "#modificarUsuario";
    
   var expNombre = /^[a-zA-ZÀ-ÿ\s]{3,20}$/;
    var expApellido = /^[a-zA-ZÀ-ÿ\s]{3,20}$/;
    var expCedula =/^\d{7,14}$/;
    var expCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var expPass = /^.{6,12}$/;
    var expUsername = /^[a-zA-Z0-9\_\-]{4,16}$/;
    var expClaveEspecial =/^[a-zA-ZÀ-ÿ\s]{5,7}$/;

    
    var nombre = $(form).find("#nombre").val();
    var rnombre = false;

    var apellido = $(form).find("#apellido").val();
    var rapellido = false;

    var cedula = $(form).find("#cedula").val();
    var rcedula = false;

    var username = $(form).find("#username").val();
    var rusername = false;

    var rol = $(form).find("#rol").val();
    var rrol = false;

    var pass1 = $(form).find("#pass1").val();
    var rpass1 = false;

    var pass2 = $(form).find("#pass2").val();
    var rpass2 = false;


    var correo = $(form).find("#correo").val();
    var rcorreo = false;

    var clave_especial = $(form).find("#clave_especial").val();
    var rclave_especial = false;

if(nombre==""|apellido==""|cedula==""|username==""|rol==""|pass1==""|pass2==""|correo==""|clave_especial==""){

     swal.fire({
                                    type: 'warning',
                                    title: 'Campos obligatorios',
                                    text: 'Asegurate de llenar todos los campos',
                                });
     $(".errorNombreM").html("Debe ingresar su nombre");
       $(".errorApellidoM").html("Debe ingresar su apellido");
        $(".errorCedulaM").html("Debe ingresar su cedula");
         $(".errorUsernameM").html("Debe ingresar su nombre de usuario");
          $(".errorRolM").html("Debe seleccionar su rol");
               $(".errorPassM").html("Confirmar Contraseña");
                  $(".errorCorreoM").html("Debe ingresar un correo electronico valido");
                  $(".errorClaveEM").html("Debe ingresar una clave especial");
                  
               
}

else{
if(!expCedula.test(cedula)){
    $(".errorCedulaM").html("El campo cedula no coincide con el formato esperado 7 a 10 numeros");
       rcedula = false;
       return false;
} else {
    $(".errorCedulaM").html("");
   rcedula = true;
             $(".errorCedulaM").html("Cédula valida");
           $(".errorCedulaM").attr("style", "color:green");

}if(!expNombre.test(nombre)){
            $(".errorNombre").html("El campo nombre solo acepta caracteres, minimo 4");
                rnombre = false;
                return false;
    } else {
            $(".errorNombreM").html("Campo validado");
            $(".errorNombreM").attr("style", "color:green");
            rnombre = true;
        }
         if(!expApellido.test(apellido)){
            $(".errorApellidoM").html("El campo apellido solo acepta caracteres,  minimo 4");
                rapellido = false;
                return false;
    } else {
            $(".errorApellidoM").html("Campo validado");
            $(".errorApellidoM").attr("style", "color:green");
            rapellido = true;
        }if(!expUsername.test(username)){
            $(".errorUsernameM").html("Error el campo usuario acepta letras, numeros, guion y guion bajo, minimo 4 caracteres");
               rusername = false;
               return false;
    } else {
            $(".errorUsername").html("");
           rusername = true;
            $(".errorUsernameM").html("Usuario valido");
             $(".errorUsernameM").attr("style", "color:green");
        }if(!expPass.test(pass1)){
            $(".errorPassM").html("La clave acepta de 6 a 12 digitos,pueden ser numeros, signos especiales y letras");
               rpass = false;
               return false;
    } else {
            $(".errorPassM").html("Contraseña valida");
             $(".errorPassM").attr("style", "color:green");
           rpass = true;
        }if(!expCorreo.test(correo)){
            $(".errorCorreoM").html("El formato del correo no es valida");
               rcorreo = false;
               return false;
    } else {
            $(".errorCorreoM").html("Correo valido");
            $(".errorCorreoM").attr("style", "color:green");
           rcorreo = true;
        }if(!expClaveEspecial.test(clave_especial)){
            $(".errorClaveEM").html("Este campo solo acepta caracteres minimo 5, maximo 7");
               rclave_especial = false;
               return false;
    } else {
            $(".errorClaveEM").html("Clave especial valida");
            $(".errorClaveEM").attr("style", "color:green");
           rclave_especial = true;
        }
 return true;

 }
 
    if (rpass1 == true && rpass2 == true) {
        rpassAp = true;
    }

    var retorno = false;
    if (rnombre == true && rapellido == true) {
        retorno = true;
    }
    return retorno;
}
   //VALIDANDO QUE LAS CONTRASEÑAS SEAN IGUALES

   $("#pass1").keyup(function() {
    var p1 = $("#pass1").val();
    var p2 = $("#pass2").val();
    $(".errorPass2").attr("style", "color:red");
    if (p1 != "" && p2 != "") {
        if (p1 == p2) {
            $(".errorPass2").html("Contraseñas coinciden");
            $(".errorPass2").attr("style", "color:green");
        } else {
            $(".errorPass2").html("Contraseñas no coinciden");
        }
    }

});
$("#pass2").keyup(function() {
    var p1 = $("#pass1").val();
    var p2 = $("#pass2").val();
    $(".errorPass2").attr("style", "color:red");
    if (p1 != "" && p2 != "") {

        if (p1 == p2) {
            $(".errorPass2").html("Contraseñas coinciden");
            $(".errorPass2").attr("style", "color:green");
        } else {
            $(".errorPass2").html("Contraseñas no coinciden");
            return false;
        }
    }

});




