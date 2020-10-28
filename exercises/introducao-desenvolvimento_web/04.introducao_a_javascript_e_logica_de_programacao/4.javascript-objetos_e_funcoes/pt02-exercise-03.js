let array = [2, 4, 6, 7, 10, 0, -3];

function indexOfMinValue (numbers) {
  let min = numbers[0];
  let minIndex = 0;
  
  for (index in numbers)
    if (min > numbers[index]) {
      min = numbers[index];
      minIndex = index;
    }
  
  return minIndex;
}

console.log(indexOfMinValue(array));

