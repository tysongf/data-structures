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

   remove(val) {}
}

//Undirected Graph with connections stored in an Adjacency List
class Graph {
   constructor() {
      this.adjacencyList = {};
   }
   addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
   }
   addEdge(v1, v2) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
   }
   removeEdge(v1, v2) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
   }
   removeVertex(vertex) {
      while (this.adjacencyList[vertex].length) {
         const adjacentVertex = this.adjacencyList[vertex].pop();
         this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex];
   }
}

let airports = new Graph();
airports.addVertex("Nanaimo");
airports.addVertex("Vancouver");
airports.addVertex("Victoria");
airports.addVertex("Calgary");
airports.addVertex("Tofino");
airports.addEdge("Nanaimo", "Vancouver");
airports.addEdge("Vancouver", "Calgary");
airports.addEdge("Nanaimo", "Tofino");
airports.addEdge("Victoria", "Vancouver");
airports.addEdge("Nanaimo", "Calgary");
airports.addEdge("Victoria", "Tofino");
console.log(airports.adjacencyList);

airports.removeVertex("Nanaimo");
console.log(airports.adjacencyList);
