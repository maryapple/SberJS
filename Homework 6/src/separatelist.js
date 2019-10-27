import { Meat } from './meat'
import { Eggs } from './eggs'
import { Milk } from './milk'
import { Beer } from './beer'
import { Bread } from './bread'
import { ProductItem } from './product-item'

export default function separateList (data) {
    const products = []

    // Если учитывать что продукты каждого типа в единичном экземпляре:
    data.forEach(element => {
        switch (element.title) {
        case 'Мясо':
            products.push(new Meat(element))
            break
        case 'Яйца':
            products.push(new Eggs(element))
            break
        case 'Молоко':
            products.push(new Milk(element))
            break
        case 'Пиво':
            products.push(new Beer(element))
            break
        case 'Хлеб':
            products.push(new Bread(element))
            break
        default:
            products.push(new ProductItem(element))
        }
    })
    return products
}
