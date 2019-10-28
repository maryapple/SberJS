import amount from '../amountofnames'

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
    it('the amount of diffferent names is 2', () => {
        expect(amount(names)).toBe(2)
    })

    it('the 0', () => {
        expect(amount({})).toBe(0)
    })
})
