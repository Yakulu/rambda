const Benchmark = require('benchmark')
const R = require('../dist/rambda.js')
const Ramda = require('ramda')
const sanctuary = require('sanctuary')
const S = sanctuary.create({checkTypes: false, env: sanctuary.env})

const suite = new Benchmark.Suite()
const input = 'foo bar baz'
const pattern = /a./g

suite
  .add('Rambda.match', () => {
    R.match(pattern)(input)
  })
  .add('Ramda.match', () => {
    Ramda.match(pattern)(input)
  })
  .add('Sanctuary.match.no.typecheck', () => {
    S.match (pattern) (input)
  })

module.exports = suite
