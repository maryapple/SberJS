// Массив из кнопок, которые можно нажимать в начальном состоянии, когда нельзя жать оплату и сироп
const coffeeBtns = [...document.getElementsByClassName('coffee')];

// Дисплэй с информацией по выбранному напитку
const drinkName = document.querySelector('#drinkName')
const priceValue = document.querySelector('#priceValue')

const payBtn = document.querySelector('#payBtn')
const cherrySyrupBtn = document.querySelector('#cherrySyrupBtn')
const milkBtn = document.querySelector('#milkBtn')

const menu = [
    {
        name: "Эспрессо",
        price: 90,
        size: 100,
        type: 'standard'
    },
    {
        name: "Латте",
        price: 130,
        size: 250,
        type: 'standard'
    },
    {
        name: "Каппучино",
        price: 110,
        size: 250,
        type: 'standard'
    },
    {
        name: "Банановый латте",
        price: 150,
        size: 300,
        type: 'authors'
    },
    {
        name: "Ванильный каппучино",
        price: 150,
        size: 300,
        type: 'authors'
    },
    {
        name: "Флэт уайт",
        price: 100,
        size: 280,
        type: 'authors'
    },
    {
        name: "Молоко",
        price: 25,
        size: 50,
        type: 'standard'
    },
    {
        name: "Вишневый сироп",
        price: 35,
        size: 50,
        type: 'syrup'
    }
]


coffeeBtns.forEach( (elem) => {
    elem.addEventListener('click', () => {
        if (elem.innerText !== 'Молоко')
        // Записываем название и цену выбранного напитка на экран
        drinkName.innerHTML = elem.innerText
        let currentObject = menu.filter( (obj) => {
            if (obj.name === elem.innerText) {
                return obj.price
            } 
        })
        currentObject = currentObject[0]
        priceValue.innerHTML = currentObject.price
        // В зависимости от типа напитка активируем/деактивируем кнопку выбора сиропа
        if (currentObject.type === 'standard') {
            activateBtnSyrup()
            activateBtnMilk()
            activateBtnPay()
        }
        else if (currentObject.type === 'authors') {
            activateBtnPay()
            disableBtnSyrup()
            disableBtnMilk()
        }
    })
})

// Кнопка Сироп
function activateBtnSyrup() {
    cherrySyrupBtn.classList.remove('disabled')
}

function disableBtnSyrup() {
    cherrySyrupBtn.classList.add('disabled')
}

// Кнопка Молоко
function activateBtnMilk() {
    milkBtn.classList.remove('disabled')
}

function disableBtnMilk() {
    milkBtn.classList.add('disabled')
}

// Кнопка оплаты
function activateBtnPay() {
    payBtn.classList.remove('disabled')
}