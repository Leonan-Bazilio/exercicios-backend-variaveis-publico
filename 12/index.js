const montante = 90000
const capitalInicial = 60000
const nMeses = 24
const taxaJurosPorcentagem = ((montante/capitalInicial)**(1/nMeses)-1)*100

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaJurosPorcentagem.toFixed(3)}, pois após ${nMeses} meses você teve que pagar ${montante} reais`)