
/*const nome = prompt("Qual seu nome?")
const idade = prompt("Qual sua idade?") 

console.log(nome)
console.log(idade)

console.log(typeof(nome))
console.log(typeof(idade))
*/

const idade = prompt("Qual sua idade?") 
console.log(idade)
console.log(typeof(idade))

//Number () conversor de string para number
const idadeNumber = Number(idade)
console.log(typeof(idadeNumber))

//toString conversor de number para string 
const idadeTexto = idadeNumber.toString()
console.log(typeof(idadeTexto))