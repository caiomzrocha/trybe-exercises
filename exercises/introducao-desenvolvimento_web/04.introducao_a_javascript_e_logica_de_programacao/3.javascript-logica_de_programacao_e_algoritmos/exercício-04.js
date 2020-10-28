let n = 5;
let mid = Math.floor(n / 2);
let line = '';

for (let i = 0; i <= mid; i++) {
	line = '';
	
	for (let j = 0; j < n; j++) {
		if (j < mid - i || j > mid + i)
			line += ' ';
		else
			line += '*';
	}

	console.log(line);
}

