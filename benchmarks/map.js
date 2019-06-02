const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const S = require('sanctuary')

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const fn = val => val + 2

suite
  .add('Rambda.map', () => {
    R.map(fn, input)
  })
  .add('Ramda.map', () => {
    Ramda.map(fn, input)
  })
  .add('Ramda.map.curried', () => {
    Ramda.map (fn) (input)
  })
  .add('Lodash.map', () => {
    _.map(input, fn)
  })
  .add('Sanctuary.map', () => {
    S.map (fn) (input)
  })
  .add('Sanctuary.map.unchecked', () => {
    S.unchecked.map (fn) (input)
  })

module.exports = suite
