const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]
const fns = [val => val + 1, val => val.length]

suite
  .add('Rambda.compose', () => {
    R.compose(...fns)(input)
  })
  .add('Ramda.compose', () => {
    Ramda.compose(...fns)(input)
  })
  .add('Lodash.flowRight', () => {
    _.flowRight(...fns)(input)
  })
  .add('Sanctuary.compose.no.typecheck', () => {
    S.compose (fns[0]) (fns[1]) (input)
  })

module.exports = suite
