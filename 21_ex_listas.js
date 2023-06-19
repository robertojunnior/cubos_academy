const listaDeNumeros = [34, 14, 56, 768, 8, 81, 3, 6, 10];

// 1. Qual a soma dos números da lista?
let soma = 0;

// para (cada elemento da lista)
for (const numero of listaDeNumeros) {
    // some os elementos
    soma += numero; 
}
// mostre o resultado da soma dos elementos
console.log(soma);

// 2. Qual o menor número da lista?
let menorNumero; // se não delcararmos nada na var ela fica como 'undefined'

// para (cada elemento da lista)
for (const numero of listaDeNumeros) {
    if (menorNumero === undefined) { //veja se a const menorNumero for indefinido
        menorNumero = numero; // de a ela o valor da const numero.
    } else {
        if (numero < menorNumero) { // se o elemento encontrado for menor que a var menorNumero
            menorNumero = numero; // de a ela o valor da const numero.
        }
    }
}
console.log(menorNumero);

