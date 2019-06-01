const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const value = 4

suite
  .add('Rambda.contains', () => {
    R.contains(value, input)
  })
  .add('Ramda.contains', () => {
    Ramda.contains(value, input)
  })
  .add('Ramda.contains.curried', () => {
    Ramda.contains (value) (input)
  })
  .add('Lodash.includes', () => {
    _.includes(input, value)
  })
  .add('Sanctuary.elem.no.typecheck', () => {
    S.elem (value) (input)
  })

module.exports = suite
