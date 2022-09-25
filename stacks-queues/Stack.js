class Node {
   constructor(val) {
      this.val = val;
      this.below = null;
   }
}

class Stack {
   constructor() {
      this.size = 0;
      this.top = null;
   }

   push(val) {
      let newNode = new Node(val);
      if (!this.top) {
         this.top = newNode;
         this.size++;
         return this;
      }
      newNode.below = this.top;
      this.top = newNode;

      return ++this.size;
   }

   pop() {
      if (!this.top) return undefined;
      let poppedNode = this.top;
      if (this.size === 1) {
         this.top = null;
      } else {
         this.top = this.top.below;
      }

      this.size--;
      return poppedNode.val;
   }
}

let stack = new Stack();

stack.push("hippo");
stack.push("alligator");
stack.push("monkey");
stack.push("squirrel");
stack.push("mouse");
stack.push("peanut");

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push("frog");
stack.push("fly");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
