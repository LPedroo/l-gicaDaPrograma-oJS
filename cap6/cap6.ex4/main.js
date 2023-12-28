const DESCONTO = 0.2;

function calcularMultaDesconto() {
  var inData = document.getElementById("inData");
  var inValue = document.getElementById("inValue");

  var dataInfracao = inData.value;
  var valor = Number(inValue.value);

  if (dataInfracao == "" || valor == 0 || isNaN(valor)) {
    alert("Preencha os campos adequadamente");
    inData.focus();
    return;
  }

  var infracao = new Date();

  var partes = dataInfracao.split("-");
  infracao.setDate(Number(partes[2]));
  infracao.setMonth(Number(partes[1]) - 1);
  infracao.setFullYear(Number(partes[0]));

  var lista = "";

  var dia, mes, ano, diaZero, mesZero;
  infracao.setMonth(infracao.getMonth() + 3);
  dia = infracao.getDate();
  mes = infracao.getMonth() + 1;
  ano = infracao.getFullYear();

  diaZero = dia < 10 ? "0" + dia : dia;
  mesZero = mes < 10 ? "0" + mes : mes;

  lista += `Data Limite para o Pagto com Desconto: ${diaZero}/${mesZero}/${ano}`;

  document.getElementById("dataPg").textContent = lista;

  var valorTotal = valor - valor * DESCONTO;

  document.getElementById(
    "valueDescont"
  ).textContent = `Valor com Desconto: R$${valorTotal.toFixed(2)}`;
}

var calcularMulta = document.getElementById("calcularMulta");
calcularMulta.addEventListener("click", calcularMultaDesconto);
