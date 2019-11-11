// Массив из кнопок, которые можно нажимать в начальном состоянии, когда нельзя жать оплату и сироп
const coffeeBtns = [...document.getElementsByClassName('coffee')];

// Дисплей с информацией по выбранному напитку
const drinkName = document.querySelector('#drinkName')
const priceValue = document.querySelector('#priceValue')
const milkDisplay = document.querySelector('#milkDisplay')
const cherrySyrupDisplay = document.querySelector('#cherrySyrupDisplay')

// Кнопки добавления топпинга и оплаты
const payBtn = document.querySelector('#payBtn')
const cherrySyrupBtn = document.querySelector('#cherrySyrupBtn')
const milkBtn = document.querySelector('#milkBtn')

const cancelBtn = document.querySelector('#cancelBtn')

// Блок с фото кофе
const area = document.querySelector('#area')

const menu = [
    {
        name: "Эспрессо",
        price: 90,
        volume: 100,
        type: 'standard'
    },
    {
        name: "Латте",
        price: 130,
        volume: 250,
        type: 'standard'
    },
    {
        name: "Каппучино",
        price: 110,
        volume: 250,
        type: 'standard'
    },
    {
        name: "Банановый латте",
        price: 150,
        volume: 300,
        type: 'authors'
    },
    {
        name: "Ванильный каппучино",
        price: 150,
        volume: 300,
        type: 'authors'
    },
    {
        name: "Флэт уайт",
        price: 100,
        volume: 280,
        type: 'authors'
    },
    {
        name: "Молоко",
        price: 25,
        volume: 50,
        type: 'standard'
    },
    {
        name: "Вишневый сироп",
        price: 35,
        volume: 50,
        type: 'syrup'
    }
]

let topping = {
    syrup: 0,
    milk: 0
}

const mediumCup = {
    volume: 250,
    amount: 5
}

const largeCup = {
    volume: 380,
    amount: 6
}

// Параметры текущего выбранного напитка
let currentPrice = 0
let currentType = ''
let currentVolume = 0

// Счетчик напитков
let drinkCounter = {
    middle: 0,
    large: 0
}

// Колба для молока, сиропа
let flask = {
    milk: 1000,
    // одна из колб для сиропа (если закончится хоть одна нельзя готовить напиток)
    syrup: 500
}

const progressBar = document.querySelector('#progressBar')

