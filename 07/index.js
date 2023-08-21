const popInicial = 1000
const qteTransmissao= 4
const tempo = 100
const totalInfectados = popInicial*4**(tempo/7)
console.log(`após ${tempo} dias, o total de pessoas infectadas será de aproximadamente ${totalInfectados.toFixed(0)}, uma vez que inicialmente existiam ${popInicial} pessoas infectadas`)