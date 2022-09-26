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

   dftRecursive(start) {
      //depth-first traversal using recursive function
      const results = [];
      const visited = {};
      const adjacencyList = this.adjacencyList;
      (function dft(vertex) {
         if (!vertex) {
            return null;
         }
         visited[vertex] = true;
         results.push(vertex);
         adjacencyList[vertex].forEach((neighbor) => {
            if (!visited[neighbor]) return dft(neighbor);
         });
      })(start);
      return visited;
   }

   dftIterave(start) {
      //depth-first traversal using iterave method
      const results = [];
      const stack = [start];
      const visited = {};
      let vertex = null;
      while (stack.length) {
         vertex = stack.pop();
         if (results.indexOf(vertex) < 0) {
            results.push(vertex);
            this.adjacencyList[vertex].forEach((vtx) => {
               if (!visited[vtx]) {
                  visited[vtx] = true;
                  stack.push(vtx);
               }
            });
         }
      }
      return results;
   }

   bft(start) {
      //breadth-first traversal using iterave method
      const results = [];
      const queue = [start];
      const visited = {};
      let vertex = null;
      while (queue.length) {
         vertex = queue.pop();
         results.push(vertex);
         visited[vertex] = true;
         this.adjacencyList[vertex].forEach((vtx) => {
            if (!visited[vtx]) {
               visited[vtx] = true;
               queue.unshift(vtx);
            }
         });
      }
      return results;
   }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.bft("A"));
