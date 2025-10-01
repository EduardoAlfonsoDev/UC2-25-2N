// parte 1
const ouroTotal = 75000
const membrosTripulacao = 9
const recompensaBaseLuffy = 3000000000
const aumentoRecomensa = 150000000
const bonusExperiencia = 500
const forcaTripulacao = 95

console.log(ouroTotal, membrosTripulacao, recompensaBaseLuffy, aumentoRecomensa, bonusExperiencia, forcaTripulacao)

let ouroPorMembro = ouroTotal / membrosTripulacao
console.log(ouroPorMembro)

let restoOuro  = ouroTotal % membrosTripulacao

let novaRecompensaLuffy = recompensaBaseLuffy + aumentoRecomensa
console.log(novaRecompensaLuffy)

let poderLuffy = 7 * recompensaBaseLuffy
console.log(poderLuffy)

let reducaoAumento = aumentoRecomensa - 50000000
console.log(reducaoAumento)

console.log("Ouro por membro", ouroPorMembro, "sobra para cada membro", restoOuro, "nova recompensa do Luffy", novaRecompensaLuffy, "poder temporário", poderLuffy, "redução de aumento", reducaoAumento)
    
// parte 2

const forcaInimigo = 120
const chanceVitoria = 0.7
const limiteSeguranca = 0.8
const temAkumaNoMi = true
const inimigoTemHaki = true
const combateJusto = 'sim'
const combateRapido = 'sim'

let podeVencer = (forcaTripulacao >= forcaInimigo)

let riscoAlto = (chanceVitoria < limiteSeguranca)

let batalhaFacil = (combateJusto == combateRapido)


console.log("A forcaTripulacao é maior ou igual à forcaInimigo?", podeVencer)
console.log("A chanceVitoria é menor que o limiteSeguranca?", riscoAlto)
console.log("O combateJusto é igual ao combateRapido?", batalhaFacil)

