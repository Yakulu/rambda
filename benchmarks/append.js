const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const S = require('sanctuary')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]

suite
  .add('Rambda.append', () => {
    R.append(0)(input)
  })
  .add('Ramda.append', () => {
    Ramda.append(0)(input)
  })
  .add('Sanctuary.append', () => {
    S.append (0) (input)
  })
  .add('Sanctuary.append.unchecked', () => {
    S.unchecked.append (0) (input)
  })

module.exports = suite
