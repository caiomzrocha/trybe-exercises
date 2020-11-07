let body = document.querySelector('body');
let h1 = document.createElement('h1');
let main_content = document.createElement('div');
let center_content = document.createElement('div');
let paragraph = document.createElement('p');
let left_content = document.createElement('div');

main_content.classList.add('main-content');
center_content.classList.add('center-content');
left_content.classList.add('left-content');

body.appendChild(h1);
body.appendChild(main_content);
main_content.appendChild(center_content);
center_content.appendChild(paragraph);
main_content.appendChild(left_content);

paragraph.innerText = 'Conteúdo central.';

console.log(body);

