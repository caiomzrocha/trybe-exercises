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

function upperCaseParagraphs() {
  for (p of paragraphs) {
    p.innerText = p.innerText.toUpperCase();
  }
}

function showParagraphs() {
  for (p of paragraphs) {
    console.log(p.innerText);
  }
}

setParagraphText();
setColorMainContent();
setColorCenterContent();
setTitle();
upperCaseParagraphs();
showParagraphs();

