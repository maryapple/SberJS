import { ProductItem } from "./product-item";

export class Beer extends ProductItem {
    constructor (item) {
        super(item);
        this.color = this.params.color;
    }
}