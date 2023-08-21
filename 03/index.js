const meuDinheiro = 80
const valorProduto = 129.99
const porcentagemPossuida = (meuDinheiro*100/valorProduto).toFixed(0)
const descontoNecessario = 100-porcentagemPossuida
console.log(`vc possui ≅ ${porcentagemPossuida}% do valor entao precisa de um desconto de ≅ ${descontoNecessario}%`)