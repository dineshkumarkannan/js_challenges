class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  remove() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
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
    let idx = this.heap.length - 1;
    const element = this.heap[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];

      if (element >= parent) break;

      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  _bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swapIdx = null;

      if (leftIdx < length) {
        if (this.heap[leftIdx] < element) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (swapIdx === null && this.heap[rightIdx] < element) ||
          (swapIdx !== null && this.heap[rightIdx] < this.heap[leftIdx])
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === null) break;

      this.heap[idx] = this.heap[swapIdx];
      this.heap[swapIdx] = element;
      idx = swapIdx;
    }
  }
}

// KthLargest class using MinHeap
class KthLargest {
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinHeap();

    for (let num of nums) {
      this.add(num); // add elements one by one
    }
  }

  add(val) {
    if (this.minHeap.size() < this.k) {
      this.minHeap.insert(val);
    } else if (val > this.minHeap.peek()) {
      this.minHeap.remove();
      this.minHeap.insert(val);
    }
    return this.minHeap.peek();
  }
}

// Example usage
const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest.add(3)); // returns 4
console.log(kthLargest.add(5)); // returns 5
console.log(kthLargest.add(10)); // returns 5
console.log(kthLargest.add(9)); // returns 8
console.log(kthLargest.add(4)); // returns 8
// Output: 4, 5, 5, 8, 8
// Explanation: The KthLargest class maintains a min-heap of size k. When a new value is added, it checks if the heap has less than k elements or if the new value is larger than the smallest element in the heap. If so, it replaces the smallest element with the new value, ensuring that the heap always contains the k largest elements seen so far. The peek method returns the smallest element in the heap, which is the kth largest element in the stream.
// This implementation efficiently maintains the kth largest element in a stream of numbers using a min-heap.
// Time Complexity:
// - add(val): O(log k) for inserting into the min-heap
// - peek(): O(1) to get the smallest element
// Space Complexity: O(k) for storing the k largest elements in the min-heap
