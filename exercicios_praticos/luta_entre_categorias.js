let peso1 = 84;
let peso2 = 85;

if (peso1 < 55 && peso2 < 55) { // Peso leve, os dois com 54 ou menos
  console.log("PODEM LUTAR");
} else if (peso1 >= 55 && peso1 < 65 && peso2 >= 55 && peso2 < 65) { // meio-médio, os dois com 55 até 64
  console.log("PODEM LUTAR");
} else if (peso1 >= 65 && peso1 < 75 && peso2 >= 65 && peso2 < 75) {// médio, com 65 até 74
  console.log("PODEM LUTAR");
} else if (peso1 >= 75 && peso1 < 85 && peso2 >= 75 && peso2 < 85) {// meio-pesado, com 75 até 84
  console.log("PODEM LUTAR");
} else if (peso1 >= 85 && peso2 >= 85) { //pesado, os dois 85 acima
  console.log("PODEM LUTAR");
} else {
  console.log("NAO PODEM LUTAR"); // se não estiverem dentro das categorias acima não podem lutar
}

//para a plataforma

// if (peso1 < 55 && peso2 < 55) {
//   return "PODEM LUTAR";
// } else if (peso1 >= 55 && peso1 < 65 && peso2 >= 55 && peso2 < 65) {
//   return "PODEM LUTAR";
// } else if (peso1 >= 65 && peso1 < 75 && peso2 >= 65 && peso2 < 75) {
//   return "PODEM LUTAR";
// } else if (peso1 >= 75 && peso1 < 85 && peso2 >= 75 && peso2 < 85) {
//   return "PODEM LUTAR";
// } else if (peso1 >= 85 && peso2 >= 85) {
//   return "PODEM LUTAR";
// } else {
//   return "NAO PODEM LUTAR";
// }
