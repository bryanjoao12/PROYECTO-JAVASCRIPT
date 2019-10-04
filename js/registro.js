// Hemos omitido los acentos en los comentarios por compatibilidad


function validar(formulario) {

  
  if(formulario.nombres.value.trim().length==0)
  {
    var error=document.getElementById('errornombres');
     error.innerHTML="Ingrese nombres";
     formulario.nombres.focus();
  return false;
  }
  else  {
    var error=document.getElementById('errornombres');
     error.innerHTML="";
     formulario.email.focus();
     
  
   
 
 }

 
 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 if (!re.test(formulario.email.value)) {
  var error=document.getElementById('errorEmail');
     error.innerHTML="Email invalido";
     formulario.email.focus();

  return false;
}
else{

  var error=document.getElementById('errorEmail');
     error.innerHTML="";
     formulario.contrasena.focus();
}


 if(formulario.contrasena.value.trim().length==0)
{
  var error=document.getElementById('errorContrasena');
  error.innerHTML="ingrese contraseña";
formulario.contrasena.focus();
return false;

}
else
{
  var error=document.getElementById('errorContrasena');
  error.innerHTML="";
formulario.confirmacion.focus();

}

if(formulario.confirmacion.value.trim().length==0)
{
  var error=document.getElementById('errorConfirmacion');
  error.innerHTML="ingrese confirmacion de contraseña";
formulario.confirmacion.focus();
return false;

}
else
{
  var error=document.getElementById('errorConfirmacion');
  error.innerHTML="";
formulario.tipo.focus();

}


if (formulario.contrasena.value != formulario.confirmacion.value) {
  var error=document.getElementById('errorConfirmacion');
     error.innerHTML="Contraseñas no considen";
   formulario.confirmacion.focus();
   return false;
}
else{
  var error=document.getElementById('errorConfirmacion');
     error.innerHTML="";
   formulario.Tipo.focus();
}
 
if(formulario.Tipo.value=="")
{
  var error=document.getElementById('errorTipo');
     error.innerHTML="Selecciones uno";
   formulario.Tipo.focus();
   return false;

}
if(!formulario.acepto.checked)
{
  var error=document.getElementById('errorAcepto');
  error.innerHTML="Debe aceptar terminos y condiciones";
formulario.acepto.focus();
return false;

}
  

  
  return  true;
  
  //Expresion regular del correo

}







