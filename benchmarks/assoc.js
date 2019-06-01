const _ = require('lodash')
const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

const suite = new Benchmark.Suite()
const input = { a: 1, b: 2 }
const key = 'c'
const value = 3

suite
  .add('Rambda.assoc', () => {
    R.assoc(key, value, input)
  })
  .add('Ramda.assoc', () => {
    Ramda.assoc(key, value, input)
  })
  .add('Ramda.assoc.curried', () => {
    Ramda.assoc (key) (value) (input)
  })
  .add('Lodash.set', () => {
    _.set(input, key, value)
  })
  .add('Sanctuary.insert.no.typecheck', () => {
    S.insert (key) (value) (input)
  })

module.exports = suite
