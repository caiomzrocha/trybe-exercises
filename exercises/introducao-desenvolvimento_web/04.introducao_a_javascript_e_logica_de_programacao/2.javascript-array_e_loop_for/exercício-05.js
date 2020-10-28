let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++)
	if (max < numbers[i])
		max = numbers[i];

console.log(max);

