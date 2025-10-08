const nome = "Eduardo Alfonso da Silveira"
const idade = 23

// aspas duplas
const frase = "O meu nome é " + nome + " e minha idade é " + idade

console.log(frase)
console.log(typeof frase)


// aspas simples
const frase2 = 'O meu nome é ' + nome + ' e minha idade é ' + idade

console.log(frase2)
console.log(typeof frase2)

// template
const frase3 = `O meu nome é ${nome} e minha idade é ${idade}` 

console.log(frase3)
console.log(typeof frase3)

console.log(nome.length)

const fraseMaiuscula = 'OieEEeEE'
// método toLowerCase
const fraseMinuscula = fraseMaiuscula.toLowerCase()
console.log(fraseMaiuscula,fraseMinuscula)

// método toUpperCase
const fraseUpper = fraseMaiuscula.toUpperCase()
console.log(fraseMaiuscula, fraseUpper)

// método trim()
console.log(nome.trim())

// método includes(caracteres)
const frase4 ="Hoje comi cenoura"
console.log(frase4.includes("cenoura")) // true
console.log(frase.includes("Batata")) // false

// método replaceAll(chars1, chars2)
const frase5 = "Hoje comi cenoura, adoro cenoura"
const novaFrase5 = frase5.replaceAll("cenoura", "batata")
console.log(novaFrase5)

const listaDeCompras = ["Abacate", "Banana", "Tomate"]

console.log(listaDeCompras[1])

// Propriedade length
const pokemon = ['farfetch', 'pikachu']
console.log(pokemon.length)

// Método includes(elemento)
const seriesBoas = ['the office', 'B99']
console.log(seriesBoas.includes('the office'))

// Método push(elemento)
const numeros = [1,2,3]
numeros.push(4)
console.log(numeros)
numeros.push(5,6,7)
console.log(numeros)

// Método pop()
const meusPeixes = ["palhaço", "mandarim", "esturjão"]
meusPeixes.pop()
console.log(meusPeixes)
meusPeixes.pop()
console.log(meusPeixes)

// Método splice(i, n)

const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
letras.splice(1,1)
console.log(letras)

