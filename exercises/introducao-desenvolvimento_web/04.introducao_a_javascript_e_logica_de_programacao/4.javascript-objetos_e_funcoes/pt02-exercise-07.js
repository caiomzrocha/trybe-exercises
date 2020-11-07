let word = 'trybe';
let ending = 'be';

function isEnding (word, ending) {
  let result = true;

  for (let i = 0; i < ending.length && result; i++ )
    result = word[word.length - i - 1] === ending[ending.length - i - 1];

  return result;
}

console.log(isEnding(word, ending));

