// sem parametros
function impirimir(){
    console.log('Bem vindo Turma 25-N!')
}
impirimir();

function soma(){
    let resultado = 2 + 2
    console.log(`A soma é: ${resultado}`)
}
soma();

function dobro(){
    let resultadoDobro = 5 * 2
    console.log(`O dobro de 5 é ${resultadoDobro}`)
}
dobro();


// com parametros

function mensagem(nome){
    console.log(`Olá ${nome}`)
}
mensagem('eduardo');
mensagem('aphelios');
mensagem('morgan');

function soma(num1, num2){
    let soma = num1 + num2
    console.log(`A soma é ${soma}`)
}
soma(2,3);

function soma(num1, num2){
    let soma = num1 + num2
    return soma
}
console.log(soma(2,5));


let arrayNumeros = [7, 77, 777, 7777]
function divisao(array){
    let novoArray = []
    novoArray.push(array[0]/2)
    novoArray.push(array[array.length-1]/2)

    return novoArray
}
console.log(divisao(arrayNumeros));

//




