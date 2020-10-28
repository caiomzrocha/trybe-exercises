let word = 'arara';

function isPalindrome (word) {
  let j = word.length - 1;
  let palindrome = true;

  for (let i = 0; i < j && palindrome; i++) {
    palindrome = (word[i] === word[j]);
    j--;
  }
    
  return palindrome;
}

console.log(isPalindrome(word));

