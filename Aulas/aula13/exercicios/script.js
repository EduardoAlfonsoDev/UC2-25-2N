/*
// exerc 1
let valor = 0; 
for (let i = 0; i < 5; i++) { // início; teste; incr:
  valor += i; 
}
console.log(valor); //imprimiu os valores um a um e saiu do loop

//o código abaixo esta somando o i e salvando em uma variavel 'valor' para no final imprimir 'valor'. Resultado é 10.
*/

/*
// exerc 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
for (let numero of lista) {
  if (numero > 18) {
    console.log(numero); // vai executar o console mostrando os numeros maiores de 18. 
  }                      // Poderiamos simplesmente utilizar os colchetes lista[indice], para descobrir um indice poderia ser usado o método 3

}
*/

/*
// exerc 3
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas"));
let quantidadeAtual = 0;
while (quantidadeAtual < quantidadeTotal) {
  let linha = "";
  for (let astericos = 0; astericos < quantidadeAtual + 1; astericos++) {
    linha += "*";
  }
  console.log(linha)
  quantidadeAtual++;

} // seria empresso 4 linhas cada uma com a quantidade de asteriscos pedidos
  // o resultado seria a quantidade de linhas uma com a respectiva quantidade de asteriscos,
  //linha 1, um asterisco, linha 2, dois asteriscos.
*/

/*
// exerc 4
let bixos = Number(prompt('quantos bixinhos voce tem?'))
if(bixos === 0){
  console.log("Que pena! Você pode adotar um pet!")
  // console.log('Que pena! Você pode adotar um pet!')
}
else{
  let nomes = []
for(let i = 0; i < bixos; i++){                    // versao simplificada
 let nomeBixos = prompt('nome dos bixos')        // nomesBixos.push(prompt('nome dos bixos'))
 nomes.push(nomeBixos)
}}
console.log(nomes)
*/

// exerc 5
const arrayOriginal = [4, 7, 44, 77]

//a)
for(let i = 0; i < 4; i++){
  console.log(arrayOriginal)
}
//b)
for(let i = 0; i < 4; i++){
  console.log(arrayOriginal/10)
}
//c)
const novoArray = []
for(numero of arrayOriginal){
  if(numero%2===0){
  novoArray.push(numero)
}}
console.log(novoArray)

//d)
let arrayFrases = []
for(let i = 0; i<arrayOriginal.length; i++){
  arrayFrases.push('o elemento do índex' + i+ 'é ' + arrayOriginal[i])
}console.log(arrayFrases)

//e)
let maiorNum = arrayOriginal[0]
let menorNum = arrayOriginal[0]
for(let numero of arrayOriginal){
  if(numero>maiorNum){
    maiorNum=numero
  }
  else if(numero<menorNum){
    menorNum=numero}
  }
  console.log('menorNum é:',menorNum, 'maiorNum é:', maiorNum)
