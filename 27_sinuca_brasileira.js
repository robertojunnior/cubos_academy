//jogadorA = [1, 5, 6, 10, 12, 4]

//se a soma do jogadorA for > 61pts imprima JOGADOR A GANHOU
//se não, imprima JOGADOR B GANHOU

let jogadorA = [1,5,3,8,10,14,12,15];
let somaJogadorA = 0;//acumulador ou contador

for (let elemento of jogadorA) {
    somaJogadorA = somaJogadorA + elemento
}

let somaJogadorB = 120 - somaJogadorA;

if (somaJogadorA > somaJogadorB){
    console.log("JOGADOR A GANHOU")
} else if(somaJogadorB < somaJogadorA) {
    console.log("JOGADOR B GANHOU")
} else {
    console.log("EMPATE")
}



// para a plataforma

// let somaJogadorA = 0;//acumulador ou contador
// let somaJogadorB = 120 - somaJogadorA

// for (let item of jogadorA) {
//     somaJogadorA = somaJogadorA + item
// }

// if (somaJogadorA > somaJogadorB){
//    return "JOGADOR A GANHOU"
// } else if(somaJogadorA < somaJogadorB) {
//    return "JOGADOR B GANHOU"
// } else {
//    return "EMPATE"
// }