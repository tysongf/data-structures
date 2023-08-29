class MinPriorityQueue {
   constructor() {
      this.items = [];
   }

   enqueue(new_item) {
      if (!("priority" in new_item)) {
         throw new Error("New item must have a 'priority' property.");
      }
      this.items.push(new_item);
      this.bubbleUp();
   }

   dequeue() {
      const min = this.items[0];
      const end = this.items.pop();

      if (this.items.length > 0) {
         this.items[0] = end;
         this.sinkDown();
      }

      return min;
   }

   bubbleUp() {
      let idx = this.items.length - 1;
      const item = this.items[idx];

      while (idx > 0) {
         let parentIdx = Math.floor((idx - 1) / 2);
         let parent = this.items[parentIdx];

         if (item.priority >= parent.priority) break;

         this.items[parentIdx] = item;
         this.items[idx] = parent;
         idx = parentIdx;
      }
   }

   sinkDown() {
      let idx = 0;
      const item = this.items[0];
      const length = this.items.length;

      while (true) {
         let leftChildIdx = idx * 2 + 1;
         let rightChildIdx = idx * 2 + 2;

         let leftChild, rightChild;
         let swapIdx = null;

         if (leftChildIdx < length) {
            leftChild = this.items[leftChildIdx];
            if (leftChild.priority < item.priority) {
               swapIdx = leftChildIdx;
            }
         }
         if (rightChildIdx < length) {
            rightChild = this.items[rightChildIdx];
            if (
               (swapIdx === null && rightChild.priority < item.priority) ||
               (swapIdx !== null && rightChild.priority < leftChild.priority)
            ) {
               swapIdx = rightChildIdx;
            }
         }

         if (swapIdx === null) break;

         this.items[idx] = this.items[swapIdx];
         this.items[swapIdx] = item;
         idx = swapIdx;
      }
   }
}

module.exports = MinPriorityQueue;
