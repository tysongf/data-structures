class Node {
   constructor(val) {
      this.val = val;
      this.below = null;
      this.above = null;
   }
}

class Queue {
   constructor() {
      this.size = 0;
      this.top = null;
      this.bottom = null;
   }

   add(val) {
      let newNode = new Node(val);
      if (this.size === 0) {
         this.top = this.bottom = newNode;
      } else {
         this.bottom.below = newNode;
         newNode.above = this.bottom;
         this.bottom = newNode;
      }
      this.size++;
      return this;
   }

   remove() {
      if (!this.top) return undefined;
      let poppedNode = this.top;
      if (this.size === 1) {
         this.top = this.bottom = null;
      } else {
         this.top.below.above = null;
         this.top = this.top.below;
      }

      this.size--;
      return poppedNode.val;
   }
}

let queue = new Queue();

queue.add("hippo");
queue.add("alligator");
queue.add("monkey");
queue.add("squirrel");
queue.add("mouse");

console.log(queue.remove());
console.log(queue.remove());
console.log(queue.remove());
console.log(queue.remove());
console.log(queue.remove());
