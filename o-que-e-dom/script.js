// window.alert("Isso é um alerta");
// alert("Isso também é um alerta");

const href = window.location.href;

const titulo = document.querySelector("h1");
const tituloClasses = titulo.classList;
const tituloId = titulo.id;

function callbackH1() {
  console.log("Clicou em ", titulo);
}

titulo.addEventListener("click", callbackH1);
