let precoProduto1 = 30.50;
console.log('Preço do produto 1 é', precoProduto1);

precoProduto1 = precoProduto1 + 1;
console.log('Preço do produto 1 é', precoProduto1);

// precoProduto1 = precoProduto1 + 1;
precoProduto1 += 1;
console.log('Preço do produto 1 é', precoProduto1);

// precoProduto1 = precoProduto1 * 0.8;
// precoProduto1 *= 0.8;
precoProduto1 -= precoProduto1 * 0.2;
console.log('Preço do produto 1 é', precoProduto1);

const desconto = precoProduto1 * 0.2;
precoProduto1 -= desconto;
console.log('O desconto do produto 1 é', desconto)








