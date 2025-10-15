let condicao1 = true
if (condicao1){
    // como o valor da condição é true, o codigo desse bloco é executado
    console.log('entrei no if 1!')
}

let condicao2 = false

if(condicao2) {
    // como o valor da condição é false, o codigo desse bloco NÃO é executado
    console.log('entrei no if 2!')

}
// comparando no if / if(num1 === num2)


// if + else if

if(condicao1){
    console.log('Entrei no IF 1')
}
else if(condicao1){
    console.log('entrou no ELSE IF 1')
}
else if(condicao1){
console.log('entrou no ELSE IF 2')
}
else
    console.log('entrou no ELSE')


let paisOrigem = prompt('digite seu país de origem')

switch(paisOrigem){
    case 'Brasil':
        console.log('nacionalidade brasileira')
        console.log('entrou na case')
        break
    case 'eua':
        console.log('nacionalidade americana')
        console.log('entrou na case')
        break
    case 'india':
        console.log('nacionalidade indiana')
        console.log('entrou na case')
        break
    default:
        console.log('nacionalidade não encontrada')
        break


}


