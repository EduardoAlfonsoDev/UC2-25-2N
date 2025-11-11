/*
let soma = function () {
  return 2 + 2;
};
console.log(`A soma é ${soma(2, 2)}`);
*/
/*
const soma = function(){
    const num1 = 5
    const num2 = 6
    const resultado = num1 + num2
    console.log(`a soma é ${resultado}`)

}
soma()
*/
/*
let dobro = () => {
  return 5 * 2;
};
console.log(`o dobro será ${dobro(5, 2)}`);
*/
/*
const dobro = () => {
    let resultadoDobro = 5 * 2
    console.log(`o dobro será ${resultadoDobro}`)
}
dobro();
*/

/*
const determinaMonstro = (
  temPeleGelada,
  transformaComLuaCheia,
  brilhaAoSol,
  temSedeDeSangue
) => {
  
  if (temPeleGelada && brilhaAoSol && temSedeDeSangue) {
    return 'voce é um vampiro';
  } else if (transformaComLuaCheia) {
    return 'voce é um lobisomen'
  }
  else
    return 'voce é um humano'

 
};

console.log(determinaMonstro(true,false,true,true));
console.log(determinaMonstro(false,true,false,false));
console.log(determinaMonstro(false,false,false,false));
*/

// exercícios de fixação
// 1

/*
function minhaFuncao(variavel){
  return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// a) vai ser impresso uma multiplicação
// b) vai dar erro, pois ele precisa de um console para invocar, ou ter um console dentro da funçãosuario
*/

/*
// 2
let textoDoUsuario = prompt('Insira um texto')

const outraFuncao = function(texto){
  return texto.toLowerCase().includes('cenoura')
}
const reposta = outraFuncao(textoDoUsuario)
console.log(reposta)

//a)
//b)
*/
// 3

/*
let mensagem = () => {
    return 'eu sou eduardo, tenho 23 anos, moro em são leopoldo e sou estudante'
}
 console.log(mensagem())
 
 // 4
 
 let soma = (num1, num2) =>{
   return num1 + num2
 }
 console.log(soma(5,5))
 
 
 let booleano = (num1, num2) => {
   return num1 >= num2
 }
 console.log(booleano(3,5))
 
 let par = (num1, num2) => {
   return num1 >= num2 %2
 }
 console.log(par(2,3))
 
 let mensagem2 = (texto) => {
 console.log (texto.length.toUpperCase())
 }
 mensagem2()

 */
let num1 = Number(prompt('insira um numero'))
let num2 = Number(prompt('insira um numero'))

let soma = () => {
    return num1 + num2
}

let diferença = () =>{
    return num1 - num2
}
let multiplicação = () => {
    return num1 * num2
}
let divisao = () =>{
    return num1 / num2
}

console.log('numeros insiridos',num1, num2)
console.log('soma:',soma(num1,num2))
console.log('diferença:',soma(num1,num2))
console.log('multiplicação:',soma(num1,num2))
console.log('divião:',soma(num1,num2))
