/*
// 1
let array // criou a variavel 
console.log('a ', array) // imprimiu 

array = null // definiu como vazio
console.log('b', array)

array = [3, 4, 5, 6, 7,8,9,10,11,12,13]
console.log('c ', array)

let i = 0
console.log('d ',array.length)

array[i+1] = 19
console.log('e ', array[i])

const valor = array[i+6]
console.log('f ', valor)
*/

/*
// 2

const frase = prompt('Digite uma frase') // 
console.log(frase.toUpperCase().replaceAll('A', 'I'), frase.length)
// imprime a seguinte frase 'SUBI NUM ONIBUS EM MIRROCOS 27'

*/

/*
// 3

const nome = prompt('Digite seu nome')
const email = prompt('Digite seu email')

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!` )
*/

/*
// exer 4

const comida = ['kimchi', 'bibimbap', 'tteokbokki', 'bulgogi', 'japchae']
console.log(comida)

console.log(` Essas são as minhas comidas preferidas: ${comida}`)
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

const suaComida = prompt('Qual sua comida favorita?')
comida[1] = suaComida

console.log(comida)

*/

// exer 5
/*
const listaDeTarefas = []
const tarefa1 = prompt("Digite a primeiro tarefa")
const tarefa2 = prompt('Digite a segunda tarefa')
const tarefa3 = prompt('Digite a terceira tarefa')

novaTarefa = listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
*/

/*
// dia maluco

const acessorios = Number(prompt('Número de acessórios'))
const cores = Number(prompt('Número de cores'))
const brilho = Number(prompt('Fator brilho'))
const pontuacao = (acessorios * 5) + (cores * 3) + (brilho * 10)
const metaPontuacao = 80
const resultado = (pontuacao >= metaPontuacao)
if (resultado === true){ console.log('Aprovado')}
else console.log((metaPontuacao - pontuacao), pontuacao)
*/

// dia maluco 2

 let descricao = prompt('Uma frase descrevendo o look')
const corPrincipal = prompt('A cor de destaque do look')
console.log(descricao.length)
const temTamanhoAdequado = (descricao.length )>= 20
console.log(temTamanhoAdequado)
descricao = descricao.toLowerCase()
let temBrilho = descricao.indexOf('brilho')
let temTrilhas = descricao.indexOf('trilhas')

console.log()

// const lookAprovado = (temTamanhoAdequado && ())


//chapeu de cowboy, camisa marrom, cinto preto e fivela prata