let n = 5;

function factorialSum (number) {
  let sum;

  if (number < 0)
    return -1;

  for (sum = 0; number > 0; number--)
    sum += number;

  return sum;
}

console.log(factorialSum(n));

