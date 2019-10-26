import { ProductItem } from './product-item'

export class Milk extends ProductItem {
    constructor (item) {
        super(item)
        this.color = this.params.color
    }
}
