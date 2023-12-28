function tipoDeDesconto() {
  var inYes = document.getElementById("inYes");
  var inNo = document.getElementById("inNo");

  if (convYes.checked) {
    inYes.className = "exibir";
    inNo.className = "oculta";
  } else {
    inYes.className = "oculta";
  }
}

var convYes = document.getElementById("convYes");
convYes.addEventListener("change", tipoDeDesconto);

var conNo = document.getElementById("conNo");
conNo.addEventListener("change", tipoDeDesconto);

function adicionarDesconto() {
  var inValue = document.getElementById("inValue");
  var inYes = document.getElementById("inYes");
  var preDesc = document.getElementById("preDesc");
  var preValue = document.getElementById("preValue");

  var valor = Number(inValue.value);

  if (valor == "" || isNaN(valor)) {
    alert("Informe o valor da vacina");
    inValue.focus();
    return;
  }

  if (convYes.checked) {
    var num = inYes.selectedIndex;

    var calcularDesconto =
      num == 1
        ? valor - valor * 0.2
        : num == 2
        ? valor - valor * 0.5
        : alert("Informe seu convénio");
    var desconto = valor - calcularDesconto;

    preDesc.textContent = `Desconto: R$${desconto.toFixed(2)}`;
    preValue.textContent = `A Pagar: R$${calcularDesconto.toFixed(2)}`;
  } else {
    calcularDesconto = valor - valor * 0.1;
    var desconto = valor - calcularDesconto;
    preDesc.textContent = `Desconto: R$${desconto.toFixed(2)}`;
    preValue.textContent = `A Pagar: R$${calcularDesconto.toFixed(2)}`;
  }
}

var addDesc = document.getElementById("addDesc");
addDesc.addEventListener("click", adicionarDesconto);
