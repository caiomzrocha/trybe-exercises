let array = [2, 3, 6, 7, 10, 1];

function indexOfMaxValue (numbers) {
  let max = numbers[0];
  let maxIndex = 0;
  
  for (index in numbers)
    if (max < numbers[index]) {
      max = numbers[index];
      maxIndex = index;
    }
  
  return maxIndex;
}

console.log(indexOfMaxValue(array));

