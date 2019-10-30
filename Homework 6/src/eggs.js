import { ProductItem } from './product-item'

export class Eggs extends ProductItem {
    constructor (item) {
        super(item)
        this.category = 'C0'
    }

    makeOmlet () {
        this.category === 'C0' ? console.log('Готовь омлет!') : console.log('Иди обратно в магаз')
    }
}
