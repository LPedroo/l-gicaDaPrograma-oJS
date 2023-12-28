do {
  var num = Number(prompt("Número: "));
  if (num == 0 || isNaN(num)) {
    alert("Informe um número válido");
  }
} while (num == 0 || isNaN(num));
{
  var pares = `Pares entre 1 e ${num}: `;

  //Aqui faz os pares começarem em 2
  if (num > 1) {
    pares = pares + 2;
  } else {
    pares = `Esse número não é par.`;
  }

  for (i = 4; i <= num; i = i + 2) {
    pares = ` ${pares} , ${i}`;
  }
}

alert(pares);
