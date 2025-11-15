let personagens = {
    nome : 'Frodo',
    classe :'Ladino',
    nivel :3,
    hp :10,
    habilidades: ['Coragem extraordinária','Resiliência espiritual','Discrição e furtividade'],
    historicoAcoes:
},
{
    nome : 'Gandalf',
    classe : 'Mago',
    nivel :20,
    hp :30,
    habilidades:['Poder mágico','Sabedoria e conhecimento profundo ','Liderança e estratégia'],
    historicoAcoes:
},
{
    nome:'Legolas',
    classe :'patrulheiro',
    nivel :12,
    hp :15,
    habilidades:['Arqueiro supremo','Agilidade e leveza élficas','Visão e audição aguçadas'],
    historicoAcoes:
},
{
    nome : 'Aragorn',
    classe :'Herói',
    nivel :20,
    hp :40,
    habilidades:['Espadachim excepcional','Rastreador e sobrevivência ','Liderança'],
    historicoAcoes:
}

// buscar personagens

let buscarPersonagem = (nomeBuscado) => {
    function personagens(perso){
        return perso.nome.toLowerCase() === nomeBuscado.toLowerCase();
    }
const personagemEncontrado = personagens.find(personagem);
    if (personagemEncontrado) {
      return personagemEncontrado;
    } else {
      return `Personagem com nome "${nomeBuscado}" não encontrado `;
    }
}
