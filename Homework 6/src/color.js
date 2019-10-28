import _ from 'lodash'

const repeatingColors = arr => arr

const setColor = products => {
    if (!products.length) return ''

    const colors = products.map(({ params: { color } }) => color)
    const filterColors = _.filter(colors, repeatingColors)

    return _.head(filterColors)
}

export default setColor
