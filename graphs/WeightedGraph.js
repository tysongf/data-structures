const PriorityQueue = require("./BasicPriorityQueue.js");

class WeightedGraph {
   constructor() {
      this.adjacencyList = {};
   }
   addVertex(vertex) {
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
   }
   addEdge(vertex1, vertex2, weight) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
   }
   getShortestPath(startVertex, endVertex) {
      const nodes = new PriorityQueue();
      const distances = {};
      const previous = {};
      let path = [];
      let nearest;

      //Initialize distances map and previous map
      for (let vertex in this.adjacencyList) {
         if (vertex === startVertex) {
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
         } else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
         }
         previous[vertex] == null;
      }

      while (nodes.values.length) {
         nearest = nodes.dequeue().val;
         if (nearest === endVertex) {
            while (previous[nearest]) {
               path.push(nearest);
               nearest = previous[nearest];
            }
            break;
         }
         if (nearest || distances[nearest] !== Infinity) {
            //find and set nearest neighbor
            for (let neighbor in this.adjacencyList[nearest]) {
               let nextNode = this.adjacencyList[nearest][neighbor];
               let candidate = distances[nearest] + nextNode.weight;
               let nextNeighbor = nextNode.node;
               if (candidate < distances[nextNode.node]) {
                  distances[nextNeighbor] = candidate;
                  previous[nextNeighbor] = nearest;
                  nodes.enqueue(nextNeighbor, candidate);
               }
            }
         }
      }
      return path.concat(nearest).reverse();
   }
}

var graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.getShortestPath("A", "E"));

// ["A", "C", "D", "F", "E"]
