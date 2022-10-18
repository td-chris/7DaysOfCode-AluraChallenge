alert("Bem vindo(a) ao jogo de adivinhação da alura!")
alert("O computador irá escolher um número de 1 a 10! Você tem 3 chances de acertar!")

let playGame = true;

function endgame(){
  alert("Obrigado por jogar!")
  playGame = false;
}

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

while(playGame == 1){
  let computerNumber = getRandomInt(1, 10);  
  let playerTries = 1;

  alert("O computador já selecionou um número!");
  while(playerTries <= 3){
    let playerGuess = prompt(`Qual você acha que é o número? \nChance ${playerTries}/3`);

    if(playerGuess == computerNumber){
      alert(`Você acertou! O número que o computador escolheu era: ${computerNumber}`);
      playerTries = 4;
    }else{
      alert("Você errou! Tente novamente!");
      playerTries++;
    }
  }

  let playAgain = prompt("Deseja jogar novamente? Digite 1 para Sim ou 2 para Não");

  if(playAgain == '1'){
    // Reset do computerNumber
    computerNumber = 0;
  }else if(playAgain == '2'){
    endgame();
  }else {
    alert("Opção inválida! O jogo será encerrado!")
    endgame();
  }
}