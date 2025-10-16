const respostasDoUsuario = prompt('digite o número que você quer testar')
const numero = Number(respostasDoUsuario)

if(numero % 2 === 0) {
    console.log('Passou no teste.')
}
else {
    console.log('Não passou no teste.')
}
// a- Para saber o resto da divisão
// b- Números pares
// c- Números ímpares

// exercício 2
let fruta = prompt('Escolha uma fruta')
let preco

switch (fruta) {
    case 'laranja':
        preco = 3.5
        break
    case 'maça':
        preco = 2.25
        break
    case 'uva':
        preco = 0.30
    case 'pêra':
        preco = 5.5
        break; // BREAK PARA O ITEM c
    default:
        preco = 5
        break
}
console.log('o preço da fruta ', fruta, ' e ', 'R$ ', preco)

//
//
//
//