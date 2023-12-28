function exibirTriangulo() {
  var ladoUm = document.getElementById("ladoA").value;
  var ladoDois = document.getElementById("ladoB").value;
  var ladoTres = document.getElementById("ladoC").value;
  var respostaLado = document.getElementById("respostaLado");
  var respostaTipo = document.getElementById("respostaTipo");

  var ladoA = Number(ladoUm);
  var ladoB = Number(ladoDois);
  var ladoC = Number(ladoTres);

  if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
    alert("Número invalido.");
    return;
  }

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    respostaLado.textContent =
      "Um dos lados é maior que a soma dos outros. Informe outro valor.";
    return;
  }

  if (ladoA == ladoB && ladoA == ladoC) {
    respostaLado.textContent = "Lados Formam um Triângulo.";
    respostaTipo.textContent = "Tipo: Equilátero";
  }

  if (
    (ladoA == ladoB && ladoC !== ladoA) ||
    (ladoB == ladoC && ladoA !== ladoC)
  ) {
    respostaLado.textContent = "Lados Formam um Triângulo.";
    respostaTipo.textContent = "Tipo: Isósceles";
  }

  if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
    respostaLado.textContent = "Lados Formam um Triângulo.";
    respostaTipo.textContent = "Tipo: Escaleno";
  }
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", exibirTriangulo);
