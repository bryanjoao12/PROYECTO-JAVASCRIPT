// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites





// Hemos omitido los acentos en los comentarios por compatibilidad

var proximos = [];
var pasados= [];
var hoy;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

    //Guarda el resultado en variables
    hoy = resultado.fechaActual;
    eventos = resultado.eventos;

    //Selecciona los eventos que sean anteriores a la fecha actual del JSON
    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha > hoy){
        proximos.push(eventos[i]);
      }
    }

    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha < hoy){
        pasados.push(eventos[i]);
      }
    }

    //Ordena los eventos segun la fecha (los mas recientes primero)
    proximos= proximos.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });

    pasados= pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });
    //Crea un string que contenga el HTML que describe el detalle del evento
    
    var titulo=""
    var fecha=""
    var descripcion=""
    var titulo1=""
    var fecha1=""
    var descripcion1=""
    var titulo2=""
    var fecha2=""
    var descripcion2="" 
    var titulo3=""
    var fecha3=""
    var descripcion3=""
    
    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 2 ; j < proximos.length; j++){
      titulo +=`${proximos[j].nombre}`
       fecha += `${proximos[j].fecha}`
       descripcion +=`${proximos[j].descripcion}`

        
    }
    for(var j = 1 ; j < 2; j++){
      
      titulo1 +=`${proximos[j].nombre}`
       fecha1 += `${proximos[j].fecha}`
       descripcion1 +=`${proximos[j].descripcion}`
    }

    for(var k = 0 ; k < 1; k++){
      titulo2 +=`${pasados[k].nombre}`
       fecha2 += `${pasados[k].fecha}`
       descripcion2 +=`${pasados[k].descripcion}`

        
    }
    for(var l= 1 ; l < 2; l++){
      
      titulo3 +=`${pasados[l].nombre}`
       fecha3 += `${pasados[l].fecha}`
       descripcion3 +=`${pasados[l].descripcion}`
    }

    //Modifica el DOM agregando el html generado

    document.getElementById("titulo").innerHTML = titulo
    document.getElementById("fecha").innerHTML =fecha
    document.getElementById("descripcion").innerHTML = descripcion
    document.getElementById("titulo1").innerHTML = titulo1
    document.getElementById("fecha1").innerHTML =fecha1
    document.getElementById("descripcion1").innerHTML = descripcion1
    document.getElementById("titulo2").innerHTML = titulo2
    document.getElementById("fecha2").innerHTML =fecha2
    document.getElementById("descripcion2").innerHTML = descripcion2
    document.getElementById("titulo3").innerHTML = titulo3
    document.getElementById("fecha3").innerHTML =fecha3
    document.getElementById("descripcion3").innerHTML = descripcion3
    
    
    
  })

});


  //Carga los datos que estan en el JSON (info.json) usando AJAX

  //Guarda el resultado en variables

  //Clasifica los eventos segun la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generad
