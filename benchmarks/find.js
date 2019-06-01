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
  .add('Rambda.find', () => {
    R.find(fn, input)
  })
  .add('Ramda.find', () => {
    Ramda.find(fn, input)
  })
  .add('Ramda.find.curried', () => {
    Ramda.find (fn) (input)
  })
  .add('Lodash.find', () => {
    _.find(input, fn)
  })
  .add('Sanctuary.find.no.typecheck', () => {
    Ramda.find (fn) (input)
  })

module.exports = suite
