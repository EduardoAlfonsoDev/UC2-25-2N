/*
const bool1 = true // definiu a variavel bool1 e seu valor é true
const bool2 = false // definiu a variavel bool2 e seu valor é false
const bool3 = !bool2 // alterou a varialvel bool2 e criou a variavel bool3 e trocou o comparador para negação

let resultado = bool1 && bool2 // criou a vatiavel resultado e usou o comparador &&
console.log('a. ', resultado) // imprimiu o resultado

resultado = bool1 && bool1 && bool3 // comparou 3 variaveis 
console.log('b. ', resultado) // imprimiu o resultado

resultado = !resultado && (bool1 || bool2) // trocou o comparador do resultado para negação e usou comparador AND. e comparou duas variaveis usando OU
console.log('c. ', resultado) // imprimiu o resultado

console.log('d. ', typeof resultado) // imprimiu o resulatdo e perguntou o tipo 
*/
/*
// exer2

let primeiroNumero = prompt('Digite um numero!')
let segundoNumero = prompt('Digite outro numero')

const soma = primeiroNumero + segundoNumero

console.log(soma)

// porque o prompt puxa como string então tem que transformar para number

*/

let idade = prompt('qual sua idade')
const idade2 = Number(idade)
let idadeAmigo = prompt('idade do melhor amigo?')
const idadeAmigo2 = Number(idadeAmigo)


console.log('Sua idade é maior do que seu melhor amigo?', idade2 >= idadeAmigo2)
console.log('diferença de idade', idade2 !== idadeAmigo2)

