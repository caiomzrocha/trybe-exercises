let array = [2, 3, 2, 5, 8, 2, 3];

function moreTimes (array) {
  let numbers = {};
  let max = array[0];
  let indexOfMax = 0;

  for (index in array)
    if (numbers[ array[index] ])
      numbers[ array[index] ]++;
    else
      numbers[ array[index] ] = 1;

  for (key in numbers) {
    if (numbers[key] > max) {
      max = numbers[key];
      indexOfMax = key;
    }
  }

  return indexOfMax;

}

console.log(moreTimes(array));
