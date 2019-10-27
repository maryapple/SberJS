import _ from 'lodash'

/* // Получаем модифицированный массив
const arr = separateList() */

// Количество наименований продуктов
const productNames = arr => arr.map(({ title }) => title).length
export default productNames

// Количество продуктов
const summary = (memo, sum) => memo + sum
const getCount = ({ params: { count } }) => count

const mapWithCount = _.partialRight(_.map, getCount)
const totalSum = _.partialRight(_.reduce, summary, 0)
export default _.flow([mapWithCount, totalSum])
    
// Стоимость каждого продукта
const productsArr = ({ title, costsPerItem }) => `${title} - ${costsPerItem}`
const mapEachCosts = _.partialRight(_.map, productsArr) // не понял как тут join использовать, чтобы расставить пробелы

export default _.flow([mapEachCosts])
