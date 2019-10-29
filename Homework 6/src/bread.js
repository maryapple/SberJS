import { ProductItem } from './product-item'

export class Bread extends ProductItem {
    constructor (item) {
        super(item)
        this.type = 'ржаной'
    }
}
