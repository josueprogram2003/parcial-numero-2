$(document).ready(function () {
});

$("#boton").on("click", function(e){
  e.preventDefault();
alert("click")

  let lista = $("<ul>");
  let fila1 = $("<li>");
  let fila2 = $("<li>");
  let fila3 = $("<li>");


  fila1.val()=$("#nombre").val();
  console.log(fila1);

  fila2.val()=$("#correo").val();

  fila3.val()=$("#telefono").val();

  lista.append(lista1);
  lista.append(lista2);
  lista.append(lista3);

  respuesta.append(lista);
});