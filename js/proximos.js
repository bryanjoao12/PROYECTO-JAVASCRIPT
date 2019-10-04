// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
// Hemos omitido los acentos en los comentarios por compatibilidad

var pasados = [];
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
        pasados.push(eventos[i]);
      }
    }

    //Ordena los eventos segun la fecha (los mas recientes primero)
    pasados = pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = ""
    var html1 = ""
    var html2 = ""

    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 0; j < 1; j++){
      html += `
              <h2 id=\"tit"\>${pasados[j].nombre}</h2>
              <p id=\"fech"\>${pasados[j].fecha}</p>
              <p id=\"lug"\>Lugar: ${pasados[j].lugar}</p
              <p id=\"des"\>Descripción: ${pasados[j].descripcion}</p>
              <p id=\"inv"\>Invitados: ${pasados[j].invitados}</p>
              `
    }
    for(var j = 1; j < 2; j++){
      html1 += `
              <h2 id=\"tit"\>${pasados[j].nombre}</h2>
              <p id=\"fech"\>${pasados[j].fecha}</p>
              <p id=\"lug"\>Lugar: ${pasados[j].lugar}</p
              <p id=\"des"\>Descripción: ${pasados[j].descripcion}</p>
              <p id=\"inv"\>Invitados: ${pasados[j].invitados}</p>
              `
    }
    for(var j = 2; j < 3; j++){
      html2 += `
              <h2 id=\"tit"\>${pasados[j].nombre}</h2>
              <p id=\"fech"\>${pasados[j].fecha}</p>
              <p id=\"lug"\>Lugar: ${pasados[j].lugar}</p
              <p id=\"des"\>Descripción: ${pasados[j].descripcion}</p>
              <p id=\"inv"\>Invitados: ${pasados[j].invitados}</p>
              `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = html
    document.getElementById("proximos1").innerHTML = html1
    document.getElementById("proximos2").innerHTML = html2

  })

});


  //Carga los datos que estan en el JSON (info.json) usando AJAX

  //Guarda el resultado en variables

  //Selecciona los eventos que sean posteriores a la fecha actual del JSON

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento

