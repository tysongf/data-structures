class Node {
   constructor(val) {
      this.val = val;
      this.above = null;
      this.below = null;
   }
}

class DoublyLinkedList {
   constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
   }

   push(val) {
      let node = new Node(val);
      if (this.length === 0) {
         this.bottom = this.top = node;
      } else {
         node.below = this.top;
         this.top.above = node;
         this.top = node;
      }
      this.length++;
      return this;
   }

   pop() {
      if (this.length === 0) return undefined;
      if (this.length === 1) {
         this.top = this.bottom = null;
      } else {
         this.top.below.above = null;
         this.top = this.top.below;
      }
      this.length--;
      return this;
   }

   shift() {
      //remove an item from the bottom
      if (this.length === 0) return undefined;
      let shiftedNode = this.bottom;
      if (this.length === 1) {
         this.top = this.bottom = null;
      } else {
         this.bottom = this.bottom.above;
         this.bottom.below = null;
      }

      this.length--;
      return shiftedNode;
   }

   unshift(val) {
      //add an item to the bottom
      let newNode = new Node(val);
      if (this.length === 0) {
         this.top = this.bottom = newNode;
      } else {
         newNode.above = this.bottom;
         this.bottom.below = newNode;
         this.bottom = newNode;
      }
      this.length++;
      return this;
   }

   get(index) {
      if (index < 0 || index >= this.length) return null;
      if (index > Math.floor(this.length / 2)) {
         //item is closer to the top
         let node = this.top;
         for (let i = this.length - 1; i >= 0; i--) {
            if (i === index) return node;
            node = node.below;
         }
      } else {
         //item is closer to the bottom
         let node = this.bottom;
         for (let i = 0; i < this.length; i++) {
            if (i === index) return node;
            node = node.above;
         }
      }
   }

   set(index, val) {
      let node = this.get(index);
      if (node) {
         node.val = val;
         return true;
      }
      return false;
   }

   insert(index, val) {
      if (index < 0 || index > this.length) return false;
      if (index === this.length) return !!this.push(val);
      if (index === 0) return !!this.unshift(val);

      let newNode = new Node(val);
      newNode.above = this.get(index);
      newNode.below = this.get(index - 1);
      newNode.below.above = newNode;
      newNode.above.below = newNode;
      this.length++;
   }

   remove(index) {
      if (index < 0 || index > this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();

      let removedNode = this.get(index);
      removedNode.below.above = removedNode.above;
      removedNode.above.below = removedNode.below;
      this.length--;
      return removedNode;
   }

   reverse() {
      if (this.length === 0 || this.length === 1) return this;

      let node = this.bottom;

      while (node !== null) {
         let tempNode = node.above;
         node.above = node.below;
         node.below = tempNode;
         node = node.below;
      }

      let tempNode = this.bottom;
      this.bottom = this.top;
      this.top = tempNode;
      return this;
   }

   traverseUp() {
      let node = this.bottom;
      while (node) {
         console.log(node.val);
         node = node.above;
      }
   }

   traverseDown() {
      let node = this.top;
      while (node) {
         console.log(node.val);
         node = node.below;
      }
   }
}

const myList = new DoublyLinkedList();
let length = 100;
let pops = 5;
for (let i = 1; i <= length; i++) {
   myList.push(i);
}

myList.reverse();
myList.traverseUp();
