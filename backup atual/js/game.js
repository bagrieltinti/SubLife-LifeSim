// Definição das nacionalidades
const nacionalidades = ["Brasileiro", "Americano", "Japonês", "Italiano", "Alemão", "Francês", "Espanhol", "Russo", "Chinês", "Mexicano", "Canadense", "Indiano", "Coreano", "Argentino", "Norueguês", "Sueco", "Holandês", "Grego", "Polonês", "Turco"];

// Função para gerar um número aleatório dentro de um intervalo
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Função para gerar um nome aleatório baseado na nacionalidade
function generateRandomName(nacionalidade) {
  let names;
  let surnames;

  switch (nacionalidade) {
    case "Brasileiro":
      names = ["João", "Pedro", "Lucas", "Maria", "Ana", "Isabela"];
      surnames = ["Silva", "Souza", "Oliveira", "Santos"];
      break;
    case "Americano":
      names = ["John", "Michael", "Emily", "Emma", "Olivia", "Sophia"];
      surnames = ["Johnson", "Smith", "Brown", "Davis"];
      break;
    case "Japonês":
      names = ["Hiroshi", "Yuki", "Ryota", "Sakura", "Miyu", "Hina"];
      surnames = ["Sato", "Suzuki", "Takahashi", "Tanaka"];
      break;
    case "Italiano":
      names = ["Marco", "Giuseppe", "Luca", "Sofia", "Giulia", "Alessia"];
      surnames = ["Russo", "Ferrari", "Romano", "Esposito"];
      break;
    case "Alemão":
      names = ["Max", "Lukas", "Elias", "Hannah", "Sophie", "Mia"];
      surnames = ["Schmidt", "Müller", "Schneider", "Fischer"];
      break;
    case "Francês":
      names = ["Louis", "Pierre", "Gabriel", "Emma", "Camille", "Chloé"];
      surnames = ["Dubois", "Lefevre", "Martin", "Thomas"];
      break;
    case "Espanhol":
      names = ["Alejandro", "Javier", "Carlos", "Sofía", "Isabella", "Valeria"];
      surnames = ["García", "Rodríguez", "Martínez", "López"];
      break;
    case "Russo":
      names = ["Ivan", "Dmitry", "Nikolai", "Anastasia", "Sofia", "Maria"];
      surnames = ["Ivanov", "Smirnov", "Kuznetsov", "Popova"];
      break;
    case "Chinês":
      names = ["Wei", "Jian", "Xia", "Yuan", "Ling", "Mei"];
      surnames = ["Li", "Wang", "Zhang", "Liu"];
      break;
    case "Mexicano":
      names = ["Luis", "Carlos", "Javier", "Valentina", "Fernanda", "Sofía"];
      surnames = ["García", "Hernández", "López", "González"];
      break;
    case "Canadense":
      names = ["William", "James", "Liam", "Olivia", "Emma", "Sophia"];
      surnames = ["Smith", "Brown", "Johnson", "Taylor"];
      break;
    case "Indian":
      names = ["Aarav", "Arjun", "Aaradhya", "Anaya", "Aanya", "Ishaan"];
      surnames = ["Patel", "Sharma", "Khan", "Verma"];
      break;
    case "Coreano":
      names = ["Min-Joon", "Soo-Min", "Ji-Hoon", "Seo-Yeon", "Ji-Woo", "Hae-Won"];
      surnames = ["Kim", "Lee", "Park", "Choi"];
      break;
    case "Argentino":
      names = ["Matías", "Santiago", "Sofía", "Valentina", "Isabella", "Luz"];
      surnames = ["González", "Rodríguez", "Fernández", "López"];
      break;
    case "Norueguês":
      names = ["Liam", "Oscar", "Emilie", "Mia", "Nora", "Sara"];
      surnames = ["Johansen", "Hansen", "Andersen", "Olsen"];
      break;
    case "Sueco":
      names = ["Erik", "Liam", "Oliver", "Elsa", "Ella", "Alicia"];
      surnames = ["Johansson", "Larsson", "Andersson", "Svensson"];
      break;
    case "Holandês":
      names = ["Daan", "Lucas", "Emma", "Sophie", "Anna", "Lisa"];
      surnames = ["de Jong", "Jansen", "Bakker", "Smits"];
      break;
    case "Grego":
      names = ["Nikos", "Dimitris", "Alexandros", "Maria", "Eleni", "Katerina"];
      surnames = ["Papadopoulos", "Kouros", "Georgiou", "Papadaki"];
      break;
    case "Polonês":
      names = ["Jakub", "Filip", "Kacper", "Zuzanna", "Julia", "Maja"];
      surnames = ["Nowak", "Kowalski", "Wójcik", "Mazur"];
      break;
    case "Turco":
      names = ["Ahmet", "Mehmet", "Mustafa", "Elif", "Zeynep", "Ayşe"];
      surnames = ["Yılmaz", "Demir", "Çelik", "Kaya"];
      break;
    default:
      names = ["John", "Jane", "David", "Emma", "Lily"];
      surnames = ["Smith", "Doe", "Johnson", "Brown"];
      break;
  }  

  const randomNameIndex = getRandomNumber(0, names.length - 1);
  const randomSurnameIndex = getRandomNumber(0, surnames.length - 1);

  const firstName = names[randomNameIndex];
  const surname = surnames[randomSurnameIndex];

  return firstName + " " + surname;
  
}



