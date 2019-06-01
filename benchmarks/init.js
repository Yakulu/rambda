const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

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
  .add('Sanctuary.init.no.typecheck', () => {
    S.init (input)
  })

module.exports = suite
