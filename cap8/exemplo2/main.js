function trocarClube() {
  var imgClube = document.getElementById("imgClube");
  var divTitulo = document.getElementById("divTitulo");

  var clube; //define a variável que irá receber o nome do clube

  if (rbBotafogo.checked) {
    clube = "Botafogo";
  } else if (rbFlamengo.checked) {
    clube = "Flamengo";
  } else {
    clube = "Vasco";
  }

  // define as classes de divTitulo: row e cores do clube
  divTitulo.className = `row cores${clube}`;

  imgClube.src = `img/${clube.toLowerCase()}.png`;
  imgClube.className = "exibe"; //exibe a imagem
  imgClube.alt = `Escudo do ${clube}`;

  localStorage.setItem("clube", clube);
}

var rbBotafogo = document.getElementById("rbBotafogo");
var rbFlamengo = document.getElementById("rbFlamengo");
var rbVasco = document.getElementById("rbVasco");

rbBotafogo.addEventListener("change", trocarClube);
rbFlamengo.addEventListener("change", trocarClube);
rbVasco.addEventListener("change", trocarClube);

function verificarClube() {
  if (localStorage.getItem("clube")) {
    var clube = localStorage.getItem("clube"); // obtém o clube
  }

  if (clube == "Botafogo") {
    rbBotafogo.checked = true;
  } else if (clube == "Flamengo") {
    rbFlamengo.checked = true;
  } else {
    rbVasco.checked = true;
  }

  trocarClube(); //Chama a function que troca a imagem e as cores
}

verificarClube(); //Já chega chamando a função pra verificar se já selecionou o clube
