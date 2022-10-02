class Node {
   constructor(val, priority) {
      this.val = val;
      this.priority = priority;
   }
}

class PriorityQueue {
   // Min binary heap
   constructor() {
      this.values = [];
   }

   enqueue(value, priority) {
      let newNode = new Node(value, priority);
      this.values.push(newNode);
      this.bubbleUp();
   }

   dequeue() {
      const min = this.values[0];
      const end = this.values.pop();

      if (this.values.length > 0) {
         this.values[0] = end;
         this.sinkDown();
      }

      return min;
   }

   bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];

      while (idx > 0) {
         let parentIdx = Math.floor((idx - 1) / 2);
         let parent = this.values[parentIdx];

         if (element.priority >= parent.priority) break;

         this.values[parentIdx] = element;
         this.values[idx] = parent;
         idx = parentIdx;
      }
   }

   sinkDown() {
      let idx = 0;
      const element = this.values[0];
      const length = this.values.length;

      while (true) {
         let leftChildIdx = idx * 2 + 1;
         let rightChildIdx = idx * 2 + 2;

         let leftChild, rightChild;
         let swapIdx = null;

         if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx];
            if (leftChild.priority < element.priority) {
               swapIdx = leftChildIdx;
            }
         }
         if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx];
            if (
               (swapIdx === null && rightChild.priority < element.priority) ||
               (swapIdx !== null && rightChild.priority < leftChild.priority)
            ) {
               swapIdx = rightChildIdx;
            }
         }

         if (swapIdx === null) break;

         this.values[idx] = this.values[swapIdx];
         this.values[swapIdx] = element;
         idx = swapIdx;
      }
   }
}

let heap = new PriorityQueue();

heap.enqueue("fever", 3);
heap.enqueue("gunshot wound", 1);
heap.enqueue("drunk", 5);
heap.enqueue("broken leg", 3);
heap.enqueue("headache", 4);
heap.enqueue("glass in foot", 2);
heap.enqueue("heart attack", 1);

console.log(heap);

heap.dequeue();

console.log(heap);

heap.dequeue();

console.log(heap);
heap.dequeue();

console.log(heap);

exports.module = {
   Node,
   PriorityQueue,
};
