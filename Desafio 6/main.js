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
  alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`)
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
    if(!!frutas.length || !!laticinios.length || !!congelados.length || !!doces.length){
      let remove = prompt("Você deseja retirar uma comida da sua lista de compras? Sim ou Não")
      remove = remove.toLocaleLowerCase()

      if(remove == 'sim'){
        let item = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n\nQual produto você deseja remover?`);
        
        if(frutas.indexOf(item) != -1){
          frutas.splice(frutas.indexOf(item), 1);
          alert(`O item ${item} foi removido com sucesso!`)
        } else if(laticinios.indexOf(item) != -1){
          laticinios.splice(laticinios.indexOf(item), 1);
          alert(`O item ${item} foi removido com sucesso!`)
        } else if (doces.indexOf(item) != -1){
          doces.splice(doces.indexOf(item), 1);
          alert(`O item ${item} foi removido com sucesso!`)
        } else if (congelados.indexOf(item) != -1){
          congelados.splice(congelados.indexOf(item), 1);
          alert(`O item ${item} foi removido com sucesso!`)
        } else {
          alert(`Não foi possível encontrar o item dentro da lista!`)
        }
      }else if(remove == 'não' || remove == 'nao') {
        alert('Muito bem! Vamos ver a lista de produtos organizada.')
        endList()
      }else {
        alert('Escolha digitada de forma errada! Encerrando a lista!')
        endList()
      }
    }else {
      alert('Muito bem! Vamos ver a lista de produtos organizada.')
      endList()
    }
  }else{
    alert('Escolha digitada de forma errada! Encerrando a lista!')
    endList()
  }
}