let idadesDosAtletas = [
  20, 21, 21, 20, 20, 17, 21, 20, 22, 21, 17, 17, 20, 24, 17, 22, 23, 24,
];

let idadeMaior23 = 0;
// este for vai contar quantos jogadores são maior de 23 no array
for (let item of idadesDosAtletas){ // percorre os itens da lista
    if (item > 23){
        idadeMaior23 = idadeMaior23 + 1
    }
}

// se tiver mais que 18 atletas no array imprima o texto abaixo
if (idadesDosAtletas.length > 18) {
  console.log("INVALIDA POR TER MAIS DE 18 JOGADORES");
} else if (idadeMaior23 > 3) {
    console.log(idadeMaior23)
} else {
    console.log("CONVOCACAO VALIDA")
}