// Classe do jogo
class Game {
  constructor() {
    this.nextYearBtn = document.getElementById("nextYearBtn");
    this.nextYearBtn.addEventListener("click", this.nextYear.bind(this));
    this.yearButtonSound = document.getElementById("yearButtonSound");
    this.generalButtons = document.getElementById("generalButtons");
    this.resetBtn = document.getElementById("resetBtn");
    this.resetBtn.addEventListener("click", this.showResetMenu.bind(this));
    this.textbox = document.getElementById("textbox");
    this.actionBtn = document.getElementById("actionBtn");
    this.container = document.getElementById("container");
    this.gameScreen = document.getElementById("game-screen");
    this.infoBtn = document.getElementById("infoBtn");
    this.infoBtn.addEventListener("click", this.showCharacterInfo.bind(this));
    this.actionBtn.addEventListener(
      "click",
      this.openActivitiesMenu.bind(this),
    );
    this.container = document.getElementById("container");
    this.universityBtn = document.getElementById("universityBtn");
    this.universityBtn.addEventListener(
      "click",
    this.openUniversityMenu.bind(this)

    );

    // Criação do personagem
    const randomNacionalidadeIndex = getRandomNumber(
      0,
      nacionalidades.length - 1
    );
    this.personagem = {
      nome: generateRandomName(nacionalidades[randomNacionalidadeIndex]),
      sobrenome: "", 
      nacionalidade: nacionalidades[randomNacionalidadeIndex],
      idade: 0,
      saude: getRandomNumber(1, 100),
      intelecto: getRandomNumber(1, 100),
      dinheiro: getRandomNumber(0, 60),
      felicidade: getRandomNumber(1, 100),
      aparencia: getRandomNumber(1, 100),
    };

    this.nameElement = document.getElementById("name");
    this.ageElement = document.getElementById("age");
    this.moneyElement = document.getElementById("money");
    this.healthElement = document.getElementById("health");
    this.intellectElement = document.getElementById("intellect");
    this.happinessElement = document.getElementById("happiness");
    this.appearanceElement = document.getElementById("appearance");

    this.infoMenu = document.getElementById("info-menu");
    this.infoName = document.getElementById("info-name");
    this.infoNationality = document.getElementById("info-nationality");
    this.infoAge = document.getElementById("info-age");
    this.infoUniversity = document.getElementById("info-university");

    this.initializeGame();
  }
  
