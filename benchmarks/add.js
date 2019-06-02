const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const S = require('sanctuary')

const suite = new Benchmark.Suite()

suite
  .add('Rambda.add', () => {
    R.add(1, 1)
  })
  .add('Ramda.add', () => {
    Ramda.add(1, 1)
  })
  .add('Ramda.add.curried', () => {
    Ramda.add (1) (1)
  })
  .add('Lodash.add', () => {
    _.add(1, 1)
  })
  .add('Sanctuary.add', () => {
    S.add (1) (1)
  })
  .add('Sanctuary.add.unchecked', () => {
    S.unchecked.add (1) (1)
  })

module.exports = suite
