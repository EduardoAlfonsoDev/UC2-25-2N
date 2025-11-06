let soma = function () {
  return 2 + 2;
};
console.log(`A soma é ${soma(2, 2)}`);
/*
const soma = function(){
    const num1 = 5
    const num2 = 6
    const resultado = num1 + num2
    console.log(`a soma é ${resultado}`)

}
soma()
*/

let dobro = () => {
  return 5 * 2;
};
console.log(`o dobro será ${dobro(5, 2)}`);

/*
const dobro = () => {
    let resultadoDobro = 5 * 2
    console.log(`o dobro será ${resultadoDobro}`)
}
dobro();
*/

const determinaMonstro = (
  temPeleGelada,
  transformaComLuaCheia,
  brilhaAoSol,
  temSedeDeSangue
) => {
    temPeleGelada = true
    transformaComLuaCheia = true
    brilhaAoSol = true
    temSedeDeSangue = true
  if (temPeleGelada && brilhaAoSol && temSedeDeSangue) {
    console.log("voce é um vampiro");
  } else if (transformaComLuaCheia) {
    console.log("voce é um lobisomen");
  }
  else
  console.log('voce é um humano')

return 
};
console.log(determinaMonstro);
