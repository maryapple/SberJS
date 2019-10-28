import amount from '../amountofproducts'

const names = [
    {
        'id': '1',
        'title': 'Мясо',
        'costs': 1000.00,
        'params': {
            'weight': 100,
            'count': 10,
            'color': 'red'
        }
    },
    {
        'id': '2',
        'title': 'Яйца',
        'costs': 100.00,
        'params': {
            'weight': 10,
            'count': 20,
            'color': 'white'
        }
    }
]

describe('amount', () => {
    it('the amount of products is 30', () => {
        expect(amount(names)).toBe(30)
    })

    it('the 0 (array is empty)', () => {
        expect(amount({})).toBe(0)
    })
})
