import _ from 'lodash'

const repeatingColors = (elem, pos, arr) => pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem)

const setColor = products => {
    if (!products.length) return ''

    const colors = products.map(({ params: { color } }) => color)
    const filterColors = _.filter(colors, repeatingColors)

    return _.head(filterColors)
}

export default setColor
