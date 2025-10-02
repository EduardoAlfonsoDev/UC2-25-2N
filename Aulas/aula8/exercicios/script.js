/*
const a = true
const b = false
const c = true

const resultado1 = a && b
console.log(resultado1)

const resultado2 = b && c
console.log(resultado2)

const resultado3 = a && c
console.log(resultado3)

const resultado4 = a && b && c
console.log(resultado4)
*/

/*
const a = true
const b = false
const c = true

const resultado1 = a || b
console.log(resultado1)

const resultado2 = b || c
console.log(resultado2)

const resultado3 = a || c
console.log(resultado3)

const resultado4 = a || b || c
console.log(resultado4)
*/

let nome = prompt('Qual sue nome?')
let anoDeNascimento = prompt('Em que ano você nasceu?')
const anoDeNascimento2 = Number(anoDeNascimento)
let anoAtual = prompt('Que ano estamos')
const anoAtual2 = Number(anoAtual)

const idade =  anoAtual2 - anoDeNascimento2

console.log('nome:', nome)
console.log('idade:', idade)
console.log('maior de idade?', idade >=18)
console.log('vai ter quantos anos em 2025?', 2050 - anoDeNascimento2)
