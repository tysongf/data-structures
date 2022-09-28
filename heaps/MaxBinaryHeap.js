class MaxBinaryHeap {
   constructor() {
      this.values = [];
   }

   insert(value) {
      this.values.push(value);
      this.bubbleUp();
   }

   bubbleUp() {
      let idx = this.values.length - 1;
      const element = this.values[idx];

      while (idx > 0) {
         let parentIdx = Math.floor((idx - 1) / 2);
         let parent = this.values[parentIdx];

         if (element <= parent) break;

         this.values[parentIdx] = element;
         this.values[idx] = parent;
         idx = parentIdx;
      }
   }

   extractMax() {
      const max = this.values[0];
      const end = this.values.pop();

      if (this.values.length > 0) {
         this.values[0] = end;
         this.sinkDown();
      }

      return max;
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
            if (leftChild > element) {
               swapIdx = leftChildIdx;
            }
         }
         if (rightChildIdx < length) {
            if (
               (swapIdx === null && leftChildIdx < this.values.length) ||
               (swapIdx !== null && rightChild > leftChild)
            ) {
               leftChild = this.values[leftChildIdx];
               if (rightChild > element) {
                  swapIdx = rightChildIdx;
               }
            }
         }

         if (swapIdx === null) break;

         this.values[idx] = this.values[swapIdx];
         this.values[swapIdx] = element;
         idx = swapIdx;
      }
   }
}

let heap = new MaxBinaryHeap();

const initSize = 20;

for (let i = 0; i < initSize; i++) {
   heap.insert(Math.floor(Math.random() * initSize));
}

console.log(heap.values);

for (let i = 0; i < Math.floor(initSize / 4); i++) {
   console.log(`Removing ${heap.extractMax()}`);
}
console.log(heap.values);
