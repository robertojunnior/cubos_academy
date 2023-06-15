// tipo booleano
let numero = 5436;
let texto = 'Isto é um texto.';
let vazio;
let verdade = numero > 100; // true
let inverdade = numero < 100; // false

console.log("Número: ", numero);
console.log("Texto: ", texto);
console.log("Vazio: ", vazio);
console.log("Verdade: ", verdade);
console.log("Inverdade: ", inverdade);

console.log('--------------------')

console.log("Número: ", typeof numero);
console.log("Texto: ", typeof texto);
console.log("Vazio: ", typeof vazio);
console.log("Verdade: ", typeof verdade);
console.log("Inverdade: ", typeof inverdade);

console.log('--------------------')

console.log('Ele é maior?', numero > 5436 );
console.log('É maior ou igual?', numero >= 5);
console.log('É menor?', numero < 10000);
console.log('É menor ou igual?', numero <= 5436);

console.log('--------------------')
 
console.log('É igual?', texto === 'Oi');
// estritamente igual, verifica conteudo e tipo, o igua comum são apenas ==
console.log('É diferente?', texto !== 'Olá');

console.log('É diferente?', texto !== 'Olá');
// estritamente diferente, verifica conteudo e tipo, o diferente comum são apenas !=
