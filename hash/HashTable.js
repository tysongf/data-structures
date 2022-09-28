class HashTable {
   constructor(size = 53) {
      const maxStringSize = 100;
      this.keyMap = new Array(size);
   }

   _hash(key) {
      let total = 0;
      let PRIME = 23; //reduce collisions
      for (let i = 0; i < Math.min(key.length, this.maxStringSize); i++) {
         let char = key[i];
         let value = char.charCodeAt(i) - 96;
         total = (total * PRIME + value) % arrayLen;
      }
      return total;
   }

   set(key, value) {
      let index = this._hash(key);
      if (!this.keyMap[index]) {
         this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
   }

   get(key) {
      let index = this._hash(key);
      if (this.keyMap[index]);
      for (item in this.keyMap[index]) {
         if (item[0] === key) return item[1];
      }
      return undefined;
   }
}

let ht = new HashTable();
ht.set("foo", "bar");
