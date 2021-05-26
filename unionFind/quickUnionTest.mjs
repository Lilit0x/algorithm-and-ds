import QuickUnion from './QuickUnion.mjs'
import { strict as assert } from 'assert'

const arr = new QuickUnion([2, 4, 8, 3, 9, 6, 3, 7, 5, 3])

test('are they connected', () => {
    assert.deepEqual(arr.connected(1, 3), true)
    assert.deepEqual(arr.connected(3, 7), false)
})

test('union', () => {
    assert.deepEqual(arr.union(3, 7), [2, 4, 8, 7, 9, 6, 3, 7, 5, 3])
})