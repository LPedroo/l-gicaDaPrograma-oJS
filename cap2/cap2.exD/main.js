function calculateRemedio() {
  var nomeRemedio = document.getElementById("remedio").value;
  var valorRemedio = document.getElementById("preco").value;
  var resposta = document.getElementById("resposta");

  var arredondaCent = Math.floor(valorRemedio);

  var calculaRemedio = arredondaCent * 2;

  resposta.textContent = `Promoção  de ${nomeRemedio}.\nLeve 2 por R$ ${calculaRemedio.toFixed(
    2
  )}!!!`;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", calculateRemedio);
