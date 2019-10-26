import { ProductItem } from "./product-item";

export class Bread extends ProductItem {
    constructor(item) {
        super(item);
        this.color = this.params.color;
    }
}