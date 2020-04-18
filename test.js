const operations = require('./test.spec.js')
const assert = require('assert')

it('correctly calculates the sum of the values in a list', () => {
  assert.equal(operations.sum([1, 2, 3, 4]), 10)
})