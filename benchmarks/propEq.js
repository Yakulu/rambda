const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

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
  .add('Sanctuary.equals.prop.no.typecheck', () => {
    S.equals (S.prop (value[0]) (input)) (value[1])
  })

module.exports = suite
