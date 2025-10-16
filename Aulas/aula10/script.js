// exer 1
/*
let num1 = Number(prompt('digite um numero '))
let num2 = Number(prompt('digite outro numero '))

let comparacao = num1 === num2

if(comparacao){
    console.log('os  numeros sao iguais')
}

else 
    console.log('os numeros são diferentes')
*/

/*
// exer 2

const num1 = Number(prompt('numero 1'))
const num2 = Number(prompt('numero 2'))

const resultado = num1 === num2

if(num1>num2){
    console.log('numero 1 é maior ao numero 2')
}
else if (num1<num2){
    console.log('numero 1 é menor que o numero 2')
}
else
    console.log('os numeros são iguais')
*/

/* 

let pokemon = prompt('escolha um pokemon')

switch(pokemon){
    case 'bulbasaur' :
        console.log('bulbasaur(planta e veneno)')
        break
    case 'charmander':
        console.log('charmander(fogo)')
        break
    case 'squirtle' :
        console.log('squietle(água)')
        break
    default:
        console.log('pokemon não registrado')
        break        

}
*/
/*
const alunas = prompt('Escreva o nome de uma aluna de Hogwarts')

switch(alunas.toLocaleLowerCase()){
    case 'hermione':
        console.log('Grifinória')
        break
    case 'ana':
        console.log('Lufa-lufa')
        break
    case 'luna':
        console.log('Corvinal')
        break
    case 'narcisa':
        console.log('Sonserina')
        break
    default:
        console.log('Personagem não encontrado')

}
*/
let idade = Number(prompt('Qual sua idade')) >=18
let ensino = prompt('Tem ensino médio completo?').toLocaleLowerCase()==='sim'
let faculdade = prompt('Está cursando outra').toLocaleLowerCase()==='sim'


if(ensino&&idade&& !faculdade) {
    console.log('Pode estudar nessa faculdade')
}
else
    console.log('Voce não pode estudar nessa faculdade')