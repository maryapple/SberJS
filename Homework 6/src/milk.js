import { ProductItem } from './product-item'

export class Milk extends ProductItem {
    constructor (obj = {}) {
        super(obj)
        this.color = this.params.color
    }
}
