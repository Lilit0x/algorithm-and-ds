class QuickFind {
    constructor(id) {
        this.id = id 
    }

    /* Check whether p and q are in the same component 
    i.e does the id entry of index p and q have the same element */
    connected(p, q) {
        return this.id[p] === this.id[q]
    }

    // Changes all entry of id[p] to id[q]
    union(p, q) {
        let pId = this.id[p]
        let qId = this.id[q]
        for(let i of this.id) {
            this.id[i] === pId ? this.id[i] = qId : null
            /* Note: the conditional is to check for all indices that have the same entry as P nad it changes
                all those entry to Q thereby making them into a single connected componenent.
                If this.id[p] was used, it'd have only changed the entry of P not all indices that have same entry
             */
        }
        return this.id
    }
}

export default QuickFind