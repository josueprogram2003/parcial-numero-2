$(document).ready(function () {});

const nombre = $("#nombre");
const correo = $("#correo");
const telefono = $("#telefono");
const respuesta = $("#respuesta");

$("#boton").on("click", function (e) {
  e.preventDefault();
  const ul = $("<ul>");
  let agrega =
    "<li>" +
    nombre.val() +
    "</li>" +
    "<li>" +
    correo.val() +
    "</li>" +
    "<li>" +
    telefono.val() +
    "</li>";
  ul.append(agrega);
  respuesta.append(ul);
});
