class Set {
    constructor() {
        this.dataStore = [];
    }

    add(data) {
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    }

    remove(data) {
        let pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }

    show() {
        return this.dataStore;
    }

    // looks to see if a specified member is part of a set
    contains(data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true;
        } else {
            return false;
        }
    }

    size() {
        return this.dataStore.length;
    }

    // combines two sets using the union set operation to form a new set. 
    union(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; ++i) {
            tempSet.add(this.dataStore[i]);
        }
        for (let i = 0; i < set.dataStore.length; ++i) {
            if (!tempSet.contains(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet;
    }

    intersect(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; ++i) {
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }

    subset(set) {
        if (this.size() > set.size()) {
            return false;
        } else {
            for (const member in this.dataStore) {
                if (!set.contains(member)) {
                    return false;
                }
            }
        }
        return true;
    }

    difference(set) {
        var tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; ++i) {
            if (!set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    }

}

// let names = new Set();
// names.add("David");
// names.add("Jennifer");
// names.add("Cynthia");
// names.add("Mike");
// names.add("Raymond");
// if (names.add("Mike")) {
//     console.log("Mike added")
// } else {
//     console.log("Can't add Mike, must already be in set");
// }
// console.log(names.show());
// let removed = "Mike";
// if (names.remove(removed)) {
//     console.log(removed + " removed.");
// } else {
//     console.log(removed + " not removed.");
// }
// names.add("Clayton");
// console.log(names.show());
// removed = "Alisa";
// if (names.remove("Mike")) {
//     console.log(removed + " removed.");
// } else {
//     console.log(removed + " not removed.");
// }


// let cis = new Set();
// cis.add("Mike");
// cis.add("Clayton");
// cis.add("Jennifer");
// cis.add("Raymond");
// let dmp = new Set();
// dmp.add("Raymond");
// dmp.add("Cynthia");
// dmp.add("Jonathan");
// let it = new Set();
// it = cis.union(dmp);
// console.log(it.show());

// let cis = new Set();
// cis.add("Mike");
// cis.add("Clayton");
// cis.add("Jennifer");
// cis.add("Raymond");
// let dmp = new Set();
// dmp.add("Raymond");
// dmp.add("Cynthia");
// dmp.add("Bryan");
// let inter = cis.intersect(dmp);
// console.log(inter.show());

// let it = new Set();
// it.add("Cynthia");
// it.add("Clayton");
// it.add("Jennifer");
// it.add("Danny");
// it.add("Jonathan");
// it.add("Terrill");
// it.add("Raymond");
// it.add("Mike");

// let dmp = new Set();
// dmp.add("Cynthia");
// dmp.add("Raymond");
// dmp.add("Jonathan");

// if (dmp.subset(it)) {
//     console.log("DMP is a subset of IT.");
// } else {
//     console.log("DMP is not a subset of IT.");
// }

// let cis = new Set();
// let it = new Set();
// cis.add("Clayton");
// cis.add("Jennifer");
// cis.add("Danny");
// it.add("Bryan");
// it.add("Clayton");
// it.add("Jennifer");
// let diff = new Set();
// diff = cis.difference(it);
// console.log("[" + cis.show() + "] difference [" + it.show() +
//     "] -> [" + diff.show() + "]");