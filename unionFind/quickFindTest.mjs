import QuickFind from './quickFind.mjs'

const arr = new QuickFind([1, 1, 4, 8, 9, 7, 0, 5, 9, 1, 5, 7])

console.log(arr.connected(0, 9))
console.log(arr.union(0, 8))