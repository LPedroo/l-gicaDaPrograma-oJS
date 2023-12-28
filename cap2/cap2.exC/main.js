// function mostrarFilme() {
//   var movie = document.getElementById("movie").value;
//   var movieTime = document.getElementById("time").value;
//   var calculateTime = Math.floor(movieTime / 60);
//   var calculateRestTime = movieTime % 60;
//   document.getElementById(
//     "resposta"
//   ).textContent = `O ${movie} tem ${calculateTime} Horas e ${calculateRestTime} Minutos!`;
// }

// var exibir = document.getElementById("exibir");
// exibir.addEventListener("click", mostrarFilme);

function calculateKg() {
  var buffetValor = document.getElementById("preco").value;
  var consumoEmGramas = document.getElementById("consumoCliente").value;

  var calculate = (buffetValor * consumoEmGramas) / 1000;
  document.getElementById(
    "resposta"
  ).textContent = ` O valor a ser pago é  R$ ${calculate.toFixed(2)}.`;
}
var exibir = document.getElementById("exibir");
exibir.addEventListener("click", calculateKg);