  showResetMenu() {
    this.generalButtons.currentTime = 0; 
    this.generalButtons.play();

    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
  
    const menu = document.createElement("div");
    menu.style.backgroundColor = "#fff";
    menu.style.padding = "20px";
    menu.style.borderRadius = "5px";
    menu.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    menu.style.textAlign = "left";
  
    const title = document.createElement("h2");
    title.textContent = "🚼 Nova vida?";
    menu.appendChild(title);
  
    const resetButton = document.createElement("button");
    resetButton.textContent = "🌞 Começar outra vida";
    resetButton.addEventListener("click", this.restartGame.bind(this));
    menu.appendChild(resetButton);
  
    const closeButton = document.createElement("button");
    closeButton.textContent = "❌";
    closeButton.addEventListener("click", this.closeResetMenu.bind(this));
    menu.appendChild(closeButton);
  
    overlay.appendChild(menu);
    document.body.appendChild(overlay);
    this.container.appendChild(overlay);
  }

  restartGame() {
    window.location.reload(); // Reload the page to restart the game
    const audio = new Audio("/audio/introNotify.wav");
      audio.play()
  }

  closeResetMenu() {
    const overlay = document.getElementById("overlay");
    overlay.remove();
  }  

  showCharacterInfo() {
    this.generalButtons.currentTime = 0; 
    this.generalButtons.play();
    
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";

    const menu = document.createElement("div");
    menu.style.backgroundColor = "#fff";
    menu.style.padding = "20px";
    menu.style.borderRadius = "5px";
    menu.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    menu.style.textAlign = "left";

    const title = document.createElement("h2");
    title.textContent = "🤷 Informações";
    menu.appendChild(title);

    const name = document.createElement("p");
    name.textContent = "🧎 Nome: " + this.personagem.nome + " " + this.personagem.sobrenome;
    menu.appendChild(name);

    const nationality = document.createElement("p");
    nationality.textContent = "🗺️ Nacionalidade: " + this.personagem.nacionalidade;
    menu.appendChild(nationality);

    const age = document.createElement("p");
    age.textContent = "🎂 Idade: " + this.personagem.idade;
    menu.appendChild(age);

    const university = document.createElement("p");
    university.textContent = "🎓 Faculdade: " + this.getUniversityStatus();
    menu.appendChild(university);

    const closeButton = document.createElement("button");
    closeButton.textContent = "❌";
    closeButton.addEventListener("click", this.closeCharacterInfo.bind(this));
    menu.appendChild(closeButton);

    overlay.appendChild(menu);
    document.body.appendChild(overlay);
    this.container.appendChild(overlay);
  }

  getUniversityStatus() {
    if (!this.personagem.course) {
      return "Nenhum";
    } else if (!this.personagem.course.completed) {
      return "Estudando " + this.personagem.course.name;
    } else {
      return this.personagem.course.name;
    }
  }

  closeCharacterInfo() {
    const overlay = document.getElementById("overlay");
    overlay.remove();
  }


  showDeathScreen() {
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    const audio = new Audio("/audio/death.wav");
    audio.play()
    const deathScreen = document.createElement("div");
    deathScreen.style.backgroundColor = "#fff";
    deathScreen.style.padding = "20px";
    deathScreen.style.borderRadius = "5px";
    deathScreen.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    deathScreen.style.textAlign = "center";

    const ripTitle = document.createElement("h1");
    ripTitle.textContent = "💀 RIP 💀";
    deathScreen.appendChild(ripTitle);

    const deathMessage = document.createElement("p");
    deathMessage.textContent = `${this.personagem.nome} morreu com ${this.personagem.idade} anos. RIP.`;
    deathScreen.appendChild(deathMessage);

    const gameTextBox = document.createElement("div");
    gameTextBox.id = "textbox";
    gameTextBox.style.overflow = "auto";
    gameTextBox.style.maxHeight = "300px"; // Adjust the maximum height as needed

    // Copy all the existing game text to the death screen
    const currentText = this.textbox.innerHTML;
    gameTextBox.innerHTML = currentText;

    deathScreen.appendChild(gameTextBox);

    const newLifeButton = document.createElement("button");
    newLifeButton.textContent = "🔆 Nova Vida";
    newLifeButton.addEventListener("click", this.restartGame.bind(this));
    deathScreen.appendChild(newLifeButton);

    overlay.appendChild(deathScreen);
    document.body.appendChild(overlay);
  }

