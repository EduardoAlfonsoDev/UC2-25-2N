/*
const respostasDoUsuario = prompt('digite o número que você quer testar')
const numero = Number(respostasDoUsuario)

if(numero % 2 === 0) {
    console.log('Passou no teste.')
}
else {
    console.log('Não passou no teste.')
}
// a- Para saber o resto da divisão
// b- Números pares
// c- Números ímpares

*/
/*
// exercício 2
let fruta = prompt('Escolha uma fruta')
let preco

switch (fruta) {
    case 'laranja':
        preco = 3.5
        break
    case 'maça':
        preco = 2.25
        break
    case 'uva':
        preco = 0.30
    case 'pêra':
        preco = 5.5
        break; // BREAK PARA O ITEM c
    default:
        preco = 5
        break
}
console.log('o preço da fruta ', fruta, ' e ', 'R$ ', preco)
*/
//
//
//
/*
const numero = Number(prompt('Digite o primeiro número.'))
if(numero>0){
    console.log('Esse número passou no teste')
    let mensagem = 'essa mensagem é secreta!!!'
}
//
// o erro é criar uma variavel dentro do escopo, para corrigir é só criar a variavel em baixo da const nuemro

*/
/*
 // exerc code 1
 const idade = Number(prompt('Qual sua idade?'))
 
 let idade1 = idade > 18
 if(idade > 18){
    console.log('Voce pode dirigir')}
else{
    console.log('Voce não pode dirigir')
 }
*/
 // exerc code 2

let turno = prompt('Digite M (matutino) ou V (Vespertino) ou N (Noturno).')
turno = turno.toLowerCase()
//const resposta1 = 'm'
//const resposta2 = 'v'
// const respposta3 = 'n'
if(turno === 'm'){
    console.log('Bom dia!')}
else if(turno === 'v'){
    console.log('Boa tarde!')}
else if (turno === 'n'){
    console.log('Boa noite!')
}
else 
    console.log('turno não encontrado')

switch(turno){
    case 'm':
        console.log('Bom dia!')
        break
    case 'v':
        console.log('Boa tarde!')
        break
    case 'n':
        console.log('Boa noite!')
        break
    default:
        console.log('turno não encontrado')
}
/*
let generoFilme = prompt('qual filme')
let ingresso = Number(prompt('preço do ingresso'))

let 
if(generoFilme==='fantasia'&&ingresso<) */

