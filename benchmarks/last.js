const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const S = require('sanctuary')

const suite = new Benchmark.Suite()
const input = [1, 2, 3]

suite
  .add('Rambda.last', () => {
    R.last(input)
  })
  .add('Ramda.last', () => {
    Ramda.last(input)
  })
  .add('Lodash.last', () => {
    _.last(input)
  })
  .add('Sanctuary.last', () => {
    S.last (input)
  })
  .add('Sanctuary.last.unchecked', () => {
    S.unchecked.last (input)
  })

module.exports = suite
