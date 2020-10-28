let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName (names) {
  let numberOfCharacters = 0;
  let bigger = '';

  for (index in names)
    if (names[index].length > bigger.length)
      bigger = names[index];  

  return bigger;
}

console.log(biggestName(names));

