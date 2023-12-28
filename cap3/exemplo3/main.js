function calcularFuso() {
  var horaBrasil = document.getElementById("time");
  var resultado = document.getElementById("resultado");

  var verificarHoraBrasil = Number(horaBrasil.value);

  if (verificarHoraBrasil.value == "" || isNaN(verificarHoraBrasil)) {
    alert("Informe a hora no Brasil corretamente.");
  }
  calculateTime = verificarHoraBrasil + 5;

  if (calculateTime >= 24) {
    calculateTime = calculateTime - 24;
  }

  resultado.textContent = `Hora na França: ${calculateTime.toFixed(2)}.`;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", calcularFuso);
