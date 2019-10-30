import { ProductItem } from './product-item'

export class Milk extends ProductItem {
    constructor (obj = {}) {
        super(obj)
        this.percentage = '7%'
        this.amount = 'full'
    }

    drinkTheMilk () {
        this.amount === 'full' ? console.log('Можно пить') : console.log('Кто-то все выпил')
    }
}
