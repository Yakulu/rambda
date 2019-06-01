const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const value = 3

suite
  .add('Rambda.dropLast', () => {
    R.dropLast(value)(input)
  })
  .add('Ramda.dropLast', () => {
    Ramda.dropLast(value)(input)
  })
  .add('Sanctuary.dropLast.no.typecheck', () => {
    S.dropLast (value) (input)
  })

module.exports = suite
