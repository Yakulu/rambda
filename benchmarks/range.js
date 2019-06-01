const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

const suite = new Benchmark.Suite()
const input = [0, 10]

suite
  .add('Rambda.range', () => {
    R.range(...input)
  })
  .add('Ramda.range', () => {
    Ramda.range(...input)
  })
  .add('Ramda.range.curried', () => {
    Ramda.range (input[0]) (input[1])
  })
  .add('Lodash.range', () => {
    _.range(...input)
  })
  .add('Sanctuary.range.no.typecheck', () => {
    S.range (input[0]) (input[1])
  })

module.exports = suite