coffeeBtns.forEach( (elem) => {
    elem.addEventListener('click', () => {
        // Если выбран кофе
        if ((elem.innerText !== 'Молоко') && (elem.innerText !== 'Вишневый сироп')) {
            // Сбрасываем параметры для отображения топпингов и выбор топпингов
            area.classList.add('hidden')
            msg.classList.add('hidden')
            topping.milk = 0
            topping.syrup = 0
            milkDisplay.innerText = ''
            cherrySyrupDisplay.innerText = ''

            // Записываем название и цену выбранного напитка на экран
            drinkName.innerHTML = elem.innerText
            let currentObject = menu.filter((obj) => {
                if (obj.name === elem.innerText) {
                    return obj.price
                }
            })
            currentObject = currentObject[0]
            currentType = currentObject.type
            currentPrice = currentObject.price
            priceValue.innerHTML = currentPrice

            // Запоминаем объем выбранного напитка
            currentVolume = currentObject.volume
            // console.log(currentVolume)
            
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

        // Если молоко выбрано как отдельный напиток
        else if ((elem.innerText === 'Молоко') && (drinkName.innerText === '')) {
            // Сбрасываем параметры для отображения топпингов и выбор топпингов
            area.classList.add('hidden')
            msg.classList.add('hidden')
            topping.milk = 0
            topping.syrup = 0
            milkDisplay.innerText = ''
            cherrySyrupDisplay.innerText = ''

            // Записываем название и цену выбранного напитка на экран
            drinkName.innerHTML = elem.innerText
            let currentObject = menu.filter((obj) => {
                if (obj.name === elem.innerText) {
                    return obj.price
                }
            })
            currentObject = currentObject[0]
            currentPrice = currentObject.price
            priceValue.innerHTML = currentPrice

            // Запоминаем объем напитка
            currentVolume = currentObject.volume
            // console.log(currentVolume)
            
            // Активируем кнопки топпингов
            activateBtnSyrup()
            activateBtnPay()
        }

        // Если молоко выбрано как добавка к кофе
        else if (
            (elem.innerText === 'Молоко') && 
            (drinkName.innerText !== '') && 
            (currentType !== 'authors') &&
            (currentVolume <= (largeCup.volume - 50))
        ) {
            // Увеличиваем счетчик топпинга
            topping.milk ++

            // Отображаем на экране добавку
            milkDisplay.innerText = 'с молоком' + ` x[${topping.milk}]`

            // Выводим увеличенную цену напитка
            currentPrice += 25
            priceValue.innerHTML = currentPrice

            // Запоминаем объем
            currentVolume += 50
            // console.log(currentVolume)

            // Смотрим, будет ли при следующем добавлении молока или 
            // сиропа превышение объема стакана. Если да, то тогда деактивируем кнопки топпингов
            if (currentVolume + 50 > largeCup.volume) {
                disableBtnMilk()
                disableBtnSyrup()
            }
        }

        // Выбран вишневый сироп
        else if (
            (elem.innerText === 'Вишневый сироп') && 
            (currentType !== 'authors') && 
            (topping.syrup < 2) &&
            ( !cherrySyrupBtn.classList.contains('disabled')) &&
            (currentVolume <= (largeCup.volume - 50))
        ) {
            // Увеличиваем счетчик топпинга
            topping.syrup ++

            // Выводим сообщение о порции сиропа
            if (topping.syrup === 1) {
                cherrySyrupDisplay.innerText = '+ порция вишневого сиропа'
            }
            else if (topping.syrup === 2) {
                cherrySyrupDisplay.innerText = '+ двойная порция вишневого сиропа'
                disableBtnSyrup()
            }

            // Выводим увеличенную цену
            currentPrice += 35
            priceValue.innerHTML = currentPrice

            // Запоминаем объем напитка
            currentVolume += 50
            console.log(currentVolume)

            // Аналогично молоку, смотрим, будет ли при следующем добавлении молока или 
            // сиропа превышение объема стакана. Если да, то тогда деактивируем кнопки топпингов
            if (currentVolume + 50 > largeCup.volume) {
                disableBtnMilk()
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

function disableBtnPay() {
    payBtn.classList.add('disabled')
}

// Оплата напитка
payBtn.addEventListener('click', () => {
    const finalDrink = getParamsOfDrink()

    // Если закончились большие стаканы (но еще есть возможность заказать маленький напиток)
    if (largeCup.amount === 0 && finalDrink.volume > 250) {
        msg.classList.remove('hidden')
    }
    // Если закончились все стаканы 
    else if (mediumCup.amount === 0 && largeCup.amount === 0) {
        const allBtns = [...document.getElementsByClassName('item')]
        allBtns.forEach(element => {
            element.classList.add('hidden')
        });
        const msg = document.querySelector('#msg')
        msg.classList.remove('hidden')
    }
    // Если все хорошо
    else {
        if (mediumCup.amount > 0 || largeCup.amount > 0) {
            if (finalDrink.type === 'standard') {
                coffeeProgress(30)
                setTimeout(image, 3000)
                setTimeout(() => {
                    playAndStopSong()
                }, 5000);
            }
            else if (finalDrink.type === 'authors') {
                coffeeProgress(50)
                setTimeout(image, 5000)
                setTimeout(() => {
                    playAndStopSong()
                }, 10000);
            }
            else {
                coffeeProgress(80)
                setTimeout(image, 8000)
                setTimeout(() => {
                    playAndStopSong()
                }, 13000);
            }
        }
        useCup(finalDrink.volume)
    }
})

const late = document.querySelector('#late')
const take = document.querySelector('#take')

function playAndStopSong() {
    let song = new Audio('silk.mp3')
    song.play()
    area.addEventListener('click', () => {
        area.classList.add('hidden')
        song.pause()
        
        progressBar.value = 0
    })
/*     if (!flag) {
        take.classList.add('hidden')
        late.classList.remove('hidden')
    } */
    
}

function image() {
    area.classList.remove('hidden')
}

function useCup(volume) {
    // Если остались маленькие стаканы
    if ((volume <= mediumCup.volume) && (mediumCup.amount >= 1)) {
        mediumCup.amount--
    }
    // Если нужен большой стакан либо закончился маленький
    else if ((volume <= largeCup.volume) && (largeCup.amount >= 1)) {
        largeCup.amount--
    }
    // console.log(mediumCup, largeCup)
}

// Задаем значение для прогресс бара
function coffeeProgress(time) {
    let start = 0;
    const interval = setInterval(() => {
        if (start > 100) {
            clearInterval(interval)
        } else {
            progressBar.value = start
        }
        start++;
    }, time);
}

function getParamsOfDrink() {
    let obj = {
        price: 0,
        type: '',
        volume: 0
    }
    // Получаем цену
    obj.price = priceValue.innerText

    // Получаем тип (чтобы по нему потом определить время приготовления)
    let drinktext = drinkName.innerText
    let typeBuff = menu.filter( (elem) => {
        if (elem.name === drinktext) {
            return elem
        }
    })
    typeBuff = typeBuff[0]
    currentType = typeBuff.type
    if ( currentType === 'authors') {
        currentType = 'authors'
    }
    else if (( currentType === 'standard') && ((milkDisplay.innerText !== '') || (cherrySyrupDisplay.innerText !== ''))) {
        currentType = 'customized'
    }
    else if ((currentType === 'standard') && (milkDisplay.innerText === '') && (cherrySyrupDisplay.innerText === '')) {
        currentType = 'standard'
    }
    obj.type = currentType

    // Получаем объем напитка
    let defaultVolume = Number(typeBuff.volume)
    let syropBuff = cherrySyrupDisplay.innerText
    if (syropBuff === '+ порция вишневого сиропа') {
        defaultVolume += 50
    }
    else if (syropBuff === '+ двойная порция вишневого сиропа') {
        defaultVolume += 100
    }
    let milkBuff = milkDisplay.innerText
    if (milkBuff !== '') {
        defaultVolume += parseInt(milkBuff.match(/\d+/)) * 50
    }
    obj.volume = defaultVolume
    
    return obj
 }

cancelBtn.addEventListener('click', () => {
    drinkName.innerHTML = ''
    cherrySyrupDisplay.innerHTML = ''
    milkDisplay.innerHTML = ''
    priceValue.innerHTML = ''
    progressBar.value = 0
    disableBtnSyrup()
    area.classList.add('hidden')
    disableBtnPay()
    topping.syrup = 0
    topping.milk = 0
    startProcess = 0;
})
