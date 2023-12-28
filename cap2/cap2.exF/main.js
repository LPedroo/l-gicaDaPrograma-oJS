function produtoMercado() {
  var nomeRemedio = document.getElementById("product").value;
  var valorRemedio = document.getElementById("price").value;
  var resposta1 = document.getElementById("promocaoResposta");
  var resposta2 = document.getElementById("promocaoAnuncio");

  var valorPromocao = valorRemedio * 0.5;
  var totalpromocao = valorRemedio * 2 + valorPromocao;

  resposta1.textContent = `${nomeRemedio} - Promoção: R$ ${totalpromocao.toFixed(
    2
  )} `;
  resposta2.textContent = `O 3° Produto custa apenas R$ ${valorPromocao.toFixed(
    2
  )}`;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", produtoMercado);
