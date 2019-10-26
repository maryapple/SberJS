import { ProductItem } from './product-item'

export class Meat extends ProductItem {
    constructor (item) {
        super(item)
        this.color = this.params.color
    }
}
