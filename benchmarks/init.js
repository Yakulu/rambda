const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const S = require('sanctuary')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]

suite
  .add('Rambda.init', () => {
    R.init(input)
  })
  .add('Ramda.init', () => {
    Ramda.init(input)
  })
  .add('Lodash.initial', () => {
    _.initial(input)
  })
  .add('Sanctuary.init', () => {
    S.init (input)
  })
  .add('Sanctuary.init.unchecked', () => {
    S.unchecked.init (input)
  })

module.exports = suite
