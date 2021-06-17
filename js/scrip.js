$(document).ready(function () {});

const username = "josue";
const password = "123";
$("#boton").on("click", function (e) {
  e.preventDefault();
  alert("hola");
  let user = $("#user").val();
  let pass = $("#pass").val();
  console.log(user, pass);
  if (user == username && pass == password) {
    sessionStorage.setItem("user", user);
    console.log(user);
    window.location = "menu.html";
  } else {
    window.location = "index.html";
  }
});
