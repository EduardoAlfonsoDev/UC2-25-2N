// parte 1
// criada as variaveis constantes pois elas não vao ter seu valor alterado 
const velocidadeDiamante = 10
const velocidadeMadeira = 20
const velocidadePedra = 30
const velocidadeferro = 40

// parte 2
// criada a variavel e colocando um valor
const blocoMinerar = 'Obsidiana'

// parte 3
// criando uma estrutura 
if(blocoMinerar){
    console.log(`Use Picareta de Diamante ${velocidadeDiamante}`)
}
else if (blocoMinerar){
    console.log(`"Picareta de Ferro ou Pedra é o ideal ${velocidadePedra}`)
}
else
    console.log(`Qualquer ferramenta funciona, mas a de Madeira é a mais simples.`)