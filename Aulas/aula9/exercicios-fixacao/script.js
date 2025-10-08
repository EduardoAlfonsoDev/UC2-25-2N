/*
// 1
let array // criou a variavel 
console.log('a ', array) // imprimiu 

array = null // definiu como vazio
console.log('b', array)

array = [3, 4, 5, 6, 7,8,9,10,11,12,13]
console.log('c ', array)

let i = 0
console.log('d ',array.length)

array[i+1] = 19
console.log('e ', array[i])

const valor = array[i+6]
console.log('f ', valor)
*/

// 2

const frase = prompt('Digite uma frase') // 
console.log(frase.toUpperCase().replaceAll('A', 'I'), frase.length)
// imprime a seguinte frase 'SUBI NUM ONIBUS EM MIRROCOS 27'