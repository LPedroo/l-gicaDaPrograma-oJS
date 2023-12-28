function trocarClube() {
  var imgClube = document.getElementById("imgClube");
  var divTitulo = document.getElementById("divTitulo");

  var clube = ["Botafogo", "Flamengo", "Vasco"]; //define a variável que irá receber o nome do clube

  //Percorre os RadiosButtons para ver qual está selecionado
  for (var i = 0; i < 4; i++) {
    if (inputsRadio[i].checked) {
      //Se selecionado
      var selecao = i; //Armazena índice do radio selecionado
      break; // Sai da reptição
    }
  }

  if (selecao <= 2) {
    //Se selecao for menor ou igual a 2, então torce por algum clube
    divTitulo.className = `row cores${clube[selecao]}`;

    imgClube.src = `img/${clube[selecao].toLowerCase()}.png`;
    imgClube.className = "exibe"; //exibe a imagem
    imgClube.alt = `Escudo do ${clube[selecao]}`;
    console.log(clube[selecao]);
    localStorage.setItem("clube", clube[selecao]);
  } else {
    divTitulo.className = `row`;

    imgClube.className = "oculta"; //exibe a image
    imgClube.alt = ` `;
    console.log(clube[selecao]);
    localStorage.removeItem("clube");
  }
}

var rbBotafogo = document.getElementById("rbBotafogo");
var rbFlamengo = document.getElementById("rbFlamengo");
var rbVasco = document.getElementById("rbVasco");

rbBotafogo.addEventListener("change", trocarClube);
rbFlamengo.addEventListener("change", trocarClube);
rbVasco.addEventListener("change", trocarClube);

var inputsRadio = document.getElementsByTagName("input");
// percorre os elementos para associar function ao evento change
for (var i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener("change", trocarClube);
}

function verificarClube() {
  if (localStorage.getItem("clube")) {
    var clube = localStorage.getItem("clube"); // obtém o clube
  }

  if (clube == "Botafogo") {
    inputsRadio[0].checked = true;
  } else if (clube == "Flamengo") {
    inputsRadio[1].checked = true;
  } else if (clube == "Vasco") {
    inputsRadio[2].checked = true;
  } else {
    rbNenhum.checked = true;
  }

  trocarClube(); //Chama a function que troca a imagem e as cores
}

verificarClube(); //Já chega chamando a função pra verificar se já selecionou o clube
