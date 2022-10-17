// Boas vindas

alert('Bem vindo ao jogo de escolha de carreira!\n Você receberá diversas perguntas, siga as instruções para responde-las!');
alert('Bom Jogo!!');

// Jogo

function endGame(msg){
  if(!!msg){
    alert(msg);
  }

  playGame = 0;
  alert('Obrigado por jogar e boa sorte com sua carreira!');
}

function fullStackQuestion(){
  let fullStack = prompt('Você quer se especializar na tecnologia escolhida ou se tornar Fullstack? Digite 1 para se especializar ou 2 para Fullstack.');
    
  if(fullStack == '1' || fullStack == '2'){
    alert('Muito bem. Esse é o caminho!')
  }else {
    endGame('Digito incorreto! O jogo será encerrado.')
  }
}

function moreTechsQuestion(){
  let moreTechs = '1';

  while(moreTechs == '1'){
    moreTechs = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 para Sim ou 2 para Não.');
      
    if(moreTechs == '1'){
      newTech = prompt('Qual?');
      alert(`${newTech} ... ótima escolha`)
    }else if(moreTechs == '2'){
      endGame()
    }else {
      moreTechs = '2'
      endGame('Digito incorreto! O jogo será encerrado.')
    }
  }
}

let playGame = 1;

while(playGame == 1){
  let tech = prompt('Você quer seguir para a área de Front-End ou Back-End? Digite 1 para Front-End ou 2 para Back-End.');
  
  if(tech == '1'){
    let frontTech = prompt('Você quer aprender React ou Vue? Digite 1 para React ou 2 para Vue.');
    
    if(frontTech == '1' || frontTech == '2'){
      fullStackQuestion()
      moreTechsQuestion()
    }else {
      endGame('Digito incorreto! O jogo será encerrado.')
    }
  }else if(tech == '2'){
    let backTech = prompt('Você quer aprender C# ou Java? Digite 1 para C# ou 2 para Java.');
    if(backTech == '1' || backTech == '2'){
      fullStackQuestion()
      moreTechsQuestion()
    }else {
      endGame('Digito incorreto! O jogo será encerrado.')
    }
  }else {
    endGame('Digito incorreto! O jogo será encerrado.')
  }
}
