// parte 1
// criada variavies constantes(const) e variaveis alteraveis(let)
const temDiamantes = true
let niivelMesaCrafting = 2
let temGravetos = false
let temFerro = 10

//alterando valor de uma variavel
temGravetos = 2

// usando estrutura condicional 
if( temGravetos || niivelMesaCrafting < 3 && temDiamantes && temFerro >= 8){
console.log(`Picareta de Diamante criada! Hora de buscar Obsidiana!`)}
else
    console.log(`Faltam recursos ou as condições de crafting não são atendidas!`)