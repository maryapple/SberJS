import axios from 'axios'
import totalWeight from './total-weight'
import style from './style.css'
import separateList from './separatelist.js'
// ##################################################
import amountOfNames from './amountofnames'
import amountOfProducts from './amountofproducts'
import prices from './prices'
// ##################################################

axios({
    method: 'get',
    url: '/api/list'
})
    .then((response) => {
        const list = separateList(response.data)
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
            // `<dd class=${style.term}>${list.map(({ title, costsPerItem }) => `${title} - ${costsPerItem}`).join(', ')}</dd>`
            `<dd class=${style.term}}>${amountOfNames(list)}</dd>` +
            `<dt>Количество продуктов</dt>` +
            `<dd class=${style.term}}>${amountOfProducts(list)}</dd>` +
            `<dt>Стоимости каждого наименования</dt>` +
            `<dd class=${style.term}>${prices(list)}</dd>`
        document.body.appendChild(statisticsNode)
    })
    .catch(() => {
        document.body.innerHTML = 'Сервис недоступен!'
    })
