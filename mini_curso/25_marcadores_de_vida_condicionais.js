// Classe 1: inimigos que tiram 20 pontos de VideoFrame;
// Classe 2: inimigos que tiram 30 pontos de VideoFrame;
// Classe 3: inimigos que tiram 40 pontos de VideoFrame;
// Classe 4: inimigos que tiram 50 pontos de VideoFrame;

// Se classe 1 encostar no inimigo tire 20 pontos -> E verifique se vida ficou menor ou igual a 0
// Se não e classe 2 encostar no inimigo tire 30 pontos -> E verifique se vida ficou menor ou igual a 0
// Se não e classe 3 encostar no inimigo tire 40 pontos -> E verifique se vida ficou menor ou igual a 0
// E caso seja classe 4 encostar no inimigo tire 50 pontos -> E verifique se vida ficou menor ou igual a 0

let vida = 50;
let classe = 1;
let novaVida = 0;

// verifica a classe inimiga
if (classe === 1){
   novaVida = vida - 20
} else if (classe === 2){
    novaVida = vida - 30
} else if (classe === 3){
    novaVida = vida - 40
} else {
    novaVida = vida - 50
}
//demonstra o resultado
if (novaVida <= 0){
    console.log("PERDEU")
} else {
    console.log(novaVida)
}