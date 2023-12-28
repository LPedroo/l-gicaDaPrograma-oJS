function calcularPeso() {
  var nome = document.getElementById("nome").value;
  var masculino = document.getElementById("masculino").checked;
  var feminino = document.getElementById("feminino").checked;
  var altura = document.getElementById("altura").value;
  var resultadoPeso = document.getElementById("resultadoPeso");

  if (nome === "" || (masculino === false && feminino === false)) {
    alert("Por favor, preencha todos os campos...");
    return;
  }
  if (altura == 0 || isNaN(altura)) {
    alert("Por favor, informe a altura corretamente...");
  }
  if (masculino) {
    var calcularPeso = 22 * Math.pow(altura, 2);
    resultadoPeso.textContent = `${nome} seu Peso Ideal: ${calcularPeso.toFixed(
      3
    )} KG.`;
  } else {
    var calcularPeso = 21 * Math.pow(altura, 2);
    resultadoPeso.textContent = `${nome} seu Peso Ideal: ${calcularPeso.toFixed(
      3
    )} KG.`;
  }
}

var exibirPeso = document.getElementById("exibirPeso");
exibirPeso.addEventListener("click", calcularPeso);

function limparCampo() {
  document.getElementById("nome").value = "";
  document.getElementById("masculino").checked = false;
  document.getElementById("feminino").checked = false;
  document.getElementById("altura").value = "";
  document.getElementById("resultadoPeso").textContent = "";
}

var limpar = document.getElementById("limpar");
limpar.addEventListener("click", limparCampo);
