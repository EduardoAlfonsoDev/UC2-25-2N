// exercicios
const filme = {
    nome : 'auto da compadecida',
    ano: 2000,
    elenco : ['Matheus Nachtergaele', 'Selton Mello', 'Denise Fraga', 'Virgínia Cavendish'],
    transmissoesHoje : [
        {canal: 'Telecine', horario: '21h'},
        {canal: 'Canal Brasil', horario: '19h'},
        {canal: 'Globo', horario: '14h'}
    ]
}
console.log(filme.elenco[0]) 
console.log(filme.elenco[filme.elenco.length -1])
console.log(filme.transmissoesHoje[2])

//a) vai aparecer o nome do Matheus Nachtergaele no primeiro console
// no segundo console ele vai aparecer o nome da Virginia cavendish
// no terceiro console vai aparecer a transmissão 2

// exercicio 2
const cachorro = {
    nome : 'juca',
    idade : 3,
    raca : 'SRD'
}

const gato = {
    ...cachorro, nome : 'juba'
}

const tartaruga = {
    ...gato, nome : gato.nome.replaceAll('a', 'o')
}
console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) vai ser impresso a troca de de nome 

//b) O spread é simbolizado por três pontos, e as propriedades com mesmo nome são sobrescritas

// exercicios 3
function minhaFuncao (objeto, propriedade){
    return objeto[propriedade]
}
const pessoa = {
    nome : 'caio',
    idade : 23,
    backender: false
}
console.log(minhaFuncao(pessoa, 'backender'))
console.log(minhaFuncao(pessoa,'altura'))

//a) false e undefined

//b) n foi definido uma altura no objeto e o backender foi definido como false

// exercicio de fixação
const people = {
    nome : 'Eduardo',
    apelidos : ['edu','alfonso','du']
}
console.log(`Eu sou ${people.nome} mas pode me chamar de: ${people.apelidos}`)

// exercicio de fixação 2
