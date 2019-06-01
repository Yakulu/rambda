const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

const suite = new Benchmark.Suite()
const input = { bar: 'yes' }
const value = { foo: 'bar', bar: 'baz' }

suite
  .add('Rambda.merge', () => {
    R.merge(value, input)
  })
  .add('Ramda.merge', () => {
    Ramda.merge(value, input)
  })
  .add('Ramda.merge.curried', () => {
    Ramda.merge (value) (input)
  })
  .add('Lodash.merge', () => {
    _.merge(value, input)
  })
  .add('Sanctuary.concat.no.typecheck', () => {
    S.concat (value) (input)
  })

module.exports = suite
