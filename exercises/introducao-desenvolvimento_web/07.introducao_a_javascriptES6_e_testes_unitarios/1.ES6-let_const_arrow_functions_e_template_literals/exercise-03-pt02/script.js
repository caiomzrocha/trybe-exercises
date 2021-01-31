const button = document.getElementById('btn');
const display = document.getElementById('display');

let counter = 0;

button.addEventListener('click', () => {
  counter += 1;
  display.innerText = counter;
})
