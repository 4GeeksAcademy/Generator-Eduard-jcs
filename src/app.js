import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  let who = ['Una Bruja', 'Un Polaco', 'El Guardia', 'La Mamá de Tarzán'];
  let action = ['rompió', 'quebró', 'lanzó', 'quemó'];
  let what = ['mi tarea', 'mi teléfono', 'el carrito'];
  let when = ['antes de la clase', 'cuando estaba con el cuero', 'mientras estaba en el monte', 'mientras peleaba', 'cuando jugaba pelota'];

  let generatorElement = document.querySelector("#generator");
  generatorElement.innerHTML = `${seleccionarAleatorio(who)} ${seleccionarAleatorio(action)} ${seleccionarAleatorio(what)} ${seleccionarAleatorio(when)}`;
};

function seleccionarAleatorio(lista) {
  let elementoAleatorio = Math.floor(Math.random() * lista.length);
  return lista[elementoAleatorio];
}

 