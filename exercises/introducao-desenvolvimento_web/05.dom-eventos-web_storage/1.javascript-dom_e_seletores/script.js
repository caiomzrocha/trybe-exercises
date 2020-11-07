/*
   Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
   - document.getElementById()
   - document.getElementsByClassName()
   - document.getElementsByTagName()
   Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) body > div > div > p - p - p
   Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)). class ("main-content")
   Crie uma função que mude a cor do quadrado vermelho para branco. class ("center-content")
   Crie uma função que corrija o texto da tag <h1>. class ("title")
   Crie uma função que modifique todo o texto da tag <p> para maiúsculo. 
   Crie uma função que exiba o conteúdo de todas as tags <p> no console.
 */

let paragraphs = document.getElementsByTagName('p');

function changeParagraphText() {
  paragraphs[0].innerText = "Em 2022 estarei empregado e recebendo um salário igual ou superior a R$ 3500,00.";
}

changeParagraphText();
