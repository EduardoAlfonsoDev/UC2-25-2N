let personagens = [
    {
        nome: 'Frodo',
        classe: 'Ladino',
        nivel: 3,
        hp: 10,
        habilidade: ['Coragem extraordinária', 'Resiliência espiritual', 'Discrição e furtividade'],
        historicoAcoes: [],
        atacar : function atacar(){
            console.log('atacou')
        },
        defender : function defender(){
            console.log('defendeu')
        },
        habilidadeEspecial : function habilidadeEspecial(){
            console.log('usou a habilidade especial')
        }
 
    }
    
];

// cadastro de personagens
function cadastroPersonagem(nome, classe, nivel, vida, habilidade){
    let personagem = {nome : nome, classe : classe, nivel : nivel, hp: vida, habilidade: habilidade}
    personagens.push(personagem)
    console.log('cadastrou o personagem', nome)
}

// excluir personagens
function exlusaoPersonagens() {
  personagens.pop();
}

function verificarStatus(personagem){

}
