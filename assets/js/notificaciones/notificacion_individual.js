function individualModal(info){
    info=JSON.parse(info);
   // console.log(info['id_notificacion']);
    $("#notificacion_individual").modal('show');
    $(notificacion_individual).find("#fecha").val(info['fecha']);      
    $(notificacion_individual).find("#contenido").val(info['contenido']); 
    info['estado']==1?info['estado']='Generada':info['estado']='En proceso';
    $(notificacion_individual).find("#estado").val(info['estado']); 
   // info[id_notificacion]['fecha'];
    //info[id_notificacion]['contenido'];

}