const prompt = require('prompt-sync')();

let xp, rank;
const name = prompt("Qual seu nome? ")

do {
  xp = prompt("Qual seu nivel de XP? (Somente números positivos) ");
} while ((/[a-zA-Z]/).test(xp) || parseInt(xp) < 0)

switch (true) {
  case xp <= 1000: 
    rank = "Ferro"; 
    break;

  case xp <= 2000: 
    rank = "Bronze"; 
    break;

  case xp <= 5000: 
    rank = "Prata"; 
    break;

  case xp <= 7000: 
    rank = "Ouro"; 
    break;

  case xp <= 8000: 
    rank = "Platina"; 
    break;

  case xp <= 9000: 
    rank = "Ascendente"; 
    break;

  case xp <= 10000: 
    rank = "Imortal"; 
    break;

  default: 
    rank = "Radiante";
}

console.log(`O Herói de nome ${name} está no nível de ${rank}`);