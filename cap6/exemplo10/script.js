var parcelas = Number(prompt("Quantas Parcelas? "));

var lista = "";

var dia, mes, ano, diaZero, mesZero;

var data = new Date();

for (var i = 1; i <= parcelas; i++) {
  data.setMonth(data.getMonth() + 1); //Aumenta um mês na data
  dia = data.getDate();
  mes = data.getMonth() + 1;
  ano = data.getFullYear();

  diaZero = dia < 10 ? "0" + dia : dia; //acrescenta 0 se dia menor que 10

  mesZero = mes < 10 ? "0" + mes : mes; // acrescenta 0 se mês menor que 10

  lista += `${i}° Parcela: ${diaZero}/${mesZero}/${ano}\n`;
}
alert(lista);
