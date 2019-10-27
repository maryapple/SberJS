import _ from 'lodash'

const productNames = arr => arr.map(({ title }) => title).length
export default _.flow([productNames])
