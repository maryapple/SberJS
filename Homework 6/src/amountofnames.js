// import _ from 'lodash'

/* let namesB = []

const names = arr => (arr.forEach(element => {
    if (_.indexOf(namesB, element.title) === -1) {
        namesB.push(element.title)
    }
    // console.log([0, 0].length)
    console.log(namesB.length)
})).length

console.log(namesB.length)
почему там 0 ??? ыыыы
*/

const names = arr => arr.map(({ title }) => title).length

export default names
