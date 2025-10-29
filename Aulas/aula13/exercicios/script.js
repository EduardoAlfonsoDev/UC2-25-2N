/*
// exerc 1
let valor = 0; 
for (let i = 0; i < 5; i++) { // início; teste; incr:
  valor += i; 
}
console.log(valor); //imprimiu os valores um a um e saiu do loop
 */

/*
// exerc 2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
for (let numero of lista) {
  if (numero > 18) {
    console.log(numero); // vai executar o console mostrando os numeros maiores de 18. 
  }                      // sim, so usar a variavel lista[i]
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
*/

/*
// exerc 4
let bixos = Number(prompt('quantos bixinhos voce tem?'))
let nomes = []
 if(bixos === 0){
console.log("Que pena! Você pode adotar um pet!")
 // console.log('Que pena! Você pode adotar um pet!')
 }
else{
for(let i = 0; i < bixos; i++){
 let nomeBixos = prompt('nome dos bixos')
 nomes.push(nomeBixos)
}}
console.log(nomes)
*/

// exerc 5
const arrayOriginal = [4, 7, 44, 77]

for(let i = 0; i < 4; i++){
  console.log(arrayOriginal)
}

for(let i = 0; i < 4; i++){
  console.log(arrayOriginal[i]/10)
  
}