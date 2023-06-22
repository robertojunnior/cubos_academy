// itensColetados: array de strings em que cada posição indica um item coletado ao longo da fase;
// itemNecessario1: uma string que indica o primeiro item necessário para enfrentar o chefão;
// itemNecessario2: uma string que indica o segundo item necessário para enfrentar o chefão;
// itemNecessario3: uma string que indica o terceiro item necessário para enfrentar o chefão.

// saida
// PODE ENFRENTAR: caso o jogador tenha os três itens necessários para enfrentar o chefão;
// NAO PODE ENFRENTAR: caso o jogador não tenha os três itens necessários para enfrentar o chefão.

itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete", "espada"]

itemNecessario1 = "machado"
itemNecessario2 = "espada"
itemNecessario3 = "sapato"

// se existir as 3 strings no array, aprova a entrada para fase do chefao
// o includes aprendi no curso do guanabara, tem como fazer com for também, mas assim parece mais simples
if ( 
    itensColetados.includes(itemNecessario1) && itensColetados.includes(itemNecessario2) && itensColetados.includes(itemNecessario3)){
    console.log ("PODE ENFRENTAR");
  } else {
    console.log ("NAO PODE ENFRENTAR");
  }

  // para plataforma
//   if (
//     itensColetados.includes(itemNecessario1) &&
//     itensColetados.includes(itemNecessario2) &&
//     itensColetados.includes(itemNecessario3)
//   ) {
//     return "PODE ENFRENTAR";
//   } else {
//     return "NAO PODE ENFRENTAR";
//   }
