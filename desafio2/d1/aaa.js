
// buscar personagens 
// criado uma função que percorre o array de personagens ate encontrar o personagem correspondente 
let buscarPersonagem = (nomeBuscado) => {
  function personagens1(perso) {
    return perso.nome.toLowerCase() === nomeBuscado.toLowerCase();
  }
  const personagemEncontrado = personagens.find(personagens1);
  if (personagemEncontrado) {
    return personagemEncontrado;
  } else {
    return `Personagem com nome "${nomeBuscado}" não encontrado `;
  }
};
console.log(buscarPersonagem("frodo"));

// deletar personagens
//criado uma função que pega o nome do personagem e procura se ele existe ou não, caso ache ele é deletado
function deletarPersonagens(nomeBuscado) {
  const personagemEncontrado = personagens.find(perso => perso.nome.toLowerCase() === nomeBuscado.toLowerCase());
  if (personagemEncontrado) {
    return `O personagem ${personagemEncontrado.nome} foi deletado`, personagens.splice(0,1);
  } else {
    return `Personagem com nome "${nomeBuscado}" não encontrado`;
  }
}
console.log(deletarPersonagens("frodo"));


// listar personagens
// função de listar personagens usando for
function listarPersonagens() {
  for (let i = 0; i < personagens.length; i++) {
    console.log(personagens[i]);
  }
}
listarPersonagens();


