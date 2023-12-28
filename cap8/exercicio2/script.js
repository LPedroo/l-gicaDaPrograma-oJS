function adiconarProduto() {
  var inProduct = document.getElementById("inProduct");

  var produto = inProduct.value;

  if (produto == " ") {
    alert("Informe um produto antes de adicionar a lista");
    inProduct.focus();
    return;
  }

  if (localStorage.getItem("Produto")) {
    var produtoNome = `${localStorage.getItem("Produto")},${produto}`;
    localStorage.setItem("Produto", produtoNome);
  } else {
    localStorage.setItem("Produto", produto);
  }

  inProduct.value = "";
  inProduct.focus();
  mostrarProduto();
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adiconarProduto);

function mostrarProduto() {
  var inResposta = document.getElementById("inResposta");

  if (!localStorage.getItem("Produto")) {
    //Nesse if, ele indiretamente usa a func "imparLista" pra quando tiver vazio
    inResposta.textContent = " ";
  } else {
    var nomesProdutos = localStorage.getItem("Produto").split(",");
    nomesProdutos.sort();

    var lista = "Produtos Adicionados \n ";
    lista += `----------------------------------\n`;
    
    //Percorre os produtos e lista eles
    for (var i = 0; i < nomesProdutos.length; i++) {
      lista += `${nomesProdutos[i]}\n`;
    }
    inResposta.textContent = lista;
  }
}

mostrarProduto();

function limparLista() {
  if (confirm("Deseja realmente limpar sua lista?")) {
    localStorage.removeItem("Produto");
    mostrarProduto();
  }
}

var btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", limparLista);
