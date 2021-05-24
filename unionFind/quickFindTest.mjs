import QuickFind from './quickFind.mjs'
import { strict as assert } from 'assert'

const arr = new QuickFind([1, 1, 4, 8, 9, 7, 0, 5, 9, 1, 5, 7])

test('are they connected', () => {
    assert.deepEqual(arr.connected(0,9), true)
})

test('union', () => {
    assert.deepEqual(arr.union(0, 8), [9, 9, 4, 8, 9, 7, 0, 5, 9, 9, 5, 7])
})
// console.log(arr.connected(0, 9))
// console.log(arr.union(0, 8))