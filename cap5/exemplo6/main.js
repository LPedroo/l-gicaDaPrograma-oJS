var idades = [12, 20, 15, 17, 14];

var maiores = false;

for (var i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    alert(idades[i]);
    maiores = true;
  }
}

if (!maiores) {
  alert("Não há idades maiores que 18 na lista");
}
