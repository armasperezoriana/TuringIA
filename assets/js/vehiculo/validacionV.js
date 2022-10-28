$(document).ready(function () {

    $(".EnviarVehiculoRegistrar").click(function () {
        var valido = validar(modificar = false);

        if (valido == true) {
            console.log("validado")
            var placa = $("#AgregarVehiculosModal").find("#placa").val();
            var modelo = $("#AgregarVehiculosModal").find("#modelo").val();
            var funcionamiento = $("#AgregarVehiculosModal").find("#funcionamiento").val();
             var kilometraje = $("#AgregarVehiculosModal").find("#kilometraje").val();

            swal.fire({
                title: "¿Desea guardar los datos del vehiculo ingresados?",
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
                        url: './Vehiculos/Registrar',
                        type: 'POST',
                        data: {
                            placa: placa,
                            modelo: modelo,
                            funcionamiento: funcionamiento,
                            kilometraje: kilometraje,

                        },
                        success: function (respuesta) {
                           // console.log(respuesta);
                            if (respuesta == "1") {
                                swal.fire({
                                    type: 'success',
                                    title: 'Registro guardado exitosamente',
                                }).then((isConfirm) => {
                                    location.href = './Vehiculos';
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
                                    title: 'Datos del vehiculo repetidos',
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

// Modificar Vehiculo

$(".ModificarVehiculos").click(function() {
            var valido = validarM(true);
              //console.log("funciono");
            if (valido == true) {

                var id_vehiculo = $("#modificarVehiculo").find("#id_vehiculo").val();
                var modelo = $("#modificarVehiculo").find("#modeloM").val();

                var placa= $("#modificarVehiculo").find("#placaM").val();
                var funcionamiento = $("#modificarVehiculo").find("#funcionamientoM").val();
               var kilometraje = $("#modificarVehiculo").find("#kilometrajeM").val();

                swal.fire({
                    title: "¿Desea guardar los datos del vehiculo que han sido modificados?",
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
                            url: './Vehiculos/Modificar',
                            type: 'POST',
                            data: {
                                id_vehiculo: id_vehiculo,
                                placa: placa, 
                                modelo: modelo,
                                funcionamiento: funcionamiento,
                                 kilometraje: kilometraje,
                            },
                            success: function(respuesta) {
                              //alert(respuesta);
                                if (respuesta == "1") {
                                    swal.fire({
                                        type: 'success',
                                        title: 'Registro modificado exitosamente',
                                    }).then((isConfirm) => {
                                        location.href = './Vehiculos';
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

        const inhabilitar = (id) => {
            $.ajax({
                type: "POST",
                url: "Vehiculos/Inhabilitar/" + id,
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
                url: "Vehiculos/Habilitar/" + id,
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
// Inhabilitar Vehiculo
$('body').on('click', '.inhabilitar', function (e) {
    e.preventDefault();

    Swal.fire({
        title: '¿Está Seguro?',
        text: "El vehiculo será eliminado del sistema",
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
// Habilitar Vehiculo
$('body').on('click', '.habilitar', function (e) {
    e.preventDefault();

    Swal.fire({
        title: '¿Está Seguro?',
        text: "El vehiculo será habilitado en el sistema",
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

function validar() {
    var form = "";

        form = "#AgregarVehiculosModal";

       var expKilometraje = /^[1-9]\d*(,\d+){1,5}$/;// Numeros de 0 al 9 seguido de coma
       var expPlaca = /^([A-Z]{2,3}[0-9]{3})$/;  // Dos o más letras seguidas por tres a cinco números


    var validado = true;
    
    var placa = $(form).find("#placa").val();
    var rplaca = false;
   
    var modelo = $(form).find("#modelo").val();
    var rmodelo = false;
   
    var funcionamiento = $(form).find("#funcionamiento").val();
    var rfuncionamiento = false;

    var kilometraje = $(form).find("#kilometraje").val();
    var rkilometraje = false;

    if (placa ==""| modelo==""|kilometraje==""|funcionamiento=="") {
         validado = false;
       swal.fire({
                                        type: 'warning',
                                        title: 'Campos obligatorios',
                                        text: 'Asegurate de llenar todos los campos',
                                    });
    $(".errorPlaca").html("Debe ingresar su placa");
    $(".errorModelo").html("Debe seleccionar el modelo de la unidad");
    $(".errorFuncionamiento").html("Debe indicar si la unidad esta operativa");
    $(".errorKilometraje").html("Debe ingresar el kilometraje del vehiculo");

 }else{
     if(!expPlaca.test(placa)){
                $(".errorPlaca").html("El campo placa acepta 3 letras mayusculas y 3 numeros maximo 6 digitos");
                    rplaca = false;          
                    return false;
        }else {
                $(".errorPlaca").html("Placa valida");
                $(".errorPlaca").attr("style", "color:green");
                rplaca = true;
                
            } 
        if(!expKilometraje.test(kilometraje)){
                $(".errorKilometraje").html("El campo kilometraje solo acepta numeros, incluyendo decimales y coma. Ejemplo 12,00");
               // $(".errorKilometrajeM").html("El campo kilometraje solo acepta numeros, incluyendo decimales y coma. Ejemplo 12,00");
                    rkilometraje = false;
                 //   rkilometrajeM = false;
                    return false;
        } else {
                $(".errorKilometraje").html("Campo validado");
                $(".errorKilometraje").attr("style", "color:green");
                rkilometraje = true;
            }       
            return validado;
   }
}
function validarM(modificar = true) {
    var form = "";
        form = "#ModificarVehiculoModal";
    
       var expKilometraje = /^[1-9]\d*(,\d+){1,5}$/;// Numeros de 0 al 9 seguido de coma
       var expPlaca = /^([A-Z]{2,3}[0-9]{3})$/;  // Dos o más letras seguidas por tres a cinco números
    var validado = true;
    
   
    var placaM = $(form).find("#placaM").val();
    var rplacaM = false;
    
    var modeloM = $(form).find("#modeloM").val();
    var rmodeloM = false;

    var funcionamientoM = $(form).find("#funcionamientoM").val();
    var rfuncionamientoM = false;

    var kilometrajeM = $(form).find("#kilometrajeM").val();
    var rkilometrajeM = false;

    if (placaM ==""| modeloM==""|kilometrajeM==""|funcionamientoM=="") {
         validado = false;
       swal.fire({
                                        type: 'warning',
                                        title: 'Campos obligatorios',
                                        text: 'Para poder modificar asegurate de llenar todos los campos',
                                    });
    $(".errorPlacaM").html("Debe ingresar su placa");
    $(".errorModeloM").html("Debe seleccionar el modelo de la unidad");
    $(".errorFuncionamientoM").html("Debe indicar si la unidad esta operativa");
    $(".errorKilometrajeM").html("Debe ingresar el kilometraje del vehiculo");

 }else{
            if(!expPlaca.test(placaM)){
                $(".errorPlacaM").html(" Para modificar el campo placa acepta 3 letras mayusculas y 3 numeros maximo 6 digitos");
                    rplacaM = false        
                    return false;
        } else {
                $(".errorPlacaM").html("Placa valida");
                $(".errorPlacaM").attr("style", "color:green");
                rplacaM =true;
            } 
        if(!expKilometraje.test(kilometrajeM)){
                $(".errorKilometrajeM").html("El campo kilometraje solo acepta numeros, incluyendo decimales y coma. Ejemplo 12,00");
                    rkilometrajeM = false;
        
                    return false;
        } else {
                $(".errorKilometrajeM").html("Campo validado");
                $(".errorKilometrajeM").attr("style", "color:green");

                rkilometrajeM = true;
            }  
            
            if(modeloM !=""){
                $(".errorModeloM").html("Campo validado");
                $(".errorModeloM").attr("style", "color:green");
                return rmodeloM = true;
            }
            if(funcionamientoM !=""){

                $(".errorFuncionamientoM").html("Campo validado");
                $(".errorFuncionamientoM").attr("style", "color:green");
                return rfuncionamientoM = true;
            }
            return validado;
   }
}


 $('.editar').click(function(e){
   // console.log("1");
            e.preventDefault();
            mostrar($(this).attr('data-id'), "#modificarVehiculo", "#ModificarVehiculoModal");
        })
        $('.consultar').click(function(e){
             
            e.preventDefault();
            mostrar($(this).attr('data-id'), "#consultarVehiculo", "#ConsultarVehiculoModal");
        })


    
  const mostrar = (id, formulario, modal) => {
        $.ajax({
            type: "POST",
            url: "Vehiculos/Mostrar/"+id,
            success: function (response) {
                let json = JSON.parse(response);
                let vehiculo = json.data;
                $(formulario).find("#id_vehiculo").val(vehiculo.id_vehiculo);
                $(formulario).find("#placaM").val(vehiculo.placa);
                $(formulario).find("#modeloM").val(vehiculo.modelo);
                $(formulario).find("#funcionamientoM").val(vehiculo.funcionamiento);
                $(formulario).find("#kilometrajeM").val(vehiculo.kilometraje);
                $(modal).modal('show');
            },
            error: function (response) {
                console.log(response.getAllResponseHeaders())
            }
        });
    }


