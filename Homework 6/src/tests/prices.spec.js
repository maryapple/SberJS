import prices from '../prices'

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

const expected = ['1 - 1000.00', '2 - 100.00']

describe('prices', () => {
    it('prices of each product: number => price', () => {
        expect(prices(names)).toEqual(expect.arrayContaining(expected))
    })
})
