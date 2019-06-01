const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

const suite = new Benchmark.Suite()
const input = [1, 2, 3, 4]

suite
  .add('Rambda.append', () => {
    R.append(0)(input)
  })
  .add('Ramda.append', () => {
    Ramda.append(0)(input)
  })
  .add('Sanctuary.append.no.typecheck', () => {
    S.append (0) (input)
  })

module.exports = suite
