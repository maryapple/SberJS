import { ProductItem } from './product-item'

export class Bread extends ProductItem {
    constructor (item) {
        super(item)
        this.type = 'ржаной'
        this.slice = false
    }

    sliceTheBread () {
        console.log('Хлеб порезан')
        this.slice = true
    }

    eatTheBread () {
        this.slice ? console.log('Можно есть хлеб') : console.log('Хлеб не порезан')
    }
}
