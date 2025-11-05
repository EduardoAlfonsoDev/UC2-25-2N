/*
// declaração da função
function imprimirOlaMundo(){
    console.log(`Olá mundo`)
}
// invocação da função
imprimirOlaMundo();

// usando for
for(let i = 0; i<3; i++){
    imprimirOlaMundo();
}
*/
// escopo
// escopo global
const a = 1

// declara função
function imprimirVariavel(){
    //escopo local
    const b = 2
    console.log('A variável a', a)
    console.log('A variável b', b)
}
// invoca função
imprimirVariavel()

console.log('A variável a', a)
console.log('A variável b', b)

function calculaArea(altura, largura){
    let area = altura * largura
  //console.log(area)  
    return area 
}
let resultadoArea = calculaArea(2,3)
console.log(resultadoArea) //6
console.log(calculaArea(2,3)) //6
