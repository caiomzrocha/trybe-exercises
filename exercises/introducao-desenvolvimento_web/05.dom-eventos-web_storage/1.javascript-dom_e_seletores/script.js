/*
   Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
   - document.getElementById()
   - document.getElementsByClassName()
   - document.getElementsByTagName()
   Crie uma função que modifique todo o texto da tag <p> para maiúsculo. 
   Crie uma função que exiba o conteúdo de todas as tags <p> no console.
 */

let paragraphs = document.getElementsByTagName('p');
let main_content = document.getElementsByClassName('main-content');
let center_content = document.getElementsByClassName('center-content');
let title = document.getElementsByClassName('title');

function setParagraphText() {
  paragraphs[0].innerText = "Em 2022 estarei empregado e recebendo um salário igual ou superior a R$ 3500,00.";
}

function setColorMainContent() {
  main_content[0].style.backgroundColor = 'rgb(76,164,109)';
} 

function setColorCenterContent() {
  center_content[0].style.backgroundColor = 'white';
}

function setTitle() {
  title[0].innerText = 'Exercício 5.1 - JavaScript';
}

setParagraphText();
setColorMainContent();
setColorCenterContent();
setTitle();
