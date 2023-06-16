// O objetivo desse exercício é retornar se o nú,mero de entrada é divisível pro x ou não. Seu programa receberásempre de entrada: um número inteiro e outro número inteiro representando x e deverá imprimir na tela se o primeiro número de entrada é divisível por x.

function solucao(numero1, numero2) {
    //solução 
    const resto = numero1 % numero2;
    const resposta = resto === 0;

    console.log(resposta);

}

function naoMexer(input) {
    const numero1 = input.split('')[0];
    const numero2 = input.split('')[1];
    solucao(numero1, numero2);
}

let input = require('fs').readFileSync('/dev/stdin', 'utf8');
naoMexer(input);