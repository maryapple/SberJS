// Массив из кнопок, которые можно нажимать в начальном состоянии, когда нельзя жать оплату и сироп
const coffeeBtns = [...document.getElementsByClassName('coffee')];

// Дисплэй с информацией по выбранному напитку
const drinkName = document.querySelector('#drinkName')
const priceValue = document.querySelector('#priceValue')

const payBtn = document.querySelector('#payBtn')
const cherrySyrupBtn = document.querySelector('#cherrySyrupBtn')
const milkBtn = document.querySelector('#milkBtn')

const milkDisplay = document.querySelector('#milkDisplay')
const cherrySyrupDisplay = document.querySelector('#cherrySyrupDisplay')

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

let currentPrice = 0
let currentType = ''

coffeeBtns.forEach( (elem) => {
    elem.addEventListener('click', () => {
        // Если выбран кофе
        if ((elem.innerText !== 'Молоко') && (elem.innerText !== 'Вишневый сироп')) {
            // Записываем название и цену выбранного напитка на экран
            drinkName.innerHTML = elem.innerText
            milkDisplay.innerText = ''
            cherrySyrupDisplay.innerText = ''
            let currentObject = menu.filter((obj) => {
                if (obj.name === elem.innerText) {
                    return obj.price
                }
            })
            currentObject = currentObject[0]
            currentType = currentObject.type
            currentPrice = currentObject.price
            priceValue.innerHTML = currentPrice
            // В зависимости от типа напитка активируем/деактивируем кнопку выбора сиропа и молока
            if (currentType === 'standard') {
                activateBtnSyrup()
                activateBtnMilk()
                activateBtnPay()
            }
            else if (currentType === 'authors') {
                activateBtnPay()
                disableBtnSyrup()
                disableBtnMilk()
            }
        }

        // Если выбрано молоко как отдельный напиток
        else if ((elem.innerText === 'Молоко') && (drinkName.innerText === '')) {
            // Записываем название и цену выбранного напитка на экран
            milkDisplay.innerText = ''
            cherrySyrupDisplay.innerText = ''
            drinkName.innerHTML = elem.innerText
            let currentObject = menu.filter((obj) => {
                if (obj.name === elem.innerText) {
                    return obj.price
                }
            })
            currentObject = currentObject[0]
            currentPrice = currentObject.price
            priceValue.innerHTML = currentPrice
            activateBtnSyrup()
            activateBtnPay()
        }

        // Если молоко выбрано как добавка к кофе
        else if ((elem.innerText === 'Молоко') && (drinkName.innerText !== '') && (currentType !== 'authors')) {
            milkDisplay.innerText = 'с молоком'
            currentPrice += 25
            priceValue.innerHTML = currentPrice
        }

        // Выбран вишневый сироп
        else if (
                (elem.innerText === 'Вишневый сироп') && 
                (currentType !== 'authors') && 
                (cherrySyrupDisplay.innerText !== '+ двойная порция вишневого сиропа')
            ) {
            if (cherrySyrupDisplay.innerText === '') {
                cherrySyrupDisplay.innerText = '+ порция вишневого сиропа'
                currentPrice += 35
                priceValue.innerHTML = currentPrice
            }
            else if (cherrySyrupDisplay.innerText === '+ порция вишневого сиропа') {
                cherrySyrupDisplay.innerText = '+ двойная порция вишневого сиропа'
                currentPrice += 35
                priceValue.innerHTML = currentPrice
                disableBtnSyrup()
            }
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