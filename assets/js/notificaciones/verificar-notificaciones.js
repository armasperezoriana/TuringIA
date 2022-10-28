consulta_alertas();
var span_notifications=document.getElementById("num-notificaciones");
var div_notifications=document.getElementById("contenido-notificaciones");

function consulta_alertas(){
    $.ajax({
        type:"POST",
        url: './Mantenimiento/notificaciones',
    }).done(function(result){
           var arreglo=JSON.parse(result);
           var cont=0;
           var texto_notificaciones="";
           for(var i=0;i<arreglo.length;i++){
            if(arreglo[i]['estado']==0){
                cont++;
                texto_notificaciones+="<a  onclick='individualModal(`"+JSON.stringify(arreglo[i])+"`);' class='dropdown-item d-flex align-items-center' title='"+arreglo[i]['contenido']+"' href='#'>";
                texto_notificaciones+="<div class='mr-3'><div class='icon-circle bg-primary'>";
                texto_notificaciones+="<i class='fas fa-file-alt text-white'></i>";
                texto_notificaciones+="<i class='fas fa-file-alt text-white'></i> </div></div>";
                texto_notificaciones+="<div><div class='small text-gray-500'>"+arreglo[i]['fecha']+"</div>";
                texto_notificaciones+="<span class='font-weight-bold'>"+arreglo[i]['titulo']+"</span>";
                texto_notificaciones+="</div></a>";
            }
           }
           if(cont!=0){
            span_notifications.innerHTML=cont;
            span_notifications.style.display="";
 
            if(cont>3){
                div_notifications.style.height='160px';
            }
            else{
                div_notifications.style.height='';
            }

            div_notifications.innerHTML=texto_notificaciones;
           }
           else{
            span_notifications.innerHTML="";
            span_notifications.style.display="none";
            div_notifications.innerHTML="No hay notificaciones en este momento";
           }



     

    })
}