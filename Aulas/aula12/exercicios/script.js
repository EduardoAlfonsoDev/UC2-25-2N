/*
let numero
let soma = 0
while(numero !== 0){
     numero = Number(prompt('Insira os numeros'))
    soma += numero
    
}
console.log('O resultado deve ser:', soma)
*/

/*
const array = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0
for(i=0; i<6; i++){
    if(array[i]>maiorNumero){
        maiorNumero =array[i]
    }
}
console.log(maiorNumero)
*/
/*
const array = [11, 15, 18, 14, 12, 13]
let somaPares = 0
for(i=0; i<6; i++){
    if(array[i]/2===0){
        somaPares += array[i]
    }
}
console.log(`a soma dos numeros pares é:`, somaPares)
*/


// for of

const saudades = ['oi', 'sumido', 'tudo', 'bem?','saudades']
let mensagem = ''
for(let saudade of saudades){
    mensagem += saudade + " "
}
console.log(mensagem)
