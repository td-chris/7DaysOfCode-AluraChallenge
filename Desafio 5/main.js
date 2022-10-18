alert("Monte sua lista de compra organizada aqui!!")

let playList = true;

//listas
let frutas = []
let laticinios = []
let congelados = []
let doces = []

function endList(){
  playList = false;
  showList()
}

function showList(){
  console.log("Teste:")
  let typesList = ['frutas', 'laticinios', 'congelados', 'doces']
  let listString = ''

  for (const item in typesList) {
    let typeString = `${typesList[item]}: `
    let list

    if(typesList[item] == 'frutas'){
      list = frutas
    }
    if(typesList[item] == 'laticinios'){
      list = laticinios
    }
    if(typesList[item] == 'congelados'){
      list = congelados
    }
    if(typesList[item] == 'doces'){
      list = doces
    }

    if(list && !!list.length){
      for (const product in list) {
        typeString = typeString + list[product] +', '
      }
    }

    listString = listString + typeString + '\n'
  }

  alert(
    `Lista de compras:\n
    ${listString}
  `)

}

while(playList){
  let choice = prompt("Você deseja adicionar uma comida a sua lista de compras? Sim ou Não")
  choice = choice.toLocaleLowerCase()

  if(choice == 'sim'){
    let product = prompt("Qual comida você deseja inserir?")
    let type = prompt("Em qual categoria essa comida se encaixa?\nOpções: frutas, laticínios, congelados e doces")
    type = type.toLocaleLowerCase()

    switch(type){
      case 'frutas':
        frutas.push(product);
        break;
      case 'laticínios':
        laticinios.push(product);
        break;
      case 'laticinios':
        laticinios.push(product);
        break;
      case 'congelados':
        congelados.push(product);
        break;
      case 'doces':
        doces.push(product);
        break;
      default:
        alert('Escolha digitada de forma errada! Encerrando a lista!')
        endList()
    }

  }else if(choice == 'não' || choice == 'nao'){
    alert('Muito bem! Vamos ver a lista de produtos organizada.')
    endList()
  }else{
    alert('Escolha digitada de forma errada! Encerrando a lista!')
    endList()
  }
}