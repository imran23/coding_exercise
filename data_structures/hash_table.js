class HashTable {
    constructor(size) {
      this.size = size;
      this.storage = new Array(size);
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) + hash + key.charCodeAt(i);
        hash &= hash;
        hash = Math.abs(hash);
      }
      return hash % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.storage[index]) {
        this.storage[index] = [];
      }
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          return;
        }
      }
      this.storage[index].push([key, value]);
    }
  
    get(key) {
      const index = this.hash(key);
      if (!this.storage[index]) {
        return null;
      }
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
      return null;
    }
  
    remove(key) {
      const index = this.hash(key);
      if (!this.storage[index]) {
        return null;
      }
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          const value = this.storage[index][i][1];
          this.storage[index].splice(i, 1);
          if (this.storage[index].length === 0) {
            this.storage[index] = undefined;
          }
          return value;
        }
      }
      return null;
    }
  }

// Test HashTable
const hashTable = new HashTable(5);

hashTable.set('apple', 1);
hashTable.set('banana', 2);
hashTable.set('cherry', 3);

console.log(hashTable.get('apple')); // output: 1
console.log(hashTable.get('banana')); // output: 2
console.log(hashTable.get('cherry')); // output: 3
console.log(hashTable.get('durian')); // output: null

hashTable.remove('banana');
console.log(hashTable.get('banana')); // output: null