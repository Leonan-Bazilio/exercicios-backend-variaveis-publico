const numeroLados = 6
const somaAngulosInternos = (numeroLados-2)*180
const valorCadaAngulo = somaAngulosInternos/numeroLados // se angulos forem todos iguais
console.log(`a soma dos ângulos internos é ${somaAngulosInternos} e o valor de cada ângulo do polígono é ${valorCadaAngulo}`)