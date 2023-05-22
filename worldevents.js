// Definição dos eventos de mundo
const worldEvents = [
  'Um youtuber viraliza fazendo vídeo de opinião sobre outro youtuber, putz.',
  'Influenciador é cancelado no twitter.',
  'Criador de conteúdo viraliza ao usar maquiagem feita por outra influenciadora: "Acho que isso não ficou certo".',
  'Música top 1 das rádios faz referência a bandas clássicas de rock. 🚶‍♂️🚶🚶🏻‍♀️🚶🏽',
];

// Função para obter um evento de mundo aleatório
function getRandomWorldEvent() {
  const randomIndex = Math.floor(Math.random() * worldEvents.length);
  return worldEvents[randomIndex];
}

// Atribuição direta no objeto global (window)
window.worldEventsModule = {
  getRandomWorldEvent
};
