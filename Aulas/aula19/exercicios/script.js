let matrix = [
[0,0,0],
[0,0,0],
[0,0,0]
]
matrix[1][2]=1

console.log(matrix) 

// percorrer a matriz
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        console.log(matriz[i][j])
    }
}

// somar a matriz
let soma = 0
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        soma += matriz[i][j]
    }
}
console.log(`A soma dos valores de matriz é ${soma}`)

//matriz[i][j]*2 multiplicando uma matriz

let matriz4 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
let soma1 = 0
for(let i = 0; i < matriz4.length; i++){
    for(let j = 0; j < matriz4[i].length; j++){
        console.log(matriz4[i][j])
        soma1+= matriz4[i][j]
    }
}

console.log(`A soma dos valores de matriz é ${soma1}`)