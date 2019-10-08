// 1
let counter = {
	count : 0,
	add() {
		this.count ++;
		console.log(this.count);
	}
}


// 2
let clock = {
	tictock() {
		setInterval(() => { 
			this.add.call(counter); 
			// Когда было this.add() то this был clock, а теперь контекст это counter
			console.log(counter);
			console.log(clock);
		}, 1000);
	}
}

clock.tictock();

// 3
Object.setPrototypeOf(clock, counter);
// = clock.__proto = counter

// 4
counter.count = 3600;
// clock.__proto__.count = 3600