  updateText(text, type) {
    const textBox = document.getElementById("textbox");
    textBox.innerHTML = `<p class="${type}">${text}</p>`;
  }

  openUniversityMenu() {
    this.generalButtons.currentTime = 0; 
    this.generalButtons.play();

    if (this.personagem.idade < 18) {
      this.updateText("Você é muito novo para entrar na faculdade.");
      return;
    }

    const courses = [
      { name: "🩺 Medicina", yearsToComplete: 6, requirement: 40 },
      { name: "✍️ Inglês", yearsToComplete: 4, requirement: 30 },
      { name: "➗ Matemática", yearsToComplete: 4, requirement: 40 },
    ];

    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";

    const menu = document.createElement("div");
    menu.style.backgroundColor = "#fff";
    menu.style.padding = "20px";
    menu.style.borderRadius = "5px";
    menu.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    menu.style.textAlign = "center";

    const title = document.createElement("h2");
    title.textContent = "🎓 Faculdade";
    menu.appendChild(title);    

    courses.forEach((course) => {
      const button = document.createElement("button");
      button.textContent = course.name;
      button.style.margin = "5px";
      button.addEventListener("click", () => this.startCourse(course));
      menu.appendChild(button);
    });

    const closeButton = document.createElement("button");
    closeButton.textContent = "❌";
    closeButton.style.margin = "5px";
    closeButton.addEventListener("click", this.closeUniversityMenu.bind(this));
    menu.appendChild(closeButton);

    overlay.appendChild(menu);
    document.body.appendChild(overlay);
    this.container.appendChild(overlay);
  }

  closeUniversityMenu() {
    const overlay = document.getElementById("overlay");
    overlay.remove();
  }

  startCourse(course) {
    if (this.personagem.intelecto < course.requirement) {
      this.updateText("Você não tem os requisitos, tente novamente em breve.");
      this.closeUniversityMenu();
    } else {
      this.personagem.course = course;
      this.updateText(`Você começou a estudar ${course.name}.`);
      this.universityBtn.style.display = "none";
      this.closeUniversityMenu();
    }
  }

  completeCourse() {
    if (this.personagem.course) {
      this.personagem.course.completed = true;
    }
  }

  checkDeath() {
    if (this.personagem.saude <= 0) {
      this.showDeathScreen();
      this.nextYearBtn.style.display = "none";
      this.actionBtn.style.display = "none";
      this.universityBtn.style.display = "none";

    } else if (this.personagem.idade >= 88 && this.personagem.idade < 96) {
      const chanceOfDeath = Math.random();
      if (chanceOfDeath <= 0.09) {
        this.updateText("👴 Você morreu pacificamente em sua cama.");
        this.nextYearBtn.style.display = "none";
        this.actionBtn.style.display = "none";
        this.universityBtn.style.display = "none";
        this.showDeathScreen();
      }
    } else if (this.personagem.idade >= 96) {
      const chanceOfDeath = Math.random();
      if (chanceOfDeath <= 0.6) {
        this.updateText("👴 Você morreu pacificamente em sua cama.");
        this.showDeathScreen();
        this.nextYearBtn.style.display = "none";
        this.actionBtn.style.display = "none";
        this.universityBtn.style.display = "none";

      }
    }
  }

  restartGame() {
    location.reload();
  }

