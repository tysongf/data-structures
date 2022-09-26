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

   contains(val) {
      if (this.size === 0) return false;
      let node = this.root;
      while (node) {
         if (node.val === val) return true;
         if (val > node.val) {
            node = node.right;
            if (!node) return false;
         } else {
            node = node.left;
            if (!node) return false;
         }
      }
   }

   breadthFirstTraversal() {
      var node = this.root;
      var data = [];
      var queue = [];
      queue.push(this.root);

      while (queue.length) {
         node = queue.shift();
         data.push(node.val);
         if (node.left) queue.push(node.left);
         if (node.right) queue.push(node.right);
      }
      return data;
   }

   DFSPreOrder() {
      var data = [];
      function traverse(node) {
         data.push(node.val);
         if (node.left) traverse(node.left);
         if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
   }

   DFSPostOrder() {
      var data = [];
      function traverse(node) {
         if (node.left) traverse(node.left);
         if (node.right) traverse(node.right);
         data.push(node.val);
      }
      traverse(this.root);
      return data;
   }

   DFSInOrder() {
      var data = [];
      function traverse(node) {
         if (node.left) traverse(node.left);
         data.push(node.val);
         if (node.right) traverse(node.right);
      }
      traverse(this.root);
      return data;
   }
}

let bst = new BinaryTree();

bst.insert(25);
bst.insert(15);
bst.insert(35);
bst.insert(20);
bst.insert(10);

console.log(bst);
console.log(bst.breadthFirstTraversal());
console.log(bst.DFSInOrder());
console.log(bst.DFSPostOrder());
console.log(bst.DFSPreOrder());
