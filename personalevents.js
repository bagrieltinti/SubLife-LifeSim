// Definição dos eventos pessoais
const personalEvents = {
  bebê: [
  { message: '🧑‍🏫 Você está aprendendo a ler!', intellect: 5 },
	{ message: '🧸 Você ganhou um brinquedo novo!', intellect: 2, happiness: 5 },
  { message: '🤒 Você está doente.', health: -10, happiness: -5 },
  { message: '😢 Desmontaram seus LEGOS.', happiness: -5 },
  ],
  adolescente: [
	{ message: '📚 Você ganhou novos livros.', intellect: 6 },
  { message: '🚶‍♂️ Te chamaram para dar uma volta.', happiness: 5 },
  { message: '🎂 Você recebeu uma festa de aniversário surpresa!.', happiness: 9 },
  { message: '🎄 Você ganhou roupas no natal.', happiness: -5 },
  { message: '🤒 Você está doente.', health: -10, happiness: -5 },
  { message: '📕 Você ficou nervoso numa prova da escola.', happiness: -5 },
  { message: '📗 Você foi bem numa prova da escola.', happiness: 8 },
  ],
  adulto: [
  { message: '🎄 Você ganhou roupas no natal.', happiness: 5 },
  { message: '🤒 Você está doente.', health: -10, money: -5, happiness: -5 },
  { message: '🚶‍♂️ Te chamaram para dar uma volta.', happiness: 5 },
  { message: '💤 Você acordou no meio da noite.', health: -5},
  { message: '💸 Suas contas subiram o valor esse mês.', happiness: -5, money: -20},
  ],
  idoso: [
  { message: '👴 Você acordou com um pouco de dor hoje.', health: -3, money: -5 },
	{ message: '💤 Você acordou no meio da noite.', health: -5},
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
