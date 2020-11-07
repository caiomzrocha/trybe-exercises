// adicao de elementos
let body = document.querySelector('body');
let h1 = document.createElement('h1');
let main_content = document.createElement('div');
let center_content = document.createElement('div');
let paragraph = document.createElement('p');
let left_content = document.createElement('div');
let right_content = document.createElement('div');
let img = document.createElement('img');
let count = document.createElement('ul');

main_content.classList.add('main-content');
center_content.classList.add('center-content');
left_content.classList.add('left-content');
right_content.classList.add('right-content');
img.classList.add('small-image');
h1.classList.add('title');

body.appendChild(h1);
body.appendChild(main_content);
main_content.appendChild(center_content);
center_content.appendChild(paragraph);
main_content.appendChild(left_content);
main_content.appendChild(right_content);
left_content.appendChild(img);
right_content.appendChild(count);

for (let i = 1; i <= 10; i += 1) {
  let li = document.createElement('li');
  li.innerText = i;
  count.appendChild(li);
}

for (let i = 1; i <= 3; i += 1) {
  let h3 = document.createElement('h3');
  h3.innerText = 'h3 - ' + i;
  main_content.appendChild(h3);
}

paragraph.innerText = 'Conteúdo central.';
img.setAttribute('src', 'https://picsum.photos/200');

// alteracao e remocao
let h3List = document.getElementsByTagName('h3');

for (let i = 0; i < 3; i += 1) {
  h3List[i].classList.add('description');
}

left_content.parentNode.removeChild(left_content);
right_content.style.marginRight = 'auto';

center_content.parentNode.style.backgroundColor = 'yellow';

console.log(body);

