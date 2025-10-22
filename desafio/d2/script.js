// parte um
const danoEspada = 6
const forcaEncantamento = 1.5
const armaduraInimiga = 2
let vidaInimiga = 20

// parte dois 

let danoBruto = danoEspada * forcaEncantamento
console.log(`o dano bruto é ${danoBruto}`)

// parte tres 
const danoFinal = danoBruto - armaduraInimiga
console.log(`o dano final é ${danoFinal}`)

// parte quatro
vidaInimiga -= danoFinal

// parte cinco
if(vidaInimiga <= 0){
    console.log('O Creeper foi derrotado! Você sobreviveu à explosão!')
}
else 
    console.log(`O Creeper ainda está vivo com ${vidaInimiga} de vida. Corra!`)
