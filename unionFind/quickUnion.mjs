class QuickUnion {
    constructor(id) {
        this.id = id
    }

    // find the root of the index, i.e, make the entry of the index the new index till the entry of the index
    // is itself
    root (i) {
        while(i != this.id[i]) {
            i = this.id[i]
        }
        return i
    }

    // check if they have the same root
    connected(p, q) {
        return this.root(p) === this.root(q)
    }

    // set the root of q to the root of p
    union(p, q) {
        let pRoot = this.root(p)
        let qRoot = this.root(q)
        this.id[pRoot] = qRoot
        return this.id
    }
}

export default QuickUnion