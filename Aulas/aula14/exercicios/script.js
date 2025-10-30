/*
// contador simples
let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (array of arrays) {
  console.log(array);
}

// contador pares
let arrayPares = [];
for (let i = 0; i <= 20; i++){
    if( i% 2 === 0){
        arrayPares.push(i)
    }
}
console.log(arrayPares)

// tabuada
const tabuada = Number(prompt('Digite um número'))
for(let i = 1; i <=10; i++){
    console.log(`${tabuada} x ${i} = ${tabuada * i}`)
}
*/

// soma de números
let soma = 0
for(let i = 0; i < 5; i++){
    let numeros = Number(prompt('Digite um número'))
    soma+= numeros
} console.log(soma)

