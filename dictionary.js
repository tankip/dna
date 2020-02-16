/**
 * Javascript implementation of a Dictionary
 * It stores data in form of key - pairs
 */

class Dictionary {
    constructor() {
        this.dataStore = new Array();
    }

    add(key, value) {
        this.dataStore[key] = value;
    }

    find(key) {
        return this.dataStore[key];
    }

    remove(key) {
        delete this.dataStore[key];
    }

    showAll() {
        for (const key in this.dataStore) {
            if (this.dataStore.hasOwnProperty(key)) {
                const value = this.dataStore[key];
                console.log(key + " -> " + value);
            }
        }
    }

    count() {
        let n = 0;
        for (const key in this.dataStore) {
            ++n;
        }
        return n;
    }

    clear() {
        for (const key in this.dataStore) {
            delete this.dataStore[key];
        }
    }
}

let pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());