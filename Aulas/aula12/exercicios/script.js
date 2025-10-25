/*
let numero
let soma = 0
while(numero !== 0){
     numero = Number(prompt('Insira os numeros'))
    soma += numero
    
}
console.log('O resultado deve ser:', soma)
*/

const array = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0
for(i=0; i<6; i++){
    if(array[i]>maiorNumero){
        maiorNumero =array[i]
    }
}
console.log(maiorNumero)
