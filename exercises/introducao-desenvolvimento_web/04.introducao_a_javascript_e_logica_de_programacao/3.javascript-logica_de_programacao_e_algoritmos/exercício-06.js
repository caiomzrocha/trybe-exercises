let n = 5;
let isPrime = true;

if (n === 1)
	isPrime = false;

for (let i = 2; i * i <= n && isPrime; i++)
	if (n % i === 0)
		isPrime = false;

console.log(isPrime);

