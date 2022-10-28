
$(document).ready(function() {
  $("#formLogin").on("submit", function (e) {
   
      e.preventDefault();
      let data = new FormData(this);
  
      $.ajax({
        type: "POST",
        url: "login/IniciarSesion",
        cache: false,
        data: data,
        contentType: false,
        processData: false,
        success: function (response) {
          let res = JSON.parse(response);
          if (res.tipo == 'success') {
            window.location.reload();
          
          }
          else {
            Swal.fire(
              res.titulo,
              res.mensaje,
              res.tipo
            );
          }
        },
        error: (response) => {
          console.log(response);
          Swal.fire("¡Error!", "Ocurrió un problema al iniciar sesión ", "error");
        },
      });
      Toast.fire({
        title: 'Espere!',
        html: 'Los datos están siendo procesados',// add html attribute if you want or remove
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading()
        },
      });
    });
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      showConfirmButton: false,
    });
});


function mostrarPassword() {
      var cambio = document.getElementById("pass");

      if (cambio.type == "password") {
          cambio.type = "text";
          $('.password').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
      } else {
          cambio.type = "password";
          $('.password').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
      }

    }

         function Mostrar(){
                                      document.getElementById("recuperar").style.display="block";
                                      document.getElementById("login").style.display="none";
                                    }
                                     function Ocultar(){
                                      document.getElementById("recuperar").style.display="none";
                                        document.getElementById("login").style.display="block";
                                    }