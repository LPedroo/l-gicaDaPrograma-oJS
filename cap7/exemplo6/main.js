var itens = []; //Armazena itens do pedido

function trocarItem() {
  // cria referência aos elementos select
  var inPizza = document.getElementById("inPizza");
  var inBebida = document.getElementById("inBebida");

  if (rbPizza.checked) {
    inBebida.className = "oculta"; // oculta o select das bebidas
    inPizza.className = "exibe"; // exibe select das pizzas
  } else {
    inPizza.className = "oculta"; // oculta as pizzas
    inBebida.className = "exibe"; // exibe as bebidas
  }
}

var rbPizza = document.getElementById("rbPizza");
rbPizza.addEventListener("change", trocarItem);

var rbBebida = document.getElementById("rbBebida");
rbBebida.addEventListener("change", trocarItem);

function mostrarNumSabores() {
  //Se radioButton rbPizza estiver marcado
  if (rbPizza.checked) {
    var pizza = inPizza.value; //obtém o valor
    //ATENÇÃO AO OPERADOR CONDICIONAL
    var num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4;

    //Usando o placeholder
    inDetalhes.placeholder = `Até ${num} sabores`;
  }
}

var inDetalhes = document.getElementById("inDetalhes");
inDetalhes.addEventListener("focus", mostrarNumSabores);

//Criando Função Anônima ao evento BLUR (quando perde o foco)
inDetalhes.addEventListener("blur", function () {
  inDetalhes.placeholder = ""; //Limpa a dica
});

inDetalhes.addEventListener("keypress", function (tecla) {
  //Se pressionou o tecla de código 13 (enter)
  if (tecla.keyCode == 13) {
    adicionarItem();
  }
});

function adicionarItem() {
  var inPizza = document.getElementById("inPizza");
  var inBebida = document.getElementById("inBebida");
  var outPedido = document.getElementById("outPedido");

  if (rbPizza.checked) {
    var num = inPizza.selectedIndex; //Obtém n° do item selecionado
    console.log(inPizza.selectedIndex);
    var produto = inPizza.options[num].text; // Texto do item selecionado
  } else {
    var num = inBebida.selectedIndex;
    console.log(inBebida.selectedIndex);
    var produto = inBebida.options[num].text;
  }
  var detalhes = inDetalhes.value; //Conteúdo dos detalhes
  itens.push(`${produto} ( ${detalhes} )`); //Adiciona ao vetor
  outPedido.textContent = itens.join("\n");

  limparCampos();
}

// cria referência ao elemento e associa função ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarItem);

function limparCampos() {
  rbPizza.checked = true; // marca (seleciona) rbPizza
  inBebida.className = "oculta"; // oculta select das Bebidas
  inPizza.className = "exibe"; // exibe select das Pizzas
  inPizza.selectedIndex = 0; // seleciona 1º item (posição 0)
  inDetalhes.value = ""; // limpa input Detalhes
  rbPizza.focus(); // "joga o foco" no rbPizza
}
