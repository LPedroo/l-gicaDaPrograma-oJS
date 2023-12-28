function mostrarFilme() {
  var movie = document.getElementById("movie").value;
  var movieTime = document.getElementById("time").value;
  var calculateTime = Math.floor(movieTime / 60);
  var calculateRestTime = movieTime % 60;
  document.getElementById(
    "resposta"
  ).textContent = `O ${movie} tem ${calculateTime} Horas e ${calculateRestTime} Minutos!`;
}

var exibir = document.getElementById("exibir");
exibir.addEventListener("click", mostrarFilme);
