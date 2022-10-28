$('body').on('click', '#editar', async function (e) {
    e.preventDefault();
  //let sesionAutenticada = await getSesionAutenticada();
    //if (!sesionAutenticada) {
      //  iniciarAutenticacion();
       // return 0;
   // }
    Swal.fire({
        title: 'Confirme la acción',
        input: 'password',
        inputPlaceholder: 'Contraseña',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            Toast.fire({
                title: 'Espere!',
                html: 'Los datos están siendo procesados',// add html attribute if you want or remove
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading()
                },
            });
            $.ajax({
                type: "POST",
                url: "Usuarios/verificarPassword",
                data: { 'password': login },
                success: function (response) {
                    console.log(response);
                    if (response.success) {
                        respaldar();
                    }
                    else {
                        Swal.fire(
                            "Incorrecto!",
                            "Contraseña incorrecta",
                            "warning"
                        );
                        $('#respaldar').click();
                        Swal.showValidationMessage(
                            `Contraseña Incorrecta`
                        )
                    }
                },
                error: (response) => {
                    console.log("Error: " + response);
                    Swal.fire(
                        "Error!",
                        "Ocurrió un error durante la verificación",
                        "error"
                    );
                }
            });

        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        // console.log(result.isConfirmed);
    });
    $(".swal2-content").append(`<span class="text-center spanRespaldar">Nota: Se creará un archivo de respaldo, solo puede haber un máximo de 10 archivos. 
        Cuando se exceda el límite se eliminarán los más antiguos</span>`);
});