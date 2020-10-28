let n = 5;
let line = '';

for (let i = 0; i < n; i++) {
	line = '';
	
	for (let j = 0; j <= i; j++)
		line += '*';

	console.log(line);
}

