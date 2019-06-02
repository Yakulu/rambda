const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const S = require('sanctuary')

const suite = new Benchmark.Suite()
const input = { foo: 'bar' }
const value = ['foo', 'bar']

suite
  .add('Rambda.propEq', () => {
    R.propEq(...value)(input)
  })
  .add('Ramda.propEq', () => {
    Ramda.propEq(...value)(input)
  })
  .add('Sanctuary.equals.prop', () => {
    S.equals (S.prop (value[0]) (input)) (value[1])
  })
  .add('Sanctuary.equals.prop.unchecked', () => {
    S.unchecked.equals (S.prop (value[0]) (input)) (value[1])
  })

module.exports = suite
