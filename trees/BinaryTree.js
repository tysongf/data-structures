class Node {
   constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
   }
}

class BinaryTree {
   constructor() {
      this.size = 0;
      this.root = null;
   }

   insert(val) {
      let newNode = new Node(val);
      if (!this.root) {
         this.root = newNode;
         this.size++;
         return this;
      }

      let node = this.root;
      while (node) {
         if (val > node.val) {
            if (!node.right) {
               node.right = newNode;
               break;
            }
            node = node.right;
         } else {
            if (!node.left) {
               node.left = newNode;
               break;
            }
            node = node.left;
         }
      }

      this.size++;
      return this;
   }

   find(val) {
      if (this.size === 0) return undefined;
      let node = this.root;
      while (node) {
         if (node.val === val) return node.val;
         if (val > node.val) {
            node = node.right;
            if (!node) return undefined;
         } else {
            node = node.left;
            if (!node) return undefined;
         }
      }
   }
}

let bst = new BinaryTree();

let numItems = 20;
while (numItems) {
   bst.insert(Math.floor(Math.random() * 40));
   numItems--;
}

console.log(bst);
console.log(bst.find(7));
