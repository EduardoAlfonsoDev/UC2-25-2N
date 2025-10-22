// parte um
// criado as variaveis const(constante) e let(alteraveis)
const danoEspada = 6
const forcaEncantamento = 1.5
const armaduraInimiga = 2
let vidaInimiga = 20

// parte dois 
// criando uma variavel e usando operadores aritimeticos 
let danoBruto = danoEspada * forcaEncantamento
console.log(`o dano bruto é ${danoBruto}`)

// parte tres 
// criando uma variavel e usando operadores aritimeticos
const danoFinal = danoBruto - armaduraInimiga
console.log(`o dano final é ${danoFinal}`)

// parte quatro
// atualizando uma variavel e atribuindo a subtração
vidaInimiga -= danoFinal

// parte cinco
// estrutura if/else
if(vidaInimiga <= 0){
    console.log('O Creeper foi derrotado! Você sobreviveu à explosão!')
}
else 
    console.log(`O Creeper ainda está vivo com ${vidaInimiga} de vida. Corra!`)
