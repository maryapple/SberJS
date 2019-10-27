import _ from 'lodash'

const productsArr = ({ title, costsPerItem }) => `${title} - ${costsPerItem}`
const mapEachCosts = _.partialRight(_.map, productsArr)

export default _.flow([mapEachCosts])
