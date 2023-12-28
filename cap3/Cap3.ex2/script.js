function exibirMulta() {
  var velocidadeUm = document.getElementById("velocidade1").value;
  var velocidadeDois = document.getElementById("velocidade2").value;
  var resposta = document.getElementById("resposta");

  var velPermitida = Number(velocidadeUm);
  var velCondutor = Number(velocidadeDois);

  if (isNaN(velPermitida) || isNaN(velCondutor)) {
    alert("Número Inválido!");
    return;
  }

  var calcularVel = velPermitida + velPermitida * 0.2;

  if (velCondutor <= velPermitida) {
    resposta.textContent = "Situação: Sem Multa";
  }

  if (velCondutor > velPermitida && velCondutor <= calcularVel) {
    resposta.textContent = "Situação: Multa Leve";
  }

  if (velCondutor > velPermitida && velCondutor > calcularVel) {
    resposta.textContent = "Situação: Multa Grave";
  }
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", exibirMulta);
