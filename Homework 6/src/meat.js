import { ProductItem } from './product-item'

export class Meat extends ProductItem {
    constructor (obj = {}) {
        super(obj)
        this.type = 'мраморная говядинка'
        this.stateOfMeat = 'raw'
    }

    fryTheMeat () {
        this.stateOfMeat = 'well-done'
    }

    eatTheMeat () {
        this.stateOfMeat === 'well-done' ? console.log('Можно есть мясо') : console.log('Жарь мясо')
    }
}
