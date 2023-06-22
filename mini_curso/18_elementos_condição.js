const palavra = 'Abacate';
let numeroDeVogais = 0;

for (const letras of palavra) {
    if (letras === 'a') {numeroDeVogais += 1;}
    if (letras === 'e') {numeroDeVogais += 1;}
    if (letras === 'i') {numeroDeVogais += 1;}
    if (letras === 'o') {numeroDeVogais += 1;}
    if (letras === 'u') {numeroDeVogais += 1;}
// neste caso foi necessário pedir no código que também valide letras maiúsculas.
// Como no exemplo da palavra abacate com A maiúsculo que só leu 3 vogais.
    if (letras === 'A') {numeroDeVogais += 1;}
    if (letras === 'E') {numeroDeVogais += 1;}
    if (letras === 'I') {numeroDeVogais += 1;}
    if (letras === 'O') {numeroDeVogais += 1;}
    if (letras === 'U') {numeroDeVogais += 1;}
}

console.log(numeroDeVogais);









// if (condição) {

// }

// while (condição) {

// }

// for (const elemento of coleção) {

// }