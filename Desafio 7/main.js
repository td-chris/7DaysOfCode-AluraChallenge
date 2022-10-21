function soma(valor1 , valor2){
  return valor1 + valor2;
}

function subtracao(valor1, valor2){
  return valor1 - valor2;
}

function multiplicacao(valor1, valor2){
  return valor1 * valor2;
}

function divisao(valor1, valor2){
  return valor1 / valor2;
}

function pegarValores(operacao){
  valor1 = prompt("Digite o primeiro valor: ")
  valor1 = parseInt(valor1)

  valor2 = prompt("Digite o segundo valor: ")
  valor2 = parseInt(valor2)

  let resultado = false

  if(operacao == 'soma'){
    resultado = soma(valor1, valor2)
  }else if(operacao == 'subtração' || operacao == 'subtracao'){
    resultado = subtracao(valor1, valor2)
  }else if(operacao == 'multiplicação' || operacao == 'multiplicacao'){
    resultado = multiplicacao(valor1, valor2)
  }else if(operacao == 'divisão' || operacao == 'divisao'){
    resultado = divisao(valor1, valor2)
  }

  if(!!resultado){
    alert(`Resultado da operação ${operacao}: ${resultado}`)
  }
}

let operacao = ''
let valor1 = ''
let valor2 = ''

while(operacao != 'sair'){
  operacao = prompt("Qual operação você deseja realizar?\nDigite 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair'")
  operacao = operacao.toLocaleLowerCase()

  if(operacao != 'sair'){
    if(operacao == 'soma' || operacao == 'subtração' || operacao == 'subtracao' || operacao == 'multiplicação' || operacao == 'multiplicacao' || operacao == 'divisão' || operacao == 'divisao'){
      pegarValores(operacao)
    }else {
      alert("Operação inválida")
    }
  }
}

alert('Até a próxima!')