// 1
let personagens = [
  {
    nome: "Naruto",
    idade: 17,
    estilo: "ninjustu",
    jutsu: ["Rasegan", "clone"],
  },
  {
    nome: "sasuke",
    idade: 17,
    estilo: "ninjutsu",
    jutsu: ["kirin", "chidori"],
  },
  {
    nome: "obito",
    idade: 30,
    estilo: "ninjutsu",
    jutsu: ["kamui", "bola de fogo"],
  },
];

// 2
let adicionarPersonagem = (perso) => {
  personagens.push(perso);
  console.log(`o personagem ${perso.nome} foi adicionado`);
};
const personagem = {
  nome: "lee",
  idade: 17,
  estilo: "taijustu",
  jutsu: ["furacão da folha", "lotus primaria"],
};
adicionarPersonagem(personagem);

// 3
let buscarPersonagem = (nomeBuscado) => {
  function personagem(perso) {
    return perso.nome.toLowerCase() === nomeBuscado.toLowerCase();
  }
  const personagemEncontrado = personagens.find(personagem);
  if (personagemEncontrado) {
    return personagemEncontrado;
  } else {
    return `Personagem com nome "${nomeBuscado}" não encontrado `;
  }
}
buscarPersonagem('naruto')
