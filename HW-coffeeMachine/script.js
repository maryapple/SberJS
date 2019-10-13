class StandardDrink {
    constructor(name, price, volume, temperature) {
        this.name = name;
        this.price = price;
        this.volume = volume;
        this.temperature = temperature;
    }
}

const espresso = new StandardDrink('Эспрессо', 90, 100);
const latte = new StandardDrink('Латте', 130, 130);
const cappuccino = new StandardDrink('Каппучино', 110, 110);
const bananaLatte = new StandardDrink('Банановый латте', 150, 100);
const vanillaCappuccino = new StandardDrink('Ванильный каппучино', 150, 150);
const flatWhite = new StandardDrink('Флэт уайт', 100, 100);