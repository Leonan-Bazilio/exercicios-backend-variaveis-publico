const capitalInicial = 1000
const taxaJuros = 12.5
const periodo = 5
const montante = capitalInicial*(1+taxaJuros/100)**5
console.log(`Se um capital de R$ ${capitalInicial} é aplicado durante ${periodo} meses no sistema de juros compostos sob uma taxa mensal fixa de ${taxaJuros}%, o valor final do montante será de aproximadamente: R$ ${montante.toFixed(2)}`)