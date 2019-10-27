import { ProductItem } from './product-item'

export class Meat extends ProductItem {
    constructor (obj = {}) {
        super(obj)
        // this.color = this.params.color
    }
}
