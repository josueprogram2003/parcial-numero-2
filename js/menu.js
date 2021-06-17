let data = sessionStorage.getItem("user");

function pagina(op) {
  if (op == 1) {
    $("#todo").load("raiz.html");
  }
  if (op == 2) {
    $("#todo").load("contactos.html");
  }
}
function raiz() {
  var n = $("#numero").val();
  $("#resultado").val(Math.sqrt(n));
}
