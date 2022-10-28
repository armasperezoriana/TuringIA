$(document).ready(function() {

    $(".EnviarChoferRegistrar").click(function() {
        var valido = validar();
        // if (valido == true) {

            var nombre = $("#AgregarChoferModal").find("#nombre").val();                
            var apellido = $("#AgregarChoferModal").find("#apellido").val();
            var cedula =$("#AgregarChoferModal").find("#cedula").val();;
            var telefono = $("#AgregarChoferModal").find("#telefono").val();
            var placa = $("#AgregarChoferModal").find("#placa").val();
    
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
                        url: './choferes/Registrar',
                        type: 'POST',
                        data: {
                            nombre: nombre,
                            apellido: apellido,
                            cedula: cedula,
                            telefono: telefono,
                            placa: placa,
                        },
                        success: function(respuesta) {
                            alert(respuesta);
                            if (respuesta == "1") {
                                swal.fire({
                                    type: 'success',
                                    title: 'Registro guardado exitosamente',
                                }).then((isConfirm) => {
                                    location.href = './choferes';
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


        // }

    });

    $(".ModificarChofer").click(function() {
       var valido = validarM(true);
        if (valido == true) {

             var id_choferes = $("#modificarChofer").find("#id_choferes").val();
            var id_choferes = $(this).attr("id");

            var nombre = $(".ModificarChoferModal").find(".nombre"+id_choferes).val();
            var apellido = $(".ModificarChoferModal").find(".apellido"+id_choferes).val();
            var cedula =$(".ModificarChoferModal").find(".cedula"+id_choferes).val();;
            var telefono = $(".ModificarChoferModal").find(".telefono"+id_choferes).val();
            var placa = $(".ModificarChoferModal").find(".placa"+id_choferes).val();
           
            swal.fire({
                title: "¿Desea modificar los datos ingresados?",
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
                        url: './choferes/Modificar',
                        type: 'POST',
                        data: {
                            id_choferes: id_choferes,
                            nombre: nombre,
                            apellido: apellido,
                            cedula: cedula,
                            telefono: telefono,
                            placa: placa,
                        },
                        success: function(respuesta) {
                           //  alert(nombre+""+apellido+""+cedula+""+telefono+""+unidad+""+placa+"");
                            if (respuesta == "1") {
                                swal.fire({
                                    type: 'success',
                                    title: 'Registro modificado exitosamente',
                                }).then((isConfirm) => {
                                    location.href = './choferes';
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

 });

 
 const inhabilitar = (id) => {
    $.ajax({
        type: "POST",
        url: "Choferes/Inhabilitar/" + id,
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
        url: "Choferes/Habilitar/" + id,
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
    //
    $('.editar').click(function(e){
        e.preventDefault();
        mostrar($(this).attr('data-id'), "#modificarChofer", "#ModificarChoferModal");
    })
    $('.consultar').click(function(e){
        e.preventDefault();
        mostrar($(this).attr('data-id'), "#consultarChofer", "#ConsultarChoferModal");
    })

 // Inhabilitar Chofer
 $('body').on('click', '.inhabilitar', function(e) {
    e.preventDefault();

    Swal.fire({
        title: '¿Está Seguro?',
        text: "El chofer sera eliminada del sistema",
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
        text: "El chofer será habilitada en el sistema",
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


function validar(modificar = false) {
    var form = "";

    var expNombre = /^[a-zA-ZÀ-ÿ\s]{4,12}$/;
    var expApellido = /^[a-zA-ZÀ-ÿ\s]{4,40}$/;
    var expCedula =/^\d{7,14}$/;
    var expTelefono = /^\d{11,12}$/;
    
    if(!modificar){
        form = "#AgregarChoferModal";
    }
    else{
        form = "#modificarChofer";
    }
    var expNombre = /^[A-Za-z]{3,50}$/;
    var nombre = $(form).find("#nombre").val();
    var rnombre = false;

    var apellido = $(form).find("#apellido").val();
    var rapellido = false;

    var cedula = $(form).find("#cedula").val();
    var rcedula = false;

    var telefono = $(form).find("#telefono").val();
    var rtelefono = false;

    var placa = $(form).find("#placa").val();
    var rplaca = false;

   //revisar errores
    if (nombre == ""|apellido == ""|cedula == ""|placa == ""|telefono == "") {
   swal.fire({
                                    type: 'warning',
                                    title: 'Campos obligatorios',
                                    text: 'Asegurate de llenar todos los campos',
                                });
        $(form).find(".errorNombre").html("Debe ingresar su nombre");
        $(form).find(".errorApellido").html("Debe ingresar su apellido");
        $(form).find(".errorCedula").html("Debe ingresar su cedula");
        $(form).find(".errorPlaca").html("Debe seleccionar su placa");
        $(form).find(".errortelefono").html("Debe ingresar un telefono");
           return false;

    }else{
           if(!expNombre.test(nombre)){
                    $(".errorNombre").html("El campo nombre solo acepta caracteres, minimo 4");
                        rnombre = false;
                        return false;
            } else {
                    $(".errorNombre").html("Campo validado");
                    $(".errorNombre").attr("style", "color:green");
                    rnombre = true;
                } if(!expApellido.test(apellido)){
            $(".errorApellido").html("El campo apellido solo acepta caracteres");
                rapellido = false;
                return false;
    } else {
            $(".errorApellido").html("Campo validado");
            $(".errorApellido").attr("style", "color:green");
            rapellido = true;
        }if(!expCedula.test(cedula)){
            $(".errorCedula").html("El campo cedula no coincide con el formato esperado 7 a 10 numeros");
               rcedula = false;
               return false;
    } else {
            $(".errorCedula").html("");
           rcedula = true;
                     $(".errorCedula").html("Cédula valida");
                   $(".errorCedula").attr("style", "color:green");

        }if(!expTelefono.test(telefono)){
            $(".errorTelefono").html("El campo telefono solo acepta numeros, al menos 10");
               rtelefono = false;
               return false;
    } else {
            $(".errorTelefono").html("");
           rtelefono = true;
                     $(".errorTelefono").html("Telefono valido");
                   $(".errorTelefono").attr("style", "color:green");

        }
        if(placa!=""){
            $(".errorPlaca").html("Placa valida");
            $(".errorPlaca").attr("style", "color:green");
            return rplaca;

        }
    return true;
}
}


function validarM(modificar = true) {
var form = "";

var expNombre = /^[a-zA-ZÀ-ÿ\s]{4,12}$/;
var expApellido = /^[a-zA-ZÀ-ÿ\s]{4,40}$/;
var expCedula =/^\d{7,14}$/;
var expTelefono = /^\d{11,12}$/;

    form = "#modificarChofer";

var expNombre = /^[A-Za-z]{3,50}$/;
var nombre = $(form).find("#nombre").val();
var rnombreM = false;

var apellido = $(form).find("#apellido").val();
var rapellido = false;

var cedula = $(form).find("#cedula").val();
var rcedulaM = false;

var telefono = $(form).find("#telefono").val();
var rtelefonoM = false;

var placa = $(form).find("#placa").val();
var rplacaM = false;

//revisar errores
if (nombre == ""|apellido == ""|cedula == ""|placa == ""|telefono == "") {
swal.fire({
                                type: 'warning',
                                title: 'Campos obligatorios',
                                text: 'Asegurate de llenar todos los campos',
                            });
    $(form).find(".errorNombreM").html("Debe ingresar su nombre");
    $(form).find(".errorApellidoM").html("Debe ingresar su apellido");
    $(form).find(".errorCedulaM").html("Debe ingresar su cedula");
    $(form).find(".errorPlacaM").html("Debe seleccionar su placa");
    $(form).find(".errortelefonoM").html("Debe ingresar un telefono");
       return false;

}else{
       if(!expNombre.test(nombre)){
                $(".errorNombreM").html("El campo nombre solo acepta caracteres, minimo 4");
                    rnombreM = false;
                    return false;
        } else {
                $(".errorNombreM").html("Campo validado");
                $(".errorNombreM").attr("style", "color:green");
                rnombreM = true;
            } if(!expApellido.test(apellido)){
        $(".errorApellidoM").html("El campo apellido solo acepta caracteres");
            rapellidoM = false;
            return false;
} else {
        $(".errorApellidoM").html("Campo validado");
        $(".errorApellidoM").attr("style", "color:green");
        rapellidoM = true;
    }if(!expCedula.test(cedula)){
        $(".errorCedulaM").html("El campo cedula no coincide con el formato esperado 7 a 10 numeros");
           rcedulaM = false;
           return false;
} else {
        $(".errorCedulaM").html("");
       rcedulaM = true;
                 $(".errorCedulaM").html("Cédula valida");
               $(".errorCedulaM").attr("style", "color:green");

    }if(!expTelefono.test(telefono)){
        $(".errorTelefonoM").html("El campo telefono solo acepta numeros, al menos 10");
           rtelefonoM = false;
           return false;
} else {
        $(".errorTelefonoM").html("");
       rtelefonoM = true;
                 $(".errorTelefonoM").html("Telefono valido");
               $(".errorTelefonoM").attr("style", "color:green");

    }
    return true;
}
}

const mostrar = (id, formulario, modal) => {
    $.ajax({
        type: "POST",
        url: "Chofer/Mostrar/"+id,
        success: function (response) {
            let json = JSON.parse(response);
            let chofer = json.data; 
            $(formulario).find("#id_choferes").val(chofer.id_choferes);
            $(formulario).find("#nombreM").val(chofer.nombre);
            $(formulario).find("#apellidoM").val(chofer.apellido);
            $(formulario).find("#telefonoM").val(chofer.telefono);
            $(formulario).find("#cedulaM").val(chofer.cedula);
            $(formulario).find("#telefonoM").val(chofer.telefono);
            $(modal).modal('show');
        },
        error: function (response) {
            console.log(response.getAllResponseHeaders())
        }
    });
}
