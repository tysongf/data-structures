class Node {
   constructor(val) {
      this.val = val;
      this.next = null;
   }
}

class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }

   push(val) {
      let node = new Node(val);
      if (!this.head) {
         this.head = node;
         this.tail = this.head;
      } else {
         this.tail.next = node;
         this.tail = node;
      }
      this.length++;
      return this;
   }

   pop() {
      if (!this.head) return undefined;
      let trailingNode = this.head;
      let currentNode = this.head;
      while (currentNode.next) {
         trailingNode = currentNode;
         currentNode = currentNode.next;
      }
      this.tail = trailingNode;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
         this.tail = this.head = null;
      }
      return this;
   }

   shift() {
      if (!this.head) return undefined;
      let shiftedNode = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
         this.tail = this.head = null;
      }
      return shiftedNode;
   }

   unshift(val) {
      let newNode = new Node(val);
      if (!this.head) {
         this.head = newNode;
         this.tail = this.head;
      } else {
         newNode.next = this.head;
         this.head = newNode;
      }
      this.length++;
      return this;
   }

   get(index) {
      if (index < 0 || index >= this.length) return null;
      let node = this.head;
      for (let i = 0; i < this.length; i++) {
         if (i === index) return node;
         node = node.next;
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
      newNode.next = this.get(index);
      let trailingNode = this.get(index - 1);
      trailingNode.next = newNode;
      this.length++;
   }

   remove(index) {
      if (index < 0 || index > this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
      let trailingNode = this.get(index - 1);
      let removedNode = trailingNode.next;
      trailingNode.next = removedNode.next;
      this.length--;
      return removedNode;
   }

   reverse() {
      // h        t
      // 0->1->2->3
      let node = this.head; //index node
      this.head = this.tail; //swap head and tail
      this.tail = node; //swap head and tail

      let nextNode;
      let prevNode = null;
      for (let i = 0; i < this.length; i++) {
         nextNode = node.next;
         node.next = prevNode; //0 tail will have no next node.
         prevNode = node; //set prevNode to the current node
         node = nextNode; //set index node to the next node
      }
   }

   traverse() {
      let current = this.head;
      while (current) {
         console.log(current.val);
         current = current.next;
      }
   }
}

const myList = new LinkedList();
myList.push(1).push(2).push(3).push(4);
myList.reverse();
myList.traverse();
