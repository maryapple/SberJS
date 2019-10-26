import axios from 'axios'

import { ProductItem } from './product-item'
import totalWeight from './total-weight'
import style from './style.css'
import { Meat } from './meat'
import { Eggs } from './eggs'
import { Milk } from './milk'
import { Beer } from './beer'
import { Bread } from './bread'

axios({
    method: 'get',
    url: '/api/list'
})
    .then((response) => {
        // const list = response.data.map(item => new ProductItem(item))
        const list = response.data.map((item) => {
            switch (item) {
            case this.title === 'Мясо':
                Meat(item)
                break
            case this.title === 'Яйца':
                Eggs(item)
                break
            case this.title === 'Молоко':
                Milk(item)
                break
            case this.title === 'Пиво':
                Beer(item)
                break
            case this.title === 'Хлеб':
                Bread(item)
                break
            default:
                ProductItem(item)
            }
        })
        return Promise.resolve(list)
    })
    .then((list) => {
        // Работа со списком параметров корзины
        const statisticsNode = document.createElement('dl')
        statisticsNode.classList.add(style.statistics)

        // Суммарный вес потребительской корзины
        statisticsNode.innerHTML = `<dt>Суммарный вес корзины</dt>` +
            `<dd class=${style.term}>${totalWeight(list)} кг</dd>` +
            `<dt>Стоимости каждого наименования</dt>` +
            // TODO: перенести в парсеры и сделать в виде ФП
            `<dd class=${style.term}>${list.map(({ title, costsPerItem }) => `${title} - ${costsPerItem}`).join(', ')}</dd>`
        document.body.appendChild(statisticsNode)
    })
    .catch(() => {
        document.body.innerHTML = 'Сервис недоступен!'
    })
