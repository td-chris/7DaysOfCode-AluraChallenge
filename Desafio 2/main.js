// criação do readLine do Node para inserir informações no console

const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

// perguntas
rl.question('Qual o seu nome?\n', (name) => {
  rl.question('Quantos anos você tem?\n', (age) => {
    rl.question('Qual linguagem de programação você esta estudando?\n', (language) => {
      console.log(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`)

      rl.question(`\nVocê gosta de estudar ${language}? Responda com o número 1 para SIM ou 2 para NÃO\n`, (option) => {
        if(option == '1'){
          console.log('Muito bom! Continue estudando e você terá muito sucesso.')
        }else if(option == '2'){
          console.log('Ahh que pena... Já tentou aprender outras linguagens?')
        }else {
          console.log('Opção inválida!')
        }

        rl.close()
      })
    })
  })
});


rl.on('close', function () {
  console.log('\nObrigado por responder !!!');
  process.exit(0);
});