  openActivitiesMenu() {
    const activities = [];
    this.generalButtons.currentTime = 0; 
    this.generalButtons.play();

    if (this.personagem.idade >= 7) {
      activities.push({
        name: "🏃 Sair para correr",
        effect: { health: 5 },
        message: "🏃 Você saiu para correr",
      });

    }

    if (this.personagem.idade >= 5) {
      activities.push({
        name: "📚 Ler um livro",
        effect: { intellect: 4 },
        message: "📚 Você leu um livro",
      });
    }

    if (this.personagem.idade >= 18) {
      activities.push({
        name: "💊 Ir ao médico (-50 dinheiro)",
        effect: { health: 10, money: -50 },
        message: "💊 Você foi ao médico",
      });
    }

    if (this.personagem.idade >= 18) {
      activities.push({
        name: "✂ Cortar cabelo (-20 dinheiro)",
        effect: { appearance: 5, money: -20 },
        message: "✂ Você cortou o cabelo",
      });
    }

    if (this.personagem.idade >= 16) {
      activities.push({
        name: "👨‍💼 Fazer serviço autônomo",
        effect: { money: 6 },
        message: "👨‍💼 Você fez alguns serviços para amigos e conhecidos",
      });
    }

  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";

  const menu = document.createElement("div");
  menu.style.backgroundColor = "#fff";
  menu.style.padding = "20px";
  menu.style.borderRadius = "5px";
  menu.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  menu.style.textAlign = "center";

  const title = document.createElement("h2");
  title.textContent = "🚀 Ações";
  menu.appendChild(title);

  activities.forEach((activity) => {
    const button = document.createElement("button");
    button.textContent = activity.name;
    button.style.margin = "5px";

    if (activity.name === "Universidade") {
      button.addEventListener("click", () => this.startUniversity());
    } else {
      button.addEventListener("click", () => this.performActivity(activity));
    }

    menu.appendChild(button);
  });

    // Criar botão "Fechar"
    const closeButton = document.createElement("button");
    closeButton.textContent = "❌";
    closeButton.style.margin = "5px";
    closeButton.addEventListener("click", this.closeActivitiesMenu.bind(this));
    menu.appendChild(closeButton);

    overlay.appendChild(menu);
    document.body.appendChild(overlay);
  }

  closeActivitiesMenu() {
    const overlay = document.getElementById("overlay");
    overlay.remove();
  }

  performActivity(activity) {
    this.updateText(activity.message);

    // Aplica os efeitos da atividade nos status do personagem
    if (activity.effect.health) {
      this.personagem.saude += activity.effect.health;
      this.healthElement.classList.add("changed"); // Add the "changed" class
    }
    if (activity.effect.intellect) {
      this.personagem.intelecto += activity.effect.intellect;
      this.intellectElement.classList.add("changed"); // Add the "changed" class
    }
    if (activity.effect.money) {
      this.personagem.dinheiro += activity.effect.money;
      this.moneyElement.classList.add("changed"); // Add the "changed" class
    }

    // Atualiza as informações do personagem na parte de cima da tela novamente
    this.updateCharacterInfo();

    // Fecha o menu de atividades
    const overlay = document.getElementById("overlay");
    overlay.remove();
  }

  // Inicialização do jogo
  initializeGame() {
    const audio = new Audio("/audio/introNotify.wav");
    audio.play()

    this.updateText(
      `👶 Seu nome é ${this.personagem.nome}, você é ${this.personagem.nacionalidade}.`
    );
    this.updateText(`Você tem ${this.personagem.idade} anos de idade`);

    const favicons = [
      "/img/favicon.png",
      "/img/favicon2.png",
      "/img/favicon3.png",
      "/img/favicon4.png",
    ];

    const randomFaviconIndex = getRandomNumber(0, favicons.length - 1);
  const faviconUrl = favicons[randomFaviconIndex];
  setFavicon(faviconUrl);

    // Atualiza as informações do personagem na parte de cima da tela
    this.updateCharacterInfo();
  }

