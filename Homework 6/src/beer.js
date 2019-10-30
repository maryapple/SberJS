import { ProductItem } from './product-item'

export class Beer extends ProductItem {
    constructor (item) {
        super(item)
        this.expirationDate = new Date(2019, 9, 10)
        this.poured = false
    }

    pourTheBeer () {
        const today = new Date()
        if (today > this.expirationDate) {
            this.poured = true
        }
    }

    drinkTheBeer () {
        this.poured ? console.log('Можно пить') : console.log('Пиво не разлито')
    }
}
