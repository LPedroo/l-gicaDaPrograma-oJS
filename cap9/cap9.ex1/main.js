function exibirVelas() {
  var divVelas = document.getElementById("divVelas");
  divVelas.innerHTML = ""; // Limpa a divVelas antes de adicionar novas velas

  var inNumber = document.getElementById("inNumber");
  var number = Number(inNumber.value);

  if (number == "" || isNaN(number) || number < 0 || number > 120) {
    alert("Digite a idade entre 1 e 120 anos.");
    inNumber.focus();
    return;
  }

  var numberStr = number.toString(); // Converte a idade para uma string

  for (var i = 0; i < numberStr.length; i++) {
    var digit = Number(numberStr[i]);
    criarVelas(divVelas, `number${digit}.jpg`, `Vela de número${digit}`);
  }
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", exibirVelas);

function criarVelas(pai, vela, altText) {
  for (var i = 0; i < 1; i++) {
    var novaVela = document.createElement("img");
    novaVela.src = "img/" + vela;
    novaVela.alt = altText;
    pai.appendChild(novaVela);
  }
}

var btNovas = document.getElementById("btNovas");
btNovas.addEventListener("click", function () {
  location.reload();
  alert("Informe uma nova idade! :)");
  return;
});
