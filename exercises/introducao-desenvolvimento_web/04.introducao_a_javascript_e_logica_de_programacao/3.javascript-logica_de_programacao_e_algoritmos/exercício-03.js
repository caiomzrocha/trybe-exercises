let n = 5;
let line = '';

for (let i = 0; i < n; i++) {
	line = '';
	
	for (let j = 0; j < n; j++) {
		if (j < n - i - 1)
			line += ' ';
		else
			line += '*';
	}

	console.log(line);
}

