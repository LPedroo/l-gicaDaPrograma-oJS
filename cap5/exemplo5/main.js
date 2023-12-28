var carros = [];

carros.push({ modelo: "Fusca", preco: 6500 });

carros.push({ modelo: "Escort", preco: 7000 });

for (var i = 0; i < carros.length; i++) {
  alert(`${carros[i].modelo} - R$${carros[i].preco}`);
}
