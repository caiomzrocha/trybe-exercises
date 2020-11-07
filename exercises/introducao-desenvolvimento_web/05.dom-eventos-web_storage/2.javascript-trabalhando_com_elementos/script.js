let body = document.querySelector('body');
let h1 = document.createElement('h1');
let main_content = document.createElement('div');
let center_content = document.createElement('div');

main_content.classList.add('main-content');
center_content.classList.add('center-content');

body.appendChild(h1);
body.appendChild(main_content);
main_content.appendChild(center_content);

console.log(body);

