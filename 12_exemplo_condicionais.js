// Comprar apenas se o preço do produto 1 for igual 18.00 ou menos

let preçoDoProduto1 = 17;
let preçoDoProduto2 = 0.80;
let preçoDoProduto3 = 4.85;
let custo = 0;

if (preçoDoProduto1 <= 18.00) {
    console.log('Comprar produto.');
    custo = custo + preçoDoProduto1;
    
} else {
    console.log('Não comprar');
}

if (preçoDoProduto2 < 3.00) {
    if (preçoDoProduto2 >= 1.50) {
    console.log('Comprar produto.');
    custo += preçoDoProduto2;

    } else {
        console.log('Não comprar, valor abaixo do mercado.');
}
}

if (preçoDoProduto3 >= 4.85) {
    console.log('Comprar produto.');
    custo += preçoDoProduto3;
} else {
    console.log('Não comprar.')
}


console.log('O custo total da compra foi de R$', custo.toFixed(2));


