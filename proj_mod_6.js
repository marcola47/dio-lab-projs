const prompt = require('prompt-sync')();

class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attackType = "";

    switch (this.type) {
      case "guerreiro": 
        attackType = "espada";
        break;

      case "mago":
        attackType = "magia";
        break;

      case "monge":
        attackType = "artes marciais";
        break;

      default:
        attackType = "shuriken";
    }

    console.log(`O tipo ${this.type} atacou usando ${attackType}`)
  }

}

const types = ["guerreiro", "mago", "monge", "ninja"];
const name = prompt("Qual seu nome? ");
let age, type;

do {
  age = prompt("Quantos anos você tem? (Somente números positivos) ");
} while ((/[a-zA-Z]/).test(age) || parseInt(age) < 0)

do {
  type = prompt("Qual sua classe? (Guerreiro, Mago, Monge ou Ninja) ");
} while (!types.includes(type.toLowerCase()))

const hero = new Hero(name, age, type);
hero.attack();