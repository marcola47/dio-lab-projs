const prompt = require('prompt-sync')();
let wins, defeats, rank;

do {
  wins = prompt("Quantas vitórias você tem? (Somente números positivos) ");
} while ((/[a-zA-Z]/).test(wins) || parseInt(wins) < 0)
  
do {
  defeats = prompt("Quantas derrotas você tem? (Somente números positivos) ");
} while ((/[a-zA-Z]/).test(defeats) || parseInt(defeats) < 0)
  
const balance = getBalance(wins, defeats);

switch (true) {
  case wins <= 10: 
    rank = "Ferro"; 
    break;

  case wins <= 20: 
    rank = "Bronze"; 
    break;

  case wins <= 50: 
    rank = "Prata"; 
    break;

  case wins <= 80: 
    rank = "Ouro"; 
    break;

  case wins <= 90: 
    rank = "Diamante"; 
    break;

  case wins <= 100: 
    rank = "Lendário"; 
    break;

  default: 
    rank = "Imortal";
}

console.log(`O Herói tem de saldo de ${balance} está no nível de ${rank}`)

function getBalance(wins, defeats) {
  return parseInt(wins) - parseInt(defeats);
}
