// MinHeap helper
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = end;
      this._bubbleDown();
    }
    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  _bubbleUp() {
    let i = this.heap.length - 1;
    const val = this.heap[i];
    while (i > 0) {
      const parentIdx = Math.floor((i - 1) / 2);
      if (this.heap[parentIdx] <= val) break;
      this.heap[i] = this.heap[parentIdx];
      this.heap[parentIdx] = val;
      i = parentIdx;
    }
  }

  _bubbleDown() {
    let i = 0;
    const length = this.heap.length;
    const val = this.heap[0];

    while (true) {
      let leftIdx = 2 * i + 1;
      let rightIdx = 2 * i + 2;
      let swapIdx = null;

      if (leftIdx < length && this.heap[leftIdx] < val) {
        swapIdx = leftIdx;
      }

      if (
        rightIdx < length &&
        ((swapIdx === null && this.heap[rightIdx] < val) ||
          (swapIdx !== null && this.heap[rightIdx] < this.heap[leftIdx]))
      ) {
        swapIdx = rightIdx;
      }

      if (swapIdx === null) break;

      this.heap[i] = this.heap[swapIdx];
      this.heap[swapIdx] = val;
      i = swapIdx;
    }
  }
}

// MaxHeap is just MinHeap with negated values
class MaxHeap {
  constructor() {
    this.minHeap = new MinHeap();
  }

  insert(val) {
    this.minHeap.insert(-val);
  }

  extractMax() {
    return -this.minHeap.extractMin();
  }

  peek() {
    return -this.minHeap.peek();
  }

  size() {
    return this.minHeap.size();
  }
}

class MedianFinder {
  constructor() {
    this.low = new MaxHeap(); // MaxHeap for lower half
    this.high = new MinHeap(); // MinHeap for upper half
  }

  addNum(num) {
    // Step 1: Add to MaxHeap
    this.low.insert(num);

    // Step 2: Move max of low to high to maintain order
    this.high.insert(this.low.extractMax());

    // Step 3: Balance sizes
    if (this.high.size() > this.low.size()) {
      this.low.insert(this.high.extractMin());
    }
  }

  findMedian() {
    if (this.low.size() > this.high.size()) {
      return this.low.peek();
    } else {
      return (this.low.peek() + this.high.peek()) / 2;
    }
  }
}
// Example usage:
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
medianFinder.addNum(3);
console.log(medianFinder.findMedian()); // Output: 2
medianFinder.addNum(4);
console.log(medianFinder.findMedian()); // Output: 2.5
medianFinder.addNum(5);
console.log(medianFinder.findMedian()); // Output: 3

// addNum(num): O(log n)
// findMedian(): O(1)
// Space: O(n) for n inserted elements
