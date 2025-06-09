let data_equipo = [];
let data_status = [[5, "Equipos activos", "Cantidad de equipos registrados en el sistema", "https://cdn-icons-png.flaticon.com/512/2210/2210210.png", "card-morado"], [2, "Mantenimientos pendientes", "Cantidad de notificaciones de mantenimientos sin gestionar", "https://cdn-icons-png.flaticon.com/512/2210/2210147.png", "card-naranja"], [6, "Dispositivos IoT activos", "Cantidad de equipos con IoT vinculados al sistema", "https://cdn-icons-png.flaticon.com/512/2210/2210215.png", "card-azul-light"]];
let data_prox_man = [["Equipo A", "May 15, 2025", "Preventivo", "Inspección", "https://cdn-icons-png.flaticon.com/512/2210/2210175.png"], ["Equipo B", "May 5, 2025", "Correctivo", "Inspección", "https://cdn-icons-png.flaticon.com/512/2210/2210217.png"], ["Equipo C", "May 10, 2025", "Preventivo", "Inspección", "https://cdn-icons-png.flaticon.com/128/2210/2210163.png"], ["Equipo D", "May 9, 2025", "Correctivo", "Inspección", "https://cdn-icons-png.flaticon.com/512/2210/2210202.png"]];

llenarStatusMantenimiento();
llenarProxMantenimiento();
llenarGestionManteni();


function llenarStatusMantenimiento(){

  let content_status_mantenimiento = document.getElementById('content_status_mantenimiento');
  const template_status_proyect = document.getElementById("template_status_mantenimiento").content;
  
  if(data_status.length <= 0){
    return;
  }
  

  data_status.forEach((item_status,)=>{
    const card = template_status_proyect.cloneNode(true);
    const img_details = card.querySelector(".img_details");
    const nombre_details = card.querySelector(".nombre_details");
    const cant_details = card.querySelector(".cant_details");
    const descripcion_details = card.querySelector(".descripcion_details");
    const card_details = card.querySelector(".card_details");

    nombre_details.textContent = item_status[1];
    cant_details.textContent = item_status[0];
    descripcion_details.textContent = item_status[2];
    card_details.classList.add(item_status[4]);
    
    if(item_status[3] !== ""){
        img_details.src= item_status[3];
    }else{
        img_details.src=""
    }

    content_status_mantenimiento.appendChild(card);

  })  
}


function llenarProxMantenimiento(){

    let content_prox_mantenimiento = document.getElementById('content_prox_mantenimiento');
    const template_prox_manteni = document.getElementById("template_prox_manteni").content;
    
    if(data_prox_man.length <= 0){
      return;
    }
  
    data_prox_man.forEach((item_prox,)=>{
      const card = template_prox_manteni.cloneNode(true);
      const nombre_equipo = card.querySelector(".nombre_equipo");
      const fecha_equipo = card.querySelector(".fecha_equipo");
      const tipo_equipo = card.querySelector(".tipo_equipo");
      const proxima_inspeccion = card.querySelector(".proxima_inspeccion");
      const img_equipo = card.querySelector(".img_equipo");
  
      nombre_equipo.textContent = item_prox[0];
      fecha_equipo.textContent = item_prox[1];
      tipo_equipo.textContent = item_prox[2];
      proxima_inspeccion.classList.add(item_prox[3]);
      
      if(item_prox[4] !== ""){
          img_equipo.src= item_prox[4];
      }else{
        img_equipo.src=""
      }
  
      content_prox_mantenimiento.appendChild(card);
  
    })  
}

function llenarGestionManteni(){
    let content_gestion_equipo = document.getElementById('content_gestion_equipo');
    const template_gestion_equipo = document.getElementById("template_gestion_equipo").content;
    
    if(data_equipos.length <= 0){
      return;
    }
  
    data_equipos.forEach((item_equipo,)=>{
      const card = template_gestion_equipo.cloneNode(true);
      const date_details = card.querySelector(".date_details");
      const img_details = card.querySelector(".img_details");
      const nombre_details = card.querySelector(".nombre_details");
      const num_ser_details = card.querySelector(".num_ser_details");
      const descripcion_details = card.querySelector(".descripcion_details");
      const card_details = card.querySelector(".card_details").classList.add(item_equipo[5])
  
      date_details.textContent = item_equipo[0];
      descripcion_details.textContent = item_equipo[3];
      nombre_details.textContent = item_equipo[1];
      num_ser_details.textContent = item_equipo[2];
      
      if(item_equipo[4] !== ""){
        img_details.src= item_equipo[4];
      }else{
        img_details.src=""
      }
  
      content_gestion_equipo.appendChild(card);
  
    })  
}
  