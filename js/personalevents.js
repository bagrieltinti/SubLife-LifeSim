// Definição dos eventos pessoais
const personalEvents = {
  bebê: [
  { message: '🧑‍🏫 Você está aprendendo a ler!', intellect: 5 },
	{ message: '🧸 Você ganhou um brinquedo novo!', intellect: 2, happiness: 5 },
  { message: '🤒 Você está doente.', health: -10, happiness: -5 },
  { message: '😢 Desmontaram seus LEGOS.', happiness: -5 },
  { message: '🙁 Você tropeçou tentando andar.', happiness: -5 },
  { message: '😁 Colocaram seu desenho favorito.', happiness: 5 },
  { message: '😋 Você acordou animado.', happiness: 6 },
  { message: '🙁 Te mandaram ficar quieto.', happiness: -6 },
  { message: '🛴 Você quebrou um brinquedo sem querer.', happiness: -6 },
  { message: '👻 Você ficou com medo do escuro.', happiness: -6 },
  { message: '🩺 Te levaram no médico.', health: 10 },
  ],
  adolescente: [
	{ message: '📚 Você ganhou novos livros.', intellect: 5 },
  { message: '😋 Você acordou animado.', happiness: 6 },
  { message: '🩺 Te levaram no médico.', health: 10 },
  { message: '🚶‍♂️ Te chamaram para dar uma volta.', happiness: 5 },
  { message: '🎂 Você recebeu uma festa de aniversário surpresa!.', happiness: 9 },
  { message: '🎄 Você ganhou roupas no natal.', happiness: -5 },
  { message: '🎄 Você ganhou um presente muito legal de natal!', happiness: 6 },
  { message: '🤒 Você está doente.', health: -10, happiness: -5 },
  { message: '📕 Você ficou nervoso numa prova da escola.', happiness: -5 },
  { message: '📗 Você foi bem numa prova da escola.', happiness: 8 },
  { message: '🍫 Você ganhou chocolate!', happiness: 8 },
  { message: '👊 Você sofreu bullying na aula.', happiness: -8 },
  { message: '🤬 Você teve um dia ruim na aula.', happiness: -8 },
  { message: '📚 Você deixou matérias acumularem!', happiness: -8, health: -7 },
  { message: '👩‍🏫 Uma professora te elogiou na reunião de responsáveis.', happiness: 8 },
  { message: '📲 Você trocou de celular!', happiness: 8 },
  ],
  adulto: [
  { message: '🎄 Você ganhou roupas no natal.', happiness: 5 },
  { message: '🤒 Você está doente.', health: -10, money: -5, happiness: -5 },
  { message: '🚶‍♂️ Te chamaram para dar uma volta.', happiness: 5 },
  { message: '💤 Você acordou no meio da noite.', health: -3, happiness: -5},
  { message: '💸 Suas contas subiram o valor esse mês.', happiness: -5, money: -20},
  { message: '🍫 Você ganhou chocolate!', happiness: 8 },
  ],
  idoso: [
  { message: '👴 Você acordou com um pouco de dor hoje.', health: -3, money: -5 },
  { message: '🎄 Você ganhou roupas no natal.', happiness: 5 },
  { message: '😱 Você tropeçou em casa!', happiness: -8, heatlh: -5 },
  { message: '🍫 Você ganhou chocolate!', happiness: 8 },
	{ message: '💤 Você acordou no meio da noite.', health: -3, happiness: -5 },
  { message: '🤒 Você está doente.', health: -15, money: -5, happiness: -5 },
  { message: '🚶‍♂️ Te chamaram para dar uma volta.', happiness: 5 },
  { message: '💸 Suas contas subiram o valor esse mês.', happiness: -5, money: -20},
  ]
};

// Função para obter um evento pessoal aleatório com base na idade do personagem
function getRandomPersonalEvent(idade) {
  let events;

  if (idade >= 1 && idade <= 8) {
    events = personalEvents.bebê;
  } else if (idade >= 13 && idade <= 17) {
    events = personalEvents.adolescente;
  } else if (idade >= 18 && idade <= 60) {
    events = personalEvents.adulto;
  } else if (idade > 61) {
    events = personalEvents.idoso;
  } else {
    events = [];
  }

  const randomIndex = Math.floor(Math.random() * events.length);
  return events[randomIndex];
}

// Atribuição direta no objeto global (window)
window.personalEventsModule = {
  getRandomPersonalEvent
};
