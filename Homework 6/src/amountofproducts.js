import _ from 'lodash'

const summary = (memo, sum) => memo + sum
const getCount = ({ params: { count } }) => count

const mapWithCount = _.partialRight(_.map, getCount)
const totalSum = _.partialRight(_.reduce, summary, 0)
export default _.flow([mapWithCount, totalSum])
