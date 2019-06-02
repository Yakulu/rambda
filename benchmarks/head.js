const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const S = require('sanctuary')

const suite = new Benchmark.Suite()
const input = [1, 2, 3]

suite
  .add('Rambda.head', () => {
    R.head(input)
  })
  .add('Ramda.head', () => {
    Ramda.head(input)
  })
  .add('Lodash.head', () => {
    _.head(input)
  })
  .add('Sanctuary.head', () => {
    S.head (input)
  })
  .add('Sanctuary.head.unchecked', () => {
    S.unchecked.head (input)
  })

module.exports = suite
