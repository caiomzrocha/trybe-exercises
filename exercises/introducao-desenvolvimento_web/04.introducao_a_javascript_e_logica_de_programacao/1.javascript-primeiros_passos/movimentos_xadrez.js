let peca_xadrez = 'Rainha';
let peca = peca_xadrez.toLowerCase();

switch (peca) {
  case 'peão':
    console.log('Move apenas uma casa para frente, captura a peça adversária movendo-se uma casa para uma das diagonais a frente, se for o primeiro movimento desse peão é possível mover 1 ou duas casas a frente.');
    break;
  case 'cavalo':
    console.log('Move em formato de "L", duas casas na vertical e uma na horizontal ou duas casas na horizontal e uma na vertical.');
    break;
  case 'bispo':
    console.log('Move quantas casas quiser sempre na diagonal.');
    break;
  case 'torre':
    console.log('Move quantas casas quiser na horizontal ou na vertical.');
    break;
  case 'rainha':
  case 'dama':
    console.log('Move quantas casas quiser em qualquer direção.');
    break;
  case 'rei':
    console.log('Move uma casa em qualquer direção.');
}
