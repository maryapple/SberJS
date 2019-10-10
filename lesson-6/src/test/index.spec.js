import myFunction from '../index'

// Совокупность тесткейсов

describe('myFunction', () => {
    // Тесткейс
    it('get first', () => {
        expect(myFunction([1, 2, 3])).toBe(1)
        expect(myFunction([3, 2, 1])).toBe(3)
    })
    it('get first (wrong)', () => {
        expect(myFunction([1, 2, 3])).toBe(1)
    })
})