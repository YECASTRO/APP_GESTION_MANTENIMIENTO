let data_equipo = [];
let data_status = [[5, "Equipos activos", "Cantidad de equipos registrados en el sistema", "https://cdn-icons-png.flaticon.com/512/2210/2210210.png", "card-morado"], [2, "Mantenimientos pendientes", "Cantidad de notificaciones de mantenimientos sin gestionar", "https://cdn-icons-png.flaticon.com/512/2210/2210147.png", "card-naranja"], [6, "Dispositivos IoT activos", "Cantidad de equipos con IoT vinculados al sistema", "https://cdn-icons-png.flaticon.com/512/2210/2210215.png", "card-azul-light"]];
let data_prox_man = [["Equipo A", "May 15, 2025", "Preventivo", "Inspección", "https://cdn-icons-png.flaticon.com/512/2210/2210175.png"], ["Equipo B", "May 5, 2025", "Correctivo", "Inspección", "https://cdn-icons-png.flaticon.com/512/2210/2210217.png"], ["Equipo C", "May 10, 2025", "Preventivo", "Inspección", "https://cdn-icons-png.flaticon.com/128/2210/2210163.png"], ["Equipo D", "May 9, 2025", "Correctivo", "Inspección", "https://cdn-icons-png.flaticon.com/512/2210/2210202.png"]];
let data_equipos =[
    ["May 5, 2025","Equipo A", "SE2312", "Modelo 123", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-azul"],
    ["May 10, 2025","Equipo B", "SE2452", "Modelo 234", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-verde-light"],
    ["May 15, 2025", "Equipo C", "SE2678", "Modelo 456", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-rojo"],
    ["May 20, 2025", "Equipo D", "SE2890", "Modelo 789", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-morado"],
    ["May 25, 2025", "Equipo E", "SE3012", "Modelo 012", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-azul-light"],
    ["May 30, 2025", "Equipo F", "SE3234", "Modelo 345", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-verde-dark"],
    ["June 5, 2025", "Equipo G", "SE3456", "Modelo 678", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-azul"],
    ["June 10, 2025", "Equipo H", "SE3678", "Modelo 901", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-rojo"],
    ["June 15, 2025", "Equipo I", "SE3890", "Modelo 234", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-morado"],
    ["June 20, 2025", "Equipo J", "SE4012", "Modelo 567", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-verde-light"],
    ["June 25, 2025", "Equipo K", "SE4234", "Modelo 890", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-azul-light"],
    ["June 30, 2025", "Equipo L", "SE4456", "Modelo 123", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-verde-dark"],
    ["July 5, 2025", "Equipo M", "SE4678", "Modelo 456", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-rojo"],
    ["July 10, 2025", "Equipo N", "SE4890", "Modelo 789", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-morado"],
    ["July 15, 2025", "Equipo O", "SE5012", "Modelo 012", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-azul"], 
    ["July 20, 2025", "Equipo P", "SE5234", "Modelo 345", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-verde-light"],
    ["July 25, 2025", "Equipo Q", "SE5456", "Modelo 678", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-azul-light"],
    ["July 30, 2025", "Equipo R", "SE5678", "Modelo 901", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-verde-dark"],
    ["August 5, 2025", "Equipo S", "SE5890", "Modelo 234", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-rojo"],
    ["August 10, 2025", "Equipo T", "SE6012", "Modelo 567", "https://cdn-icons-png.flaticon.com/128/2210/2210178.png", "card-morado"]
];

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
  