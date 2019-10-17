class StandardDrink {
    constructor(name, price, volume) {
        this.name = name;
        this.price = price;
        this.volume = volume;
    }
}

const espresso = new StandardDrink('Эспрессо', 90, 100);
const latte = new StandardDrink('Латте', 130, 250);
const cappuccino = new StandardDrink('Каппучино', 110, 250);
const bananaLatte = new StandardDrink('Банановый латте', 150, 300);
const vanillaCappuccino = new StandardDrink('Ванильный каппучино', 150, 300);
const flatWhite = new StandardDrink('Флэт уайт', 100, 280);

const price = document.querySelector('#price');

const coffee = 

const espressoBtn = document.querySelector('#espresso');
espressoBtn.addEventListener('click', () => {
    currentOrder(espresso);
})

const latteBtn = document.querySelector('#latte');
latteBtn.addEventListener('click', () => {
    currentOrder(latte);
})

const cappuccinoBtn = document.querySelector('#cappuccino');
cappuccinoBtn.addEventListener('click', () => {
    currentOrder(cappuccino);
})

const bananaLatteBtn = document.querySelector('#bananaLatte');
bananaLatteBtn.addEventListener('click', () => {
    currentOrder(bananaLatte);
})

const vanillaCappuccinoBtn = document.querySelector('#vanillaCappuccino');
vanillaCappuccinoBtn.addEventListener('click', () => {
    currentOrder(vanillaCappuccino);
})

const flatWhiteBtn = document.querySelector('#flatWhite');
flatWhiteBtn.addEventListener('click', () => {
    currentOrder(flatWhite);
})

// const chosenCoffeeBtn = document.querySelector('.menu .authorsDrink');


function currentOrder (nameOfDrink) {
    price.textContent = `Стоимость ${nameOfDrink.name}: ` + nameOfDrink.price + 'рублей';
}