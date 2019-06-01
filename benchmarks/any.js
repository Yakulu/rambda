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
  .add('Rambda.any', () => {
    R.any(fn, input)
  })
  .add('Ramda.any', () => {
    Ramda.any(fn, input)
  })
  .add('Ramda.any.curried', () => {
    Ramda.any (fn) (input)
  })
  .add('Lodash.some', () => {
    _.some(input, fn)
  })
  .add('Sanctuary.ant.no.typecheck', () => {
    S.any (fn) (input)
  })

module.exports = suite