  // Função para atualizar as informações do personagem na parte de cima da tela
  updateCharacterInfo() {
    this.nameElement.textContent = `Nome: ${this.personagem.nome}`;
    this.ageElement.textContent = `🧎 Idade: ${this.personagem.idade}`;
    this.moneyElement.textContent = `💰 Dinheiro: ${this.personagem.dinheiro}`;

    this.healthElement.textContent = `❤️ Saúde: ${Math.max(0, Math.min(100, this.personagem.saude))}`;
    const healthBar = document.getElementById("health-bar");
    healthBar.value = Math.max(0, Math.min(100, this.personagem.saude));

    this.intellectElement.textContent = `🧠 Intelecto: ${Math.max(0, Math.min(100, this.personagem.intelecto))}`;
    const intellectBar = document.getElementById("intellect-bar");
    intellectBar.value = Math.max(0, Math.min(100, this.personagem.intelecto));

    this.happinessElement.textContent = `😄 Felicidade: ${Math.max(0, Math.min(100, this.personagem.felicidade))}`;
    const happinessBar = document.getElementById("happiness-bar");
    happinessBar.value = Math.max(0, Math.min(100, this.personagem.felicidade));

    this.appearanceElement.textContent = `👗 Aparência: ${Math.max(0, Math.min(100, this.personagem.aparencia))}`;
    const appearanceBar = document.getElementById("appearance-bar");
    appearanceBar.value = Math.max(0, Math.min(100, this.personagem.aparencia));

    // Remove the "changed" class after a short delay to trigger the animation
    setTimeout(() => {
      this.nameElement.classList.remove("changed");
      this.ageElement.classList.remove("changed");
      this.moneyElement.classList.remove("changed");
      this.healthElement.classList.remove("changed");
      this.intellectElement.classList.remove("changed");
      this.happinessElement.classList.remove("changed");
      this.appearanceElement.classList.remove("changed");
    }, 1000);
  }

  // Função para atualizar o texto no box de textos
  updateText(text) {
    this.textbox.innerHTML += `<p>${text}</p>`;
    this.textbox.scrollTop = this.textbox.scrollHeight;
  }

  // Função para avançar um ano
  nextYear() {
    this.yearButtonSound.currentTime = 0; 
    this.yearButtonSound.play();
    
    this.personagem.idade++;
    this.updateText(`Você tem ${this.personagem.idade} anos de idade`);

    if (this.personagem.idade === 17) {
      this.updateText("🎒 Você se formou na escola!");
      const audio = new Audio("/audio/faculnotify.wav");
      audio.play();
    }

    if (this.personagem.idade === 18) {
      this.universityBtn.style.display = "inline-block"; // Display the "University" button
    }

    if (this.personagem.course) {
      this.personagem.course.yearsToComplete--;

      if (this.personagem.course.yearsToComplete === 0) {
        this.updateText("🎓 Você se formou na faculdade!");
        const audio = new Audio("/audio/faculnotify.wav");
        audio.play();
        this.completeCourse();
        this.personagem.intelecto += 20;
      }
    }

    // Atualiza as informações do personagem na parte de cima da tela
    this.updateCharacterInfo();

    // Verifica se um evento pessoal ocorre aleatoriamente com base na idade do personagem
    if (Math.random() < 0.8) {
      // Chance de 20%
      if (window.personalEventsModule) {
        const personalEvent =
          window.personalEventsModule.getRandomPersonalEvent(
            this.personagem.idade
          );
        if (personalEvent) {
          this.updateText(`${personalEvent.message}`);

          // Aplica os efeitos do evento nos status do personagem
          if (personalEvent.health) {
            this.personagem.saude += personalEvent.health;
          }
          if (personalEvent.intellect) {
            this.personagem.intelecto += personalEvent.intellect;
          }
          if (personalEvent.money) {
            this.personagem.dinheiro += personalEvent.money;
          }
          if (personalEvent.appearance) {
            this.personagem.aparencia += personalEvent.appearance;
          }
          if (personalEvent.happiness) {
            this.personagem.felicidade += personalEvent.happiness;
          }
          // Atualiza as informações do personagem na parte de cima da tela novamente
          this.updateCharacterInfo();
        }
      } else {
        console.error("Erro ao carregar o arquivo de eventos pessoais.");
      }
    }

    // Verifica se um evento de mundo ocorre aleatoriamente
    if (Math.random() < 0.5) {
      // Chance de 20%
      if (window.worldEventsModule) {
        const worldEvent = window.worldEventsModule.getRandomWorldEvent();
        this.updateText(`🌎 ${worldEvent}`);
      } else {
        console.error("Erro ao carregar o arquivo de eventos de mundo.");
      }
    }
    this.checkDeath();
  }
}

function setFavicon(url) {
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = url;
  document.head.appendChild(link);
}

// Instanciação do jogo
const game = new Game();
