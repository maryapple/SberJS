import { ProductItem } from "./product-item";

export class Eggs extends ProductItem {
    constructor(item) {
        super(item);
        this.color = this.params.color;
    }
}