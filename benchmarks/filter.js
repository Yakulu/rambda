const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const fn = val => val > 2

suite
  .add('Rambda.filter', () => {
    R.filter(fn, input)
  })
  .add('Ramda.filter', () => {
    Ramda.filter(fn, input)
  })
  .add('Ramda.filter.curried', () => {
    Ramda.filter (fn) (input)
  })
  .add('Lodash.filter', () => {
    _.filter(input, fn)
  })
  .add('Sanctuary.filter.no.typecheck', () => {
    S.filter (fn) (input)
  })

module.exports = suite
