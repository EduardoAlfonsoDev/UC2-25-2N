const filme = {
    nome : 'Carros',
    ano : 2006,
    elenco : ['Owen Wilson = McQueen ', 'Bonnie Hunt = Sally', 'Paul Newman = Doc', 'Larry = Mater'],
    assistiu : 'sim'
}
console.log('Nome do filme:', filme.nome)
console.log('Ano de lançamento:', filme.ano)
console.log('O elenco é:', filme.elenco)
console.log('Ja viu o filme:', filme.assistiu)

const pessoa = {
    nome : 'Joao Fiuza' ,
    idade : 24,
    generoMusical : 'rock'
}
console.log(`O Nome da pessoa é ${pessoa.nome} ele tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}`)

const professores = [
    {nome : 'Dal', modulo : 1},
    {nome : 'Valter', modulo : 1},
    {nome : 'lucas', modulo : 2}

]
console.log('o professor:', professores[0].nome, 'deu o modulo:', professores[0].modulo)

const perso = [
    {nome : 'Owen', papel : 'McQueen'},
    {nome : 'Bonnie', papel : 'Sally'},
    {nome : 'Paul', papel : 'doc'},
    {nome : 'Larry', papel : 'mater'}
]
console.log('elenco:', perso[0].nome, 'e intrepertar:', perso[0].papel)
console.log('elenco:', perso[1].nome, 'e intrepertar:', perso[1].papel)
console.log('elenco:', perso[2].nome, 'e intrepertar:', perso[2].papel)
console.log('elenco:', perso[3].nome, 'e intrepertar:', perso[3].papel)

const novoPerso = {
    ...perso,
    nome: 'xuxa'
}