class Counter {

	static count;

	constructor(count) {
		// this.count = count;
		Counter.count = count;
	}

	add() {
		// this.count++;
		Counter.count++;
		console.log(Counter.count);
	}
}

class Clock extends Counter {
	tictock() {
		setInterval(() => this.add() , 1000);
	}
}

let counter = new Counter(3600);
// 	console.log(Counter.count);

let clock = new Clock(3600);
clock.tictock